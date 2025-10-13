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
        add_menu_page(
            'Adaire Blocks',
            'Adaire Blocks',
            'manage_options',
            'adaire-blocks-settings',
            array($this, 'settings_page'),
            'dashicons-layout',
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
     * Get available blocks by scanning the build directory
     */
    public function get_available_blocks() {
        $blocks = array();
        $build_dir = ADAIRE_BLOCKS_PLUGIN_PATH . 'build/';
        
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
            
            $blocks[$settings_key] = array(
                'name' => $name,
                'description' => $description,
                'category' => $category,
                'icon' => $icon,
                'block_name' => $block_name
            );
        }
        
        return $blocks;
    }
    
    /**
     * Enqueue admin scripts and styles
     */
    public function enqueue_admin_scripts($hook) {
        if ($hook !== 'toplevel_page_adaire-blocks-settings') {
            return;
        }
        
        wp_enqueue_style(
            'adaire-blocks-admin',
            plugin_dir_url(__FILE__) . 'css/admin-settings.css',
            array(),
            '1.0.0'
        );
        
        wp_enqueue_script(
            'adaire-blocks-admin',
            plugin_dir_url(__FILE__) . 'js/admin-settings.js',
            array('jquery'),
            '1.0.0',
            true
        );
    }
    
    /**
     * Settings page HTML
     */
    public function settings_page() {
        $available_blocks = $this->get_available_blocks();
        $settings = get_option($this->option_name, $this->get_default_settings());
        
        // Show success message if settings were just saved
        if (isset($_GET['settings-updated']) && $_GET['settings-updated']) {
            echo '<div class="notice notice-success is-dismissible"><p>Settings saved successfully!</p></div>';
        }
        ?>
        <div class="wrap">
            <h1>
                <span class="dashicons dashicons-layout" style="font-size: 24px; margin-right: 8px; vertical-align: middle;"></span>
                <?php echo esc_html(get_admin_page_title()); ?>
            </h1>
            
            <style>
            /* Ensure toggle switches are visible */
            .adaire-toggle-switch {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 24px;
            }
            .adaire-toggle-switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            .adaire-toggle-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                transition: .4s;
                border-radius: 24px;
            }
            .adaire-toggle-slider:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 3px;
                bottom: 3px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
            }
            .adaire-toggle-switch input:checked + .adaire-toggle-slider {
                background-color: #0073aa;
            }
            .adaire-toggle-switch input:checked + .adaire-toggle-slider:before {
                transform: translateX(26px);
            }
            </style>
            
            <div class="adaire-blocks-settings-container">
                <div class="adaire-blocks-header">
                    <div class="adaire-blocks-logo">
                        <h2>Block Management</h2>
                        <p class="description">Manage which blocks are available in the Gutenberg editor. Toggle blocks on/off to customize your editing experience.</p>
                        <p class="description" style="font-size: 12px; color: #666; margin-top: 10px;">
                            <strong>Detected Blocks:</strong> <?php echo count($available_blocks); ?> blocks found in build directory
                        </p>
                        <p class="description" style="font-size: 12px; color: #666; margin-top: 5px;">
                            <strong>Current Settings:</strong> 
                            <?php 
                            $enabled_count = 0;
                            foreach ($settings as $key => $value) {
                                if ($value) $enabled_count++;
                            }
                            echo $enabled_count . ' enabled, ' . (count($settings) - $enabled_count) . ' disabled';
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
                            <button type="button" class="button" id="enable-all-blocks">Enable All</button>
                            <button type="button" class="button" id="disable-all-blocks">Disable All</button>
                            <button type="button" class="button" id="reset-to-defaults">Reset to Defaults</button>
                        </div>
                    </div>
                    
                    <div class="adaire-blocks-grid">
                        <?php foreach ($available_blocks as $block_key => $block_data): ?>
                            <div class="adaire-block-card">
                                <div class="adaire-block-header">
                                    <div class="adaire-block-icon">
                                        <span class="dashicons dashicons-<?php echo esc_attr($block_data['icon']); ?>"></span>
                                    </div>
                                    <div class="adaire-block-info">
                                        <h3><?php echo esc_html($block_data['name']); ?></h3>
                                        <span class="adaire-block-category"><?php echo esc_html($block_data['category']); ?></span>
                                    </div>
                                    <div class="adaire-block-toggle">
                                        <label class="adaire-toggle-switch">
                                            <!-- Hidden input to ensure unchecked boxes send a value -->
                                            <input type="hidden" name="<?php echo esc_attr($this->option_name); ?>[<?php echo esc_attr($block_key); ?>]" value="0" />
                                            <input type="checkbox" 
                                                   name="<?php echo esc_attr($this->option_name); ?>[<?php echo esc_attr($block_key); ?>]" 
                                                   value="1" 
                                                   <?php checked(isset($settings[$block_key]) ? $settings[$block_key] : true, true); ?>>
                                            <span class="adaire-toggle-slider"></span>
                                        </label>
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
