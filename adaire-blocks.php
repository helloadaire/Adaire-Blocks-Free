<?php
/**
 * Plugin Name:       Adaire Blocks
 * Description:       A powerful WordPress plugin that helps developers and designers create visually stunning, high-performance websites with ease right inside the Gutenberg editor.
 * Version:           1.0.9
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            <a href="https://adaire.digital" target="_blank">Adaire Digital</a>
 * License:           GPL-3.0
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       adaire-blocks
 *
 * @package AdaireBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// =========================
// Plugin Update Checker
// =========================
require_once __DIR__ . '/plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$myUpdateChecker = PucFactory::buildUpdateChecker(
    'https://raw.githubusercontent.com/helloadaire/Adaire-Blocks-Update-JSON/main/update-info.json',
    __FILE__,
    'adaire-blocks'
);



// =========================
// Version Rollback
// =========================

// Clear version cache when plugin is updated
add_action('upgrader_process_complete', function($upgrader, $hook_extra) {
    if (isset($hook_extra['plugin']) && $hook_extra['plugin'] === plugin_basename(__FILE__)) {
        delete_transient('adaire-blocks_latest_version');
        error_log('[Adaire Blocks Rollback] Plugin updated - cleared version cache');
    }
}, 10, 2);

// Also clear cache when plugin is activated (in case version changed)
add_action('activated_plugin', function($plugin) {
    if ($plugin === plugin_basename(__FILE__)) {
        delete_transient('adaire-blocks_latest_version');
        error_log('[Adaire Blocks Rollback] Plugin activated - cleared version cache');
    }
});

// Add rollback link in plugin row (only if current version is the latest)
add_filter('plugin_action_links_' . plugin_basename(__FILE__), function ($links) {
    // Get current version dynamically from plugin header
    $plugin_data = get_plugin_data(__FILE__);
    $current_version = $plugin_data['Version'];
    $is_latest_version = true;
    
    // Log the current version
    error_log('[Adaire Blocks Rollback] Current version: ' . $current_version);
    
    // Check if there's a newer version available by directly checking the JSON file
    // Cache the result for 1 hour to avoid checking too frequently
    $cache_key = 'adaire-blocks_latest_version';
    $cached_version = get_transient($cache_key);
    
    // Force refresh cache if we're on a newer version than what's cached
    if ($cached_version !== false && $cached_version !== 'error') {
        if (version_compare($current_version, $cached_version, '>')) {
            error_log('[Adaire Blocks Rollback] Current version is newer than cached version - clearing cache');
            delete_transient($cache_key);
            $cached_version = false;
        }
    }
    
    if ($cached_version === false) {
        // Cache expired or doesn't exist, fetch from JSON
        $json_url = 'https://raw.githubusercontent.com/helloadaire/Adaire-Blocks-Update-JSON/main/update-info.json';
        $response = wp_remote_get($json_url, array('timeout' => 5));
        
        if (!is_wp_error($response) && wp_remote_retrieve_response_code($response) === 200) {
            $json_data = json_decode(wp_remote_retrieve_body($response), true);
            if ($json_data && isset($json_data['version'])) {
                $latest_version = $json_data['version'];
                error_log('[Adaire Blocks Rollback] Latest available version from JSON: ' . $latest_version);
                
                // Cache the result for 1 hour
                set_transient($cache_key, $latest_version, HOUR_IN_SECONDS);
                
                if (version_compare($current_version, $latest_version, '<')) {
                    $is_latest_version = false;
                    error_log('[Adaire Blocks Rollback] Hiding rollback link - newer version available: ' . $latest_version);
                }
            } else {
                error_log('[Adaire Blocks Rollback] Invalid JSON data received');
                set_transient($cache_key, 'error', HOUR_IN_SECONDS);
            }
        } else {
            error_log('[Adaire Blocks Rollback] Failed to fetch JSON: ' . (is_wp_error($response) ? $response->get_error_message() : 'HTTP ' . wp_remote_retrieve_response_code($response)));
            set_transient($cache_key, 'error', HOUR_IN_SECONDS);
        }
    } else {
        // Use cached version
        if ($cached_version !== 'error') {
            error_log('[Adaire Blocks Rollback] Using cached latest version: ' . $cached_version);
            if (version_compare($current_version, $cached_version, '<')) {
                $is_latest_version = false;
                error_log('[Adaire Blocks Rollback] Hiding rollback link - newer version available: ' . $cached_version);
            }
        } else {
            error_log('[Adaire Blocks Rollback] Using cached error state - showing rollback link');
        }
    }
    
    // Only show rollback link if current version is the latest
    if ($is_latest_version) {
        error_log('[Adaire Blocks Rollback] Showing rollback link - current version is latest');
        $links[] = '<a href="' . esc_url(admin_url('admin-post.php?action=my_plugin_rollback&_wpnonce=' . wp_create_nonce('my_plugin_rollback'))) . '" class="my-plugin-rollback-btn">Rollback</a>';
    }
    
    return $links;
});

// Handle rollback request
add_action('admin_post_my_plugin_rollback', function () {
    if (!current_user_can('update_plugins')) {
        wp_die('Unauthorized');
    }

    if (!isset($_GET['_wpnonce']) || !wp_verify_nonce($_GET['_wpnonce'], 'my_plugin_rollback')) {
        error_log('[Adaire Blocks Rollback] Nonce verification failed');
        wp_die('Security check failed.');
    }

    // URL to the previous version ZIP
    $previous_version_zip = 'https://github.com/helloadaire/Adaire-Blocks/releases/download/v1.0.8.alpha/adaire-blocks.1.0.8.alpha.zip';
    error_log('[Adaire Blocks Rollback] Attempting rollback to: ' . $previous_version_zip);

    require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
    require_once ABSPATH . 'wp-admin/includes/plugin.php';
    require_once ABSPATH . 'wp-admin/includes/file.php';
    require_once ABSPATH . 'wp-admin/includes/misc.php';

    $plugin_slug = plugin_basename(__FILE__);

    // Deactivate current plugin
    deactivate_plugins($plugin_slug);
    error_log('[Adaire Blocks Rollback] Plugin deactivated.');

    // Delete current plugin folder
    $plugin_dir = plugin_dir_path(__FILE__);
    if (WP_Filesystem()) {
        global $wp_filesystem;
        if ($wp_filesystem->delete($plugin_dir, true, true)) {
            error_log('[Adaire Blocks Rollback] Plugin folder deleted successfully.');
        } else {
            error_log('[Adaire Blocks Rollback] Failed to delete plugin folder.');
            wp_die('Failed to delete current plugin folder. Check debug.log.');
        }
    }

    // Install previous version using Automatic_Upgrader_Skin (shows standard WP install page)
    $upgrader = new Plugin_Upgrader(new Automatic_Upgrader_Skin());
    $result = $upgrader->install($previous_version_zip);

    if ($result && !is_wp_error($result)) {
        activate_plugin($plugin_slug);
        error_log('[Adaire Blocks Rollback] Rollback successful and plugin activated.');
        wp_safe_redirect(admin_url('plugins.php?rollback=success'));
    } else {
        error_log('[Adaire Blocks Rollback] Rollback failed: ' . print_r($result, true));
        wp_safe_redirect(admin_url('plugins.php?rollback=failed'));
    }

    exit;
});

// Show admin notice
add_action('admin_notices', function () {
    if (!isset($_GET['rollback'])) return;
    if ($_GET['rollback'] === 'success') {
        echo '<div class="notice notice-success is-dismissible"><p>Plugin rolled back successfully and activated.</p></div>';
    } elseif ($_GET['rollback'] === 'failed') {
        echo '<div class="notice notice-error is-dismissible"><p>Rollback failed. Check debug.log for details.</p></div>';
    }
});




// End of version rollback code

// Define plugin constants
define('ADAIRE_BLOCKS_VERSION', '1.0.9.1');
define('ADAIRE_BLOCKS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('ADAIRE_BLOCKS_PLUGIN_PATH', plugin_dir_path(__FILE__));

// Include settings page
require_once ADAIRE_BLOCKS_PLUGIN_PATH . 'admin/settings-page.php';

// Include block migration tool
require_once ADAIRE_BLOCKS_PLUGIN_PATH . 'admin/block-migration.php';

// Include diagnostics tool
require_once ADAIRE_BLOCKS_PLUGIN_PATH . 'admin/diagnostics.php';
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_gsap_hero_block_block_init() {
	// Get settings instance
	$settings = AdaireBlocksSettings::get_instance();
	$block_settings = $settings->get_settings();
	
	// Get available blocks dynamically
	$available_blocks = $settings->get_available_blocks();
	$block_mapping = array();
	
	// Build mapping from available blocks
	foreach ($available_blocks as $settings_key => $block_data) {
		$block_mapping[$settings_key] = $block_data['block_name'];
	}
	
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		// Filter blocks based on settings before registration
		$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
		$filtered_manifest = array();
		
		foreach ( $manifest_data as $block_name => $block_data ) {
			$block_key = array_search( $block_name, $block_mapping );
			if ( $block_key !== false && isset( $block_settings[ $block_key ] ) && $block_settings[ $block_key ] ) {
				$filtered_manifest[ $block_name ] = $block_data;
			}
		}
		
		// Only proceed if we have blocks to register
		if ( ! empty( $filtered_manifest ) ) {
			// Create a temporary filtered manifest file
			$temp_manifest_path = __DIR__ . '/build/blocks-manifest-filtered.php';
			file_put_contents( $temp_manifest_path, '<?php return ' . var_export( $filtered_manifest, true ) . ';' );
			
			wp_register_block_types_from_metadata_collection( __DIR__ . '/build', $temp_manifest_path );
			
			// Clean up temporary file
			if ( file_exists( $temp_manifest_path ) ) {
				unlink( $temp_manifest_path );
			}
		}
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		$block_key = array_search( $block_type, $block_mapping );
		if ( $block_key !== false && isset( $block_settings[ $block_key ] ) && $block_settings[ $block_key ] ) {
			register_block_type( __DIR__ . "/build/{$block_type}" );
		}
	}
}
add_action( 'init', 'create_block_gsap_hero_block_block_init' );

// Filter to prevent disabled blocks from appearing in the block editor
add_filter( 'block_editor_rest_api_preload_paths', 'adaire_blocks_filter_block_editor_blocks' );
function adaire_blocks_filter_block_editor_blocks( $preload_paths ) {
	// Get settings
	$settings = AdaireBlocksSettings::get_instance();
	$block_settings = $settings->get_settings();
	$available_blocks = $settings->get_available_blocks();
	
	// Remove disabled blocks from the block editor
	foreach ( $available_blocks as $settings_key => $block_data ) {
		if ( isset( $block_settings[ $settings_key ] ) && ! $block_settings[ $settings_key ] ) {
			// Remove the block from available blocks in the editor
			wp_deregister_script( 'create-block-' . str_replace( '-', '-', $block_data['block_name'] ) );
		}
	}
	
	return $preload_paths;
}

// Filter to prevent disabled blocks from being registered
add_filter( 'register_block_type_args', 'adaire_blocks_prevent_disabled_blocks', 10, 2 );
function adaire_blocks_prevent_disabled_blocks( $args, $name ) {
	// Only filter our blocks
	if ( strpos( $name, 'create-block/' ) !== 0 ) {
		return $args;
	}
	
	// Get settings
	$settings = AdaireBlocksSettings::get_instance();
	$block_settings = $settings->get_settings();
	$available_blocks = $settings->get_available_blocks();
	
	// Find the block key for this block
	$block_name = str_replace( 'create-block/', '', $name );
	$block_key = null;
	
	foreach ( $available_blocks as $settings_key => $block_data ) {
		if ( $block_data['block_name'] === $block_name ) {
			$block_key = $settings_key;
			break;
		}
	}
	
	// If block is disabled, prevent registration by returning empty args
	if ( $block_key && isset( $block_settings[ $block_key ] ) && ! $block_settings[ $block_key ] ) {
		return array();
	}
	
	return $args;
}

// Filter to prevent disabled blocks from being available in the editor
add_action( 'enqueue_block_editor_assets', 'adaire_blocks_filter_editor_blocks' );
function adaire_blocks_filter_editor_blocks() {
	// Get settings
	$settings = AdaireBlocksSettings::get_instance();
	$block_settings = $settings->get_settings();
	$available_blocks = $settings->get_available_blocks();
	
	// Create JavaScript to remove disabled blocks from the editor
	$disabled_blocks = array();
	foreach ( $available_blocks as $settings_key => $block_data ) {
		if ( isset( $block_settings[ $settings_key ] ) && ! $block_settings[ $settings_key ] ) {
			$disabled_blocks[] = 'create-block/' . $block_data['block_name'];
		}
	}
	
	if ( ! empty( $disabled_blocks ) ) {
		wp_add_inline_script( 'wp-blocks', '
			wp.domReady( function() {
				var disabledBlocks = ' . json_encode( $disabled_blocks ) . ';
				disabledBlocks.forEach( function( blockName ) {
					if ( wp.blocks.unregisterBlockType ) {
						wp.blocks.unregisterBlockType( blockName );
					}
				});
			});
		');
	}
}

// Enqueue Locomotive Scroll assets if the locomotive-block is present on the page
function enqueue_locomotive_scroll_assets() {
    if ( is_admin() ) {
        return;
    }
    global $post;
    if ( ! $post ) {
        return;
    }
    if ( has_block( 'create-block/locomotive-block', $post ) ) {
        // Enqueue Locomotive Scroll JS and CSS from CDN or local
        wp_enqueue_script(
            'locomotive-scroll',
            'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js',
            array(),
            '4.1.4',
            true
        );
        wp_enqueue_style(
            'locomotive-scroll',
            'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css',
            array(),
            '4.1.4'
        );
    }
}
add_action( 'wp_enqueue_scripts', 'enqueue_locomotive_scroll_assets' );

// Pass block data to frontend for video-hero-block
function enqueue_video_hero_block_data() {
    if ( is_admin() ) {
        return;
    }
    global $post;
    if ( ! $post ) {
        return;
    }
    if ( has_block( 'create-block/video-hero-block', $post ) ) {
        // Get all video-hero-block instances on the page
        $blocks = parse_blocks( $post->post_content );
        $video_hero_blocks = array();
        
        // Debug: log the raw post content
        error_log('Raw post content: ' . substr($post->post_content, 0, 1000) . '...');
        
        // Debug: look for video-hero-block in the content
        if (strpos($post->post_content, 'create-block/video-hero-block') !== false) {
            error_log('Found video-hero-block in content');
        } else {
            error_log('No video-hero-block found in content');
        }
        
        // Recursive function to find blocks in nested structures
        function find_video_hero_blocks($blocks, &$video_hero_blocks) {
            foreach ( $blocks as $block ) {
                if ( $block['blockName'] === 'create-block/video-hero-block' ) {
                    $block_id = $block['attrs']['blockId'] ?? uniqid('video-hero-');
                    // Debug: log the block attributes
                    error_log('Video Hero Block Found - ID: ' . $block_id);
                    error_log('Block attrs: ' . print_r($block['attrs'], true));
                    error_log('Videos specifically: ' . print_r($block['attrs']['videos'] ?? 'NOT SET', true));
                    // Ensure we have the full attributes array
                    $video_hero_blocks[$block_id] = $block['attrs'] ?? array();
                }
                // Recursively search in inner blocks
                if ( ! empty( $block['innerBlocks'] ) ) {
                    find_video_hero_blocks( $block['innerBlocks'], $video_hero_blocks );
                }
            }
        }
        
        find_video_hero_blocks($blocks, $video_hero_blocks);
        
        // Debug: log all blocks found
        error_log('All blocks found: ' . print_r($blocks, true));
        
        // Always add the script, even if empty, for debugging
        add_action( 'wp_footer', function() use ($video_hero_blocks) {
            echo '<script>console.log("PHP Debug - video_hero_blocks:", ' . json_encode($video_hero_blocks) . ');</script>';
            echo '<script>console.log("PHP Debug - videos in first block:", ' . json_encode($video_hero_blocks[array_keys($video_hero_blocks)[0]]['videos'] ?? 'NOT FOUND') . ');</script>';
            echo '<script>window.videoHeroBlockData = ' . json_encode($video_hero_blocks) . ';</script>';
            echo '<script>window.wpApiSettings = { postId: ' . get_the_ID() . ' };</script>';
        });
    }
}

// Pass block data to frontend for services-block
function enqueue_services_block_data() {
    if ( is_admin() ) {
        return;
    }
    global $post;
    if ( ! $post ) {
        return;
    }
    if ( has_block( 'create-block/services-block', $post ) ) {
        // Get all services-block instances on the page
        $blocks = parse_blocks( $post->post_content );
        $services_blocks = array();
        
        // Recursive function to find blocks in nested structures
        function find_services_blocks($blocks, &$services_blocks) {
            foreach ( $blocks as $block ) {
                if ( $block['blockName'] === 'create-block/services-block' ) {
                    $block_id = $block['attrs']['blockId'] ?? uniqid('services-');
                    // Ensure we have the full attributes array
                    $services_blocks[$block_id] = $block['attrs'] ?? array();
                }
                // Recursively search in inner blocks
                if ( ! empty( $block['innerBlocks'] ) ) {
                    find_services_blocks( $block['innerBlocks'], $services_blocks );
                }
            }
        }
        
        find_services_blocks($blocks, $services_blocks);
        
        // Always add the script, even if empty, for debugging
        add_action( 'wp_footer', function() use ($services_blocks) {
            echo '<script>console.log("PHP Debug - services_blocks:", ' . json_encode($services_blocks) . ');</script>';
            echo '<script>console.log("PHP Debug - slides in first block:", ' . json_encode($services_blocks[array_keys($services_blocks)[0]]['slides'] ?? 'NOT FOUND') . ');</script>';
            echo '<script>window.servicesBlockData = ' . json_encode($services_blocks) . ';</script>';
        });
    }
}
add_action( 'wp_enqueue_scripts', 'enqueue_video_hero_block_data' );
add_action( 'wp_enqueue_scripts', 'enqueue_services_block_data' );

// Add REST API endpoint for block data
function register_video_hero_rest_route() {
    register_rest_route('adaire-blocks/v1', '/video-hero-data/(?P<post_id>\d+)', array(
        'methods' => 'GET',
        'callback' => 'get_video_hero_block_data',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'register_video_hero_rest_route');

function get_video_hero_block_data($request) {
    $post_id = $request['post_id'];
    $post = get_post($post_id);
    
    if (!$post) {
        return new WP_Error('post_not_found', 'Post not found', array('status' => 404));
    }
    
    $blocks = parse_blocks($post->post_content);
    $video_hero_blocks = array();
    
    foreach ($blocks as $block) {
        if ($block['blockName'] === 'create-block/video-hero-block') {
            $block_id = $block['attrs']['blockId'] ?? uniqid('video-hero-');
            $video_hero_blocks[$block_id] = $block['attrs'];
        }
    }
    
    return $video_hero_blocks;
}

// Include Posts Grid Block PHP functionality (if file exists)
$posts_grid_render = plugin_dir_path(__FILE__) . 'src/posts-grid-block/render.php';
if (file_exists($posts_grid_render)) {
    require_once $posts_grid_render;
}

// Ensure REST API settings are available on the frontend
function adaire_blocks_add_rest_api_settings() {
	// Only needed on frontend
	if (is_admin()) {
		return;
	}

	// Add REST API settings to the page head
	// This ensures wpApiSettings is always available for our blocks
	?>
	<script>
	if (typeof window.wpApiSettings === 'undefined') {
		window.wpApiSettings = {
			root: <?php echo json_encode(esc_url_raw(rest_url())); ?>,
			nonce: <?php echo json_encode(wp_create_nonce('wp_rest')); ?>,
			versionString: 'wp/v2/'
		};
		console.log('[Adaire Blocks] wpApiSettings initialized:', window.wpApiSettings);
	}
	</script>
	<?php
}
add_action('wp_head', 'adaire_blocks_add_rest_api_settings', 1);

// Auto Block Recovery - Automatically recover blocks on editor load
function adaire_blocks_enqueue_auto_recovery() {
	// Always load in admin, let the script decide if it should run
	if ( ! is_admin() ) {
		return;
	}

	// Check if the auto-recovery file exists
	$script_path = ADAIRE_BLOCKS_PLUGIN_PATH . 'admin/js/auto-block-recovery.js';
	if ( ! file_exists( $script_path ) ) {
		error_log( '[Adaire Blocks] Auto-recovery script not found at: ' . $script_path );
		return;
	}

	// Enqueue the auto-recovery script
	wp_enqueue_script(
		'adaire-auto-block-recovery',
		ADAIRE_BLOCKS_PLUGIN_URL . 'admin/js/auto-block-recovery.js',
		array( 'wp-blocks', 'wp-data', 'wp-block-editor', 'wp-notices', 'wp-element' ),
		ADAIRE_BLOCKS_VERSION,
		true // Load in footer to ensure dependencies are loaded
	);

	// Add inline script to verify loading
	$script_url = ADAIRE_BLOCKS_PLUGIN_URL . 'admin/js/auto-block-recovery.js';
	$inline_script = sprintf(
		'console.log("[Adaire Blocks] Inline script executing...");
		console.log("[Adaire Blocks] Version: %s");
		console.log("[Adaire Blocks] Script URL: %s");
		console.log("[Adaire Blocks] Plugin path exists:", %s);
		window.adaireBlocksAutoRecoveryLoaded = true;
		window.adaireBlocksVersion = "%s";',
		esc_js(ADAIRE_BLOCKS_VERSION),
		esc_js($script_url),
		file_exists($script_path) ? 'true' : 'false',
		esc_js(ADAIRE_BLOCKS_VERSION)
	);
	
	wp_add_inline_script(
		'adaire-auto-block-recovery',
		$inline_script,
		'before'
	);
}
add_action( 'enqueue_block_editor_assets', 'adaire_blocks_enqueue_auto_recovery' );