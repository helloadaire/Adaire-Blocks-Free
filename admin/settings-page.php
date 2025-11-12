<?php
/**
 * Settings page for Adaire Blocks
 *
 * @package AdaireBlocks
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class AdaireBlocksSettings {
    
    private static $instance = null;
    private $option_name = 'adaire_blocks_settings';
    private $settings;
    
    private function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'init_settings'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
        add_action('wp_ajax_adaire_blocks_save_settings', array($this, 'ajax_save_settings'));
        add_action('wp_ajax_adaire_blocks_reset_settings', array($this, 'ajax_reset_settings'));
        add_filter('plugin_action_links', array($this, 'add_plugin_settings_link'), 10, 2);
    }
    
    /**
     * Get singleton instance
     */
    public static function get_instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        // Custom SVG icon for the admin menu
        // Note: Remove background, use fill="black" for proper WordPress admin menu color handling
        $svg_icon = 'data:image/svg+xml;base64,' . base64_encode('<svg width="20" height="20" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M408.523 321.353H163.388V393.981H401.889V483.583H195.142C156 483.583 125 516.017 125 556.18V645.814C125 685.978 156 718.411 195.142 718.411H401.889V645.814H201.776V556.18H401.889V645.814H477.941V393.981C477.941 353.818 446.941 321.353 408.523 321.353Z" fill="black"/><path d="M603.247 267.692V357.441H801.292C842.251 357.441 875 389.932 875 429.647V643.346C875 686.658 838.511 718.412 793.842 718.412H592.057C553.348 718.412 522.059 688.102 522.059 650.569V189C566.728 189 603.217 224.381 603.217 267.692H603.247ZM603.247 650.569H793.842V429.647H603.247V650.569Z" fill="black"/></svg>');
        
        add_menu_page(
            'Adaire Blocks',
            'Adaire Blocks',
            'manage_options',
            'adaire-blocks-settings',
            array($this, 'settings_page'),
            $svg_icon,
            30
        );
    }
    
    /**
     * Initialize settings
     */
    public function init_settings() {
        register_setting(
            'adaire_blocks_settings_group',
            $this->option_name,
            array($this, 'sanitize_settings')
        );
        
        // Get default settings
        $this->settings = get_option($this->option_name, $this->get_default_settings());
        
        // Debug: Log settings
        error_log('Adaire Blocks Settings: ' . print_r($this->settings, true));
    }
    
    /**
     * Get default settings based on available blocks
     */
    private function get_default_settings() {
        $defaults = array();
        $available_blocks = $this->get_available_blocks();
        
        // Set all available blocks to enabled by default
        foreach ($available_blocks as $block_key => $block_data) {
            $defaults[$block_key] = true;
        }
        
        return $defaults;
    }
    
    /**
     * Sanitize settings
     */
    public function sanitize_settings($input) {
        // Debug: Log what's being submitted
        error_log('Adaire Blocks Sanitize Input: ' . print_r($input, true));
        
        $sanitized = array();
        $available_blocks = $this->get_available_blocks();
        
        // Get current settings to preserve disabled blocks
        $current_settings = get_option($this->option_name, $this->get_default_settings());
        
        foreach ($available_blocks as $block_key => $block_data) {
            // If the checkbox is checked, it will be in the input array
            // If it's unchecked, it won't be in the input array, so we set it to false
            $sanitized[$block_key] = isset($input[$block_key]) && $input[$block_key] ? true : false;
        }
        
        // Debug: Log what's being saved
        error_log('Adaire Blocks Sanitized Output: ' . print_r($sanitized, true));
        
        return $sanitized;
    }
    
    /**
     * Get available blocks by scanning the build directory and checking configuration
     */
    public function get_available_blocks() {
        $blocks = array();
        $build_dir = ADAIRE_BLOCKS_PLUGIN_PATH . 'build/';
        $config = AdaireBlocksConfig::get_instance();
        
        // Check if build directory exists
        if (!is_dir($build_dir)) {
            return $blocks;
        }
        
        // Scan for block directories
        $directories = glob($build_dir . '*', GLOB_ONLYDIR);
        
        foreach ($directories as $dir) {
            $block_name = basename($dir);
            
            // Skip if it's not a block directory or doesn't have block.json
            if (!file_exists($dir . '/block.json')) {
                continue;
            }
            
            // Load all blocks - we'll handle premium/free logic in the display
            
            // Read block.json to get block information
            $block_json = file_get_contents($dir . '/block.json');
            $block_data = json_decode($block_json, true);
            
            if (!$block_data) {
                continue;
            }
            
            // Convert block name to settings key
            $settings_key = str_replace('-', '_', $block_name);
            
            // Get block metadata
            $name = isset($block_data['title']) ? $block_data['title'] : ucwords(str_replace('-', ' ', $block_name));
            $description = isset($block_data['description']) ? $block_data['description'] : 'Custom block for ' . $name;
            $category = isset($block_data['category']) ? ucfirst($block_data['category']) : 'Widgets';
            $icon = isset($block_data['icon']) ? $block_data['icon'] : 'admin-generic';
            
            // Add upgrade message if block has limitations
            $upgrade_message = '';
            $limits = array();
            
            // Determine if this is a premium block (disabled in free version)
            $is_premium_block = false;
            
            // Debug: Log block status
            error_log("Adaire Blocks Settings: Block $block_name - enabled: " . ($config->is_block_enabled($block_name) ? 'true' : 'false') . ", premium: " . ($is_premium_block ? 'true' : 'false'));
            
            $blocks[$settings_key] = array(
                'name' => $name,
                'description' => $description,
                'category' => $category,
                'icon' => $icon,
                'block_name' => $block_name,
                'upgrade_message' => $upgrade_message,
                'limits' => $limits,
                'is_premium' => $is_premium_block
            );
        }
        
        return $blocks;
    }
    
    /**
     * Enqueue admin scripts and styles
     */
    public function enqueue_admin_scripts($hook) {
        wp_register_style('adaire-blocks-admin-menu', false);
        wp_enqueue_style('adaire-blocks-admin-menu');
        wp_add_inline_style(
            'adaire-blocks-admin-menu',
            '#adminmenu .toplevel_page_adaire-blocks-settings .wp-menu-image:before,' . PHP_EOL .
            '#adminmenu .current .toplevel_page_adaire-blocks-settings div.wp-menu-image:before,' . PHP_EOL .
            '#adminmenu .wp-has-current-submenu .toplevel_page_adaire-blocks-settings div.wp-menu-image:before,' . PHP_EOL .
            '#adminmenu a.current:hover .toplevel_page_adaire-blocks-settings div.wp-menu-image:before,' . PHP_EOL .
            '#adminmenu a.wp-has-current-submenu:hover .toplevel_page_adaire-blocks-settings div.wp-menu-image:before,' . PHP_EOL .
            '#adminmenu li.wp-has-current-submenu a:focus .toplevel_page_adaire-blocks-settings div.wp-menu-image:before,' . PHP_EOL .
            '#adminmenu li.wp-has-current-submenu.opensub .toplevel_page_adaire-blocks-settings div.wp-menu-image:before,' . PHP_EOL .
            '#adminmenu li.wp-has-current-submenu:hover .toplevel_page_adaire-blocks-settings div.wp-menu-image:before {' . PHP_EOL .
            '    display: none !important;' . PHP_EOL .
            '}'
        );

        if ($hook !== 'toplevel_page_adaire-blocks-settings') {
            return;
        }
        
        wp_register_style(
            'adaire-blocks-admin',
            plugin_dir_url(__FILE__) . 'css/admin-settings.css',
            array(),
            '1.0.0'
        );
        wp_enqueue_style('adaire-blocks-admin');
        
        wp_register_script(
            'adaire-blocks-admin',
            plugin_dir_url(__FILE__) . 'js/admin-settings.js',
            array('jquery'),
            '1.0.0',
            true
        );
        wp_enqueue_script('adaire-blocks-admin');
    }
    
    /**
     * Settings page HTML
     */
    public function settings_page() {
        // Debug: Check if class exists
        if (!class_exists('AdaireBlocksConfig')) {
            wp_die('Error: AdaireBlocksConfig class not found. Please check if the plugin is properly loaded.');
        }
        
        $config = AdaireBlocksConfig::get_instance();
        
        // Safety check - ensure config is loaded
        if (!$config) {
            wp_die('Error: Adaire Blocks configuration not loaded. Please try refreshing the page.');
        }
        
        // Debug: Log config status
        error_log('Adaire Blocks Settings: Config loaded - is_premium: ' . ($config->is_premium() ? 'true' : 'false'));
        error_log('Adaire Blocks Settings: Plugin version: ' . $config->get_plugin_version());
        
        
        $available_blocks = $this->get_available_blocks();
        $settings = get_option($this->option_name, $this->get_default_settings());
        
        // Show success message if settings were just saved
        if (isset($_GET['settings-updated']) && $_GET['settings-updated']) {
            echo '<div class="notice notice-success is-dismissible"><p>Settings saved successfully!</p></div>';
        }
        ?>
        <div class="wrap">
            <h1>
                <svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px; vertical-align: middle;">
                    <path d="M408.523 321.353H163.388V393.981H401.889V483.583H195.142C156 483.583 125 516.017 125 556.18V645.814C125 685.978 156 718.411 195.142 718.411H401.889V645.814H201.776V556.18H401.889V645.814H477.941V393.981C477.941 353.818 446.941 321.353 408.523 321.353Z" fill="currentColor"/>
                    <path d="M603.247 267.692V357.441H801.292C842.251 357.441 875 389.932 875 429.647V643.346C875 686.658 838.511 718.412 793.842 718.412H592.057C553.348 718.412 522.059 688.102 522.059 650.569V189C566.728 189 603.217 224.381 603.217 267.692H603.247ZM603.247 650.569H793.842V429.647H603.247V650.569Z" fill="currentColor"/>
                </svg>
                <?php echo esc_html(get_admin_page_title()); ?>
            </h1>
            
            <div class="adaire-blocks-settings-container">
                <div class="adaire-blocks-header">
                    <div class="adaire-blocks-logo">
                        <h2>Block Management</h2>
                        <p class="description">Manage which blocks are available in the Gutenberg editor. Toggle blocks on/off to customize your editing experience.</p>
                        <p class="description" style="font-size: 12px; color: #666; margin-top: 10px;">
                            <strong>Available Blocks:</strong> 
                            <?php 
                            $total_blocks = count($available_blocks);
                            $free_blocks = 0;
                            $premium_blocks = 0;
                            
                            foreach ($available_blocks as $block_key => $block_data) {
                                if ($block_data['is_premium']) {
                                    $premium_blocks++;
                                } else {
                                    $free_blocks++;
                                }
                            }
                            
                            echo $total_blocks . ' blocks available';
                            if ($config && !$config->is_premium()) {
                                echo " ($free_blocks free, $premium_blocks premium)";
                            }
                            ?>
                        </p>
                        <p class="description" style="font-size: 12px; color: #666; margin-top: 5px;">
                            <strong>Current Settings:</strong> 
                            <?php 
                            $enabled_count = 0;
                            $total_free = 0;
                            foreach ($settings as $key => $value) {
                                // Only count settings for free blocks
                                if (isset($available_blocks[$key])) {
                                    $block_data = $available_blocks[$key];
                                    if (!$block_data['is_premium']) {
                                        $total_free++;
                                        if ($value) $enabled_count++;
                                    }
                                }
                            }
                            echo $enabled_count . ' enabled, ' . ($total_free - $enabled_count) . ' disabled';
                            if ($config && !$config->is_premium() && $premium_blocks > 0) {
                                echo " ($premium_blocks premium blocks require upgrade)";
                            }
                            ?>
                        </p>
                    </div>
                </div>
                
                <form method="post" action="options.php" class="adaire-blocks-form">
                    <input type="hidden" name="redirect_to" value="<?php echo esc_url(admin_url('admin.php?page=adaire-blocks-settings&settings-updated=1')); ?>" />
                    <?php
                    settings_fields('adaire_blocks_settings_group');
                    do_settings_sections('adaire_blocks_settings_group');
                    wp_nonce_field('adaire_blocks_settings', 'adaire_blocks_nonce');
                    ?>
                    
                    <div class="adaire-blocks-controls">
                        <div class="adaire-blocks-bulk-actions">
                            <button type="button" class="button" id="enable-all-blocks">Enable All Free Blocks</button>
                            <button type="button" class="button" id="disable-all-blocks">Disable All Free Blocks</button>
                            <button type="button" class="button" id="reset-to-defaults">Reset to Defaults</button>
                        </div>
                    </div>
                    
                    <div class="adaire-blocks-grid">
                        <?php foreach ($available_blocks as $block_key => $block_data): ?>
                            <div class="adaire-block-card <?php echo $block_data['is_premium'] ? 'adaire-block' : ''; ?>">
                                <?php if ($block_data['is_premium']): ?>
                                    <div class="adaire-block-badge">
                                        <span class="dashicons dashicons-star-filled"></span>
                                        Premium
                                    </div>
                                <?php endif; ?>
                                <div class="adaire-block-header">
                                    <div class="adaire-block-icon">
                                        <?php 
                                        // Check if icon is SVG content (starts with <svg)
                                        if (strpos($block_data['icon'], '<svg') === 0) {
                                            // Render the actual SVG content
                                            echo $block_data['icon'];
                                        } elseif (strpos($block_data['icon'], 'data:image/svg+xml;base64,') === 0) {
                                            // Decode base64 SVG and render it (fallback for old format)
                                            $svg_data = base64_decode(str_replace('data:image/svg+xml;base64,', '', $block_data['icon']));
                                            echo $svg_data;
                                        } else {
                                            // Use dashicon for non-SVG icons
                                            echo '<span class="dashicons dashicons-' . esc_attr($block_data['icon']) . '"></span>';
                                        }
                                        ?>
                                    </div>
                                    <div class="adaire-block-info">
                                        <h3><?php echo esc_html($block_data['name']); ?></h3>
                                        <span class="adaire-block-category"><?php echo esc_html($block_data['category']); ?></span>
                                    </div>
                                    <div class="adaire-block-toggle">
                                        <?php if ($block_data['is_premium']): ?>
                                            <div class="adaire-block-note">
                                                <a href="https://adaire.digital/shop-blocks" target="_blank" class="adaire-hidden-upgrade-button">
                                                    <span class="dashicons dashicons-external"></span>
                                                    Upgrade
                                                </a>
                                            </div>
                                        <?php else: ?>
                                            <label class="adaire-toggle-switch">
                                                <!-- Hidden input to ensure unchecked boxes send a value -->
                                                <input type="hidden" name="<?php echo esc_attr($this->option_name); ?>[<?php echo esc_attr($block_key); ?>]" value="0" />
                                                <input type="checkbox" 
                                                       name="<?php echo esc_attr($this->option_name); ?>[<?php echo esc_attr($block_key); ?>]" 
                                                       value="1" 
                                                       <?php checked(isset($settings[$block_key]) ? $settings[$block_key] : true, true); ?>>
                                                <span class="adaire-toggle-slider"></span>
                                            </label>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="adaire-block-description">
                                    <p><?php echo esc_html($block_data['description']); ?></p>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    
                    <div class="adaire-blocks-footer">
                        <?php submit_button('Save Settings', 'primary', 'submit', false); ?>
                        <span class="adaire-blocks-status">
                            <span class="dashicons dashicons-info"></span>
                            Changes will take effect immediately after saving.
                        </span>
                    </div>
                </form>
            </div>
        </div>
        <?php
    }
    
    /**
     * Get settings
     */
    public function get_settings() {
        return get_option($this->option_name, $this->get_default_settings());
    }
    
    /**
     * Check if block is enabled
     */
    public function is_block_enabled($block_key) {
        $settings = $this->get_settings();
        return isset($settings[$block_key]) ? $settings[$block_key] : true;
    }
    
    /**
     * Check if a block exists in the build directory
     */
    public function block_exists($block_name) {
        $build_dir = ADAIRE_BLOCKS_PLUGIN_PATH . 'build/' . $block_name;
        return is_dir($build_dir) && file_exists($build_dir . '/block.json');
    }
    
    /**
     * AJAX handler for saving settings
     */
    public function ajax_save_settings() {
        check_ajax_referer('adaire_blocks_settings', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Insufficient permissions');
        }
        
        $settings = $this->sanitize_settings($_POST);
        update_option($this->option_name, $settings);
        
        wp_send_json_success(array(
            'message' => 'Settings saved successfully!',
            'settings' => $settings
        ));
    }
    
    /**
     * AJAX handler for resetting settings
     */
    public function ajax_reset_settings() {
        check_ajax_referer('adaire_blocks_settings', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Insufficient permissions');
        }
        
        $default_settings = $this->get_default_settings();
        update_option($this->option_name, $default_settings);
        
        wp_send_json_success(array(
            'message' => 'Settings reset to defaults!',
            'settings' => $default_settings
        ));
    }
    
    /**
     * Add settings link to plugins page
     */
    public function add_plugin_settings_link($links, $file) {
        // Check if this is our plugin file
        if (strpos($file, 'adaire-blocks.php') !== false) {
            $settings_link = '<a href="' . admin_url('admin.php?page=adaire-blocks-settings') . '">' . __('Settings', 'adaire-blocks') . '</a>';
            array_unshift($links, $settings_link);
        }
        return $links;
    }
}

// Initialize settings using singleton pattern
AdaireBlocksSettings::get_instance();
