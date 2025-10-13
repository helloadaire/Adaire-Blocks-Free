<?php
/**
 * Block Item Limits - Server-side validation
 * 
 * Enforces free tier limits on blocks to prevent bypassing via client-side manipulation
 * 
 * @package AdaireBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class Adaire_Block_Limits {
    
    /**
     * Free tier item limits for each block
     */
    const FREE_TIER_LIMITS = array(
        'create-block/accordion-block' => array(
            'attribute' => 'items',
            'limit' => 3,
            'item_name' => 'accordion items'
        ),
        'create-block/logos-block' => array(
            'attribute' => 'partnerLogos',
            'limit' => 3,
            'item_name' => 'logos'
        ),
        'create-block/tabs-block' => array(
            'attribute' => 'tabs',
            'limit' => 3,
            'item_name' => 'tabs'
        ),
        'create-block/testimonial-block' => array(
            'attribute' => 'testimonials',
            'limit' => 3,
            'item_name' => 'testimonials'
        ),
    );

    /**
     * Initialize hooks
     */
    public static function init() {
        add_filter( 'render_block', array( __CLASS__, 'validate_block_limits' ), 10, 2 );
        add_action( 'rest_api_init', array( __CLASS__, 'register_rest_validation' ) );
        add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_limits' ) );
    }
    
    /**
     * Enqueue block limits to the editor
     */
    public static function enqueue_block_limits() {
        // Get limits for each block
        $limits = array();
        $is_pro = self::is_pro_user();
        
        foreach ( self::FREE_TIER_LIMITS as $block_name => $config ) {
            $block_slug = str_replace( 'create-block/', '', $block_name );
            $limits[ $block_slug ] = array(
                'attribute' => $config['attribute'],
                'limit' => $is_pro ? 999 : $config['limit'], // No limit for pro users
                'itemName' => $config['item_name'],
                'isPro' => $is_pro
            );
        }
        
        // Add inline script to make limits available globally
        wp_add_inline_script(
            'wp-blocks',
            'window.adaireBlockLimits = ' . json_encode( $limits ) . ';',
            'before'
        );
    }

    /**
     * Check if user has pro version
     * 
     * @return bool
     */
    public static function is_pro_user() {
        // TODO: Implement your pro license check here
        // For now, return false (free tier)
        // Example: return get_option('adaire_blocks_pro_license_active', false);
        return apply_filters( 'adaire_blocks_is_pro', false );
    }

    /**
     * Validate block item limits on render
     * 
     * @param string $block_content The block content
     * @param array $block The block data
     * @return string Modified block content or error message
     */
    public static function validate_block_limits( $block_content, $block ) {
        // Skip if pro user
        if ( self::is_pro_user() ) {
            return $block_content;
        }

        $block_name = $block['blockName'];

        // Check if this block has limits
        if ( ! isset( self::FREE_TIER_LIMITS[ $block_name ] ) ) {
            return $block_content;
        }

        $limit_config = self::FREE_TIER_LIMITS[ $block_name ];
        $attribute_name = $limit_config['attribute'];
        $max_items = $limit_config['limit'];
        $item_name = $limit_config['item_name'];

        // Get the attribute value
        if ( ! isset( $block['attrs'][ $attribute_name ] ) ) {
            return $block_content;
        }

        $items = $block['attrs'][ $attribute_name ];
        
        // Count items
        $item_count = is_array( $items ) ? count( $items ) : 0;

        // If limit exceeded, truncate the items
        if ( $item_count > $max_items ) {
            // Truncate to the allowed limit
            $block['attrs'][ $attribute_name ] = array_slice( $items, 0, $max_items );
            
            // Add a notice to admin users
            if ( current_user_can( 'edit_posts' ) ) {
                $notice = sprintf(
                    '<div class="adaire-blocks-limit-notice" style="padding: 15px; background: linear-gradient(135deg, #000000 0%%, #ff0909 100%%); color: white; border-radius: 6px; margin-bottom: 20px; font-size: 14px;">
                        <strong>⚠️ Free Tier Limit:</strong> This block is limited to %d %s. 
                        <a href="https://adaire.digital/adaire-blocks" target="_blank" style="color: white; text-decoration: underline; font-weight: bold;">Upgrade to Pro</a> to add more.
                    </div>',
                    $max_items,
                    $item_name
                );
                
                // Only show notice in editor/preview context
                if ( is_admin() || is_preview() ) {
                    $block_content = $notice . $block_content;
                }
            }
        }

        return $block_content;
    }

    /**
     * Register REST API validation for block saves
     */
    public static function register_rest_validation() {
        // Hook into the block update process (posts and pages)
        add_filter( 'rest_pre_insert_post', array( __CLASS__, 'validate_post_blocks' ), 10, 2 );
        add_filter( 'rest_pre_insert_page', array( __CLASS__, 'validate_post_blocks' ), 10, 2 );
        
        // Also validate block attributes directly when updated via REST API
        add_filter( 'rest_request_before_callbacks', array( __CLASS__, 'validate_block_attributes_in_request' ), 10, 3 );
    }
    
    /**
     * Validate block attributes in REST API requests
     * 
     * @param mixed $response Response to replace the requested version with
     * @param WP_REST_Server $server Server instance
     * @param WP_REST_Request $request Request used to generate the response
     * @return mixed Response or WP_Error
     */
    public static function validate_block_attributes_in_request( $response, $server, $request ) {
        // Skip if pro user
        if ( self::is_pro_user() ) {
            return $response;
        }
        
        // Only check autosave and post/page update routes
        $route = $request->get_route();
        if ( ! preg_match( '#/wp/v2/(posts|pages|autosaves)#', $route ) ) {
            return $response;
        }
        
        // Get the content from the request
        $params = $request->get_json_params();
        if ( empty( $params['content'] ) ) {
            return $response;
        }
        
        $content = $params['content'];
        
        // Parse and validate blocks
        $blocks = parse_blocks( $content );
        $modified = false;
        
        foreach ( $blocks as &$block ) {
            $result = self::validate_single_block( $block );
            if ( $result['modified'] ) {
                $modified = true;
            }
        }
        
        // If blocks were modified, update the request content
        if ( $modified ) {
            $request->set_param( 'content', serialize_blocks( $blocks ) );
        }
        
        return $response;
    }

    /**
     * Validate blocks before saving via REST API
     * 
     * @param stdClass $prepared_post Post object
     * @param WP_REST_Request $request Request object
     * @return stdClass|WP_Error Modified post object or error
     */
    public static function validate_post_blocks( $prepared_post, $request ) {
        // Skip if pro user
        if ( self::is_pro_user() ) {
            return $prepared_post;
        }

        // Get the content
        $content = isset( $prepared_post->post_content ) ? $prepared_post->post_content : '';
        
        if ( empty( $content ) ) {
            return $prepared_post;
        }

        // Parse blocks
        $blocks = parse_blocks( $content );
        $modified = false;

        // Validate each block
        foreach ( $blocks as &$block ) {
            $result = self::validate_single_block( $block );
            if ( $result['modified'] ) {
                $modified = true;
            }
        }

        // If any blocks were modified, re-serialize
        if ( $modified ) {
            $prepared_post->post_content = serialize_blocks( $blocks );
        }

        return $prepared_post;
    }

    /**
     * Validate a single block and its inner blocks recursively
     * 
     * @param array &$block Block data (passed by reference)
     * @return array Result with 'modified' flag
     */
    private static function validate_single_block( &$block ) {
        $modified = false;

        // Check if this block has limits
        if ( isset( self::FREE_TIER_LIMITS[ $block['blockName'] ] ) ) {
            $limit_config = self::FREE_TIER_LIMITS[ $block['blockName'] ];
            $attribute_name = $limit_config['attribute'];
            $max_items = $limit_config['limit'];

            // Check the attribute
            if ( isset( $block['attrs'][ $attribute_name ] ) && is_array( $block['attrs'][ $attribute_name ] ) ) {
                $item_count = count( $block['attrs'][ $attribute_name ] );
                
                if ( $item_count > $max_items ) {
                    // Truncate to max allowed
                    $block['attrs'][ $attribute_name ] = array_slice( 
                        $block['attrs'][ $attribute_name ], 
                        0, 
                        $max_items 
                    );
                    $modified = true;
                }
            }
        }

        // Recursively check inner blocks
        if ( ! empty( $block['innerBlocks'] ) ) {
            foreach ( $block['innerBlocks'] as &$inner_block ) {
                $result = self::validate_single_block( $inner_block );
                if ( $result['modified'] ) {
                    $modified = true;
                }
            }
        }

        return array( 'modified' => $modified );
    }
}

// Initialize the block limits
Adaire_Block_Limits::init();

