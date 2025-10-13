<?php
/**
 * Adaire Blocks Diagnostics
 * Helps troubleshoot issues with block registration and auto-recovery
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add diagnostics submenu
 */
function adaire_blocks_add_diagnostics_menu() {
    add_submenu_page(
        'adaire-blocks-settings',
        'Diagnostics',
        'Diagnostics',
        'manage_options',
        'adaire-blocks-diagnostics',
        'adaire_blocks_diagnostics_page'
    );
}
add_action('admin_menu', 'adaire_blocks_add_diagnostics_menu');

/**
 * Diagnostics page
 */
function adaire_blocks_diagnostics_page() {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized access');
    }

    // Run diagnostics
    $diagnostics = adaire_blocks_run_diagnostics();
    
    ?>
    <div class="wrap">
        <h1>Adaire Blocks Diagnostics</h1>
        
        <div class="card" style="max-width: 1000px; margin-top: 20px;">
            <h2>System Status</h2>
            
            <table class="widefat" style="margin-top: 20px;">
                <thead>
                    <tr>
                        <th style="width: 40%;">Check</th>
                        <th style="width: 15%;">Status</th>
                        <th style="width: 45%;">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($diagnostics as $check): ?>
                        <tr>
                            <td><strong><?php echo esc_html($check['label']); ?></strong></td>
                            <td>
                                <?php if ($check['status'] === 'pass'): ?>
                                    <span style="color: #00a32a;">✅ Pass</span>
                                <?php elseif ($check['status'] === 'warning'): ?>
                                    <span style="color: #f0b849;">⚠️ Warning</span>
                                <?php else: ?>
                                    <span style="color: #d63638;">❌ Fail</span>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php echo wp_kses_post($check['message']); ?>
                                <?php if (!empty($check['solution'])): ?>
                                    <br><em style="color: #666;">Solution: <?php echo esc_html($check['solution']); ?></em>
                                <?php endif; ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <div class="card" style="max-width: 1000px; margin-top: 20px;">
            <h2>Registered Blocks</h2>
            <p>These are all the Adaire Blocks currently registered with WordPress:</p>
            
            <?php
            $registered_blocks = adaire_blocks_get_registered_blocks();
            if (empty($registered_blocks)): ?>
                <div style="padding: 20px; background: #fff3cd; border-left: 4px solid #f0b849; margin-top: 10px;">
                    <strong>⚠️ No Adaire Blocks registered!</strong>
                    <p>This means the blocks haven't been built or loaded properly.</p>
                    <p><strong>Solution:</strong> Run <code>npm run build</code> in the plugin directory.</p>
                </div>
            <?php else: ?>
                <table class="widefat" style="margin-top: 10px;">
                    <thead>
                        <tr>
                            <th>Block Name</th>
                            <th>Title</th>
                            <th>Icon</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($registered_blocks as $block): ?>
                            <tr>
                                <td><code><?php echo esc_html($block['name']); ?></code></td>
                                <td><?php echo esc_html($block['title']); ?></td>
                                <td><?php echo esc_html($block['icon']); ?></td>
                                <td><?php echo esc_html($block['category']); ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php endif; ?>
        </div>

        <div class="card" style="max-width: 1000px; margin-top: 20px;">
            <h2>Auto-Recovery Script Status</h2>
            <p>Check if the auto-recovery script is properly enqueued:</p>
            
            <div style="background: #f0f0f1; padding: 15px; border-radius: 4px; margin-top: 10px;">
                <p><strong>Script Path:</strong> <code><?php echo esc_html(ADAIRE_BLOCKS_PLUGIN_PATH . 'admin/js/auto-block-recovery.js'); ?></code></p>
                <p><strong>File Exists:</strong> <?php echo file_exists(ADAIRE_BLOCKS_PLUGIN_PATH . 'admin/js/auto-block-recovery.js') ? '✅ Yes' : '❌ No'; ?></p>
                <p><strong>Script URL:</strong> <code><?php echo esc_html(ADAIRE_BLOCKS_PLUGIN_URL . 'admin/js/auto-block-recovery.js'); ?></code></p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #e7f5fe; border-left: 4px solid #2271b1;">
                <h3 style="margin-top: 0;">How to Test Auto-Recovery</h3>
                <ol>
                    <li>Open a post/page with Adaire Blocks in the editor</li>
                    <li>Open browser console (F12)</li>
                    <li>Look for messages starting with <code>[Adaire Blocks]</code></li>
                    <li>You should see:
                        <ul>
                            <li><code>[Adaire Blocks] Attempting auto-recovery...</code></li>
                            <li><code>[Adaire Blocks] Total blocks in editor: X</code></li>
                            <li><code>[Adaire Blocks] Recovery complete...</code></li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    </div>
    <?php
}

/**
 * Run diagnostic checks
 */
function adaire_blocks_run_diagnostics() {
    $checks = [];

    // Check WordPress version
    global $wp_version;
    $checks[] = [
        'label' => 'WordPress Version',
        'status' => version_compare($wp_version, '6.7', '>=') ? 'pass' : 'fail',
        'message' => 'WordPress ' . $wp_version . ' (Required: 6.7+)',
        'solution' => version_compare($wp_version, '6.7', '>=') ? '' : 'Update WordPress to version 6.7 or higher'
    ];

    // Check PHP version
    $checks[] = [
        'label' => 'PHP Version',
        'status' => version_compare(PHP_VERSION, '7.4', '>=') ? 'pass' : 'fail',
        'message' => 'PHP ' . PHP_VERSION . ' (Required: 7.4+)',
        'solution' => version_compare(PHP_VERSION, '7.4', '>=') ? '' : 'Update PHP to version 7.4 or higher'
    ];

    // Check if build folder exists
    $build_path = ADAIRE_BLOCKS_PLUGIN_PATH . 'build';
    $checks[] = [
        'label' => 'Build Folder',
        'status' => is_dir($build_path) ? 'pass' : 'fail',
        'message' => is_dir($build_path) ? 'Found at: ' . $build_path : 'Not found',
        'solution' => is_dir($build_path) ? '' : 'Run npm run build in the plugin directory'
    ];

    // Check if blocks-manifest.php exists
    $manifest_path = ADAIRE_BLOCKS_PLUGIN_PATH . 'build/blocks-manifest.php';
    $checks[] = [
        'label' => 'Blocks Manifest',
        'status' => file_exists($manifest_path) ? 'pass' : 'fail',
        'message' => file_exists($manifest_path) ? 'Found' : 'Not found',
        'solution' => file_exists($manifest_path) ? '' : 'Run npm run build to generate blocks manifest'
    ];

    // Check if auto-recovery script exists
    $recovery_script = ADAIRE_BLOCKS_PLUGIN_PATH . 'admin/js/auto-block-recovery.js';
    $checks[] = [
        'label' => 'Auto-Recovery Script',
        'status' => file_exists($recovery_script) ? 'pass' : 'fail',
        'message' => file_exists($recovery_script) ? 'Found' : 'Not found',
        'solution' => file_exists($recovery_script) ? '' : 'The auto-recovery script file is missing from admin/js/'
    ];

    // Check if migration script exists
    $migration_script = ADAIRE_BLOCKS_PLUGIN_PATH . 'admin/block-migration.php';
    $checks[] = [
        'label' => 'Migration Tool',
        'status' => file_exists($migration_script) ? 'pass' : 'fail',
        'message' => file_exists($migration_script) ? 'Found' : 'Not found',
        'solution' => file_exists($migration_script) ? '' : 'The migration tool file is missing from admin/'
    ];

    // Check if REST API is accessible
    $rest_url = rest_url('wp/v2/posts');
    $checks[] = [
        'label' => 'WordPress REST API',
        'status' => 'pass',
        'message' => 'Endpoint: ' . $rest_url,
        'solution' => ''
    ];

    // Count block folders in build directory
    if (is_dir($build_path)) {
        $block_folders = glob($build_path . '/*-block', GLOB_ONLYDIR);
        $block_count = count($block_folders);
        $checks[] = [
            'label' => 'Built Blocks',
            'status' => $block_count > 0 ? 'pass' : 'fail',
            'message' => $block_count . ' block(s) found in build folder',
            'solution' => $block_count > 0 ? '' : 'Run npm run build to compile blocks'
        ];
    }

    // Check if block editor is supported
    $checks[] = [
        'label' => 'Block Editor (Gutenberg)',
        'status' => function_exists('register_block_type') ? 'pass' : 'fail',
        'message' => function_exists('register_block_type') ? 'Supported' : 'Not available',
        'solution' => function_exists('register_block_type') ? '' : 'Gutenberg/Block editor is not available'
    ];

    // Check plugin constants
    $checks[] = [
        'label' => 'Plugin Constants',
        'status' => (defined('ADAIRE_BLOCKS_VERSION') && defined('ADAIRE_BLOCKS_PLUGIN_URL') && defined('ADAIRE_BLOCKS_PLUGIN_PATH')) ? 'pass' : 'fail',
        'message' => defined('ADAIRE_BLOCKS_VERSION') ? 'Version: ' . ADAIRE_BLOCKS_VERSION : 'Not defined',
        'solution' => ''
    ];

    return $checks;
}

/**
 * Get all registered Adaire blocks
 */
function adaire_blocks_get_registered_blocks() {
    $all_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
    $adaire_blocks = [];

    foreach ($all_blocks as $block_name => $block_type) {
        if (strpos($block_name, 'create-block/') === 0) {
            $adaire_blocks[] = [
                'name' => $block_name,
                'title' => $block_type->title ?? 'Unknown',
                'icon' => is_string($block_type->icon) ? $block_type->icon : 'block-default',
                'category' => $block_type->category ?? 'common'
            ];
        }
    }

    return $adaire_blocks;
}

