<?php
/**
 * Block Migration Tool
 * Batch-update all posts to re-save blocks with current save.js structure
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add migration submenu to Adaire Blocks admin menu
 */
function adaire_blocks_add_migration_menu() {
    add_submenu_page(
        'adaire-blocks-settings',  // Parent slug (Adaire Blocks menu)
        'Block Migration',          // Page title
        'Migration',                // Menu title (shorter for submenu)
        'manage_options',
        'adaire-blocks-migration',
        'adaire_blocks_migration_page'
    );
}
add_action('admin_menu', 'adaire_blocks_add_migration_menu');

/**
 * Enqueue migration page styles
 */
function adaire_blocks_enqueue_migration_styles($hook) {
    if ($hook !== 'adaire-blocks_page_adaire-blocks-migration') {
        return;
    }
    
    wp_enqueue_style(
        'adaire-blocks-migration',
        plugin_dir_url(__FILE__) . 'css/block-migration.css',
        array(),
        defined('ADAIRE_BLOCKS_VERSION') ? ADAIRE_BLOCKS_VERSION : '1.0.0'
    );
}
add_action('admin_enqueue_scripts', 'adaire_blocks_enqueue_migration_styles');

/**
 * Migration page HTML
 */
function adaire_blocks_migration_page() {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized access');
    }
    ?>
    <div class="wrap">
        <h1>Adaire Blocks Migration Tool</h1>
        
        <div class="card" style="max-width: 800px; margin-top: 20px;">
            <h2> Update All Blocks (Queue-Based Migration)</h2>
            <p>
                This tool uses a fast queue-based system to find all posts and pages that contain Adaire Blocks 
                and re-save them with the current block structure. This is useful when you've made changes to block 
                code that cause validation errors.
            </p>
            
            <p><strong>What this does:</strong></p>
            <ul>
                <li> Finds all posts/pages with Adaire Blocks</li>
                <li> Processes each post one at a time in a queue</li>
                <li> Automatically recovers and fixes validation errors</li>
                <li> Re-saves each post with the current block structure</li>
                <li> Preserves all block settings and content</li>
                <li> Cleans up resources after each post for optimal performance</li>
            </ul>
            
            <p><strong>⚠️ Important:</strong></p>
            <ul>
                <li> Faster than previous version - processes posts sequentially with optimized timeouts</li>
                <li> It's recommended to backup your database first</li>
                <li>Do not close this page while migration is running</li>
                <li> You can cancel at any time - already processed posts will remain migrated</li>
            </ul>
            
            <div id="migration-status" style="margin: 20px 0; padding: 15px; background: #f0f0f1; border-radius: 4px; display: none;">
                <div id="migration-progress">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <div>
                            <p style="margin: 0;"><strong>Status:</strong> <span id="status-text">Preparing...</span></p>
                            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">
                                <span id="queue-status">Queue: Initializing...</span>
                            </p>
                        </div>
                        <div style="text-align: right;">
                            <p style="margin: 0;"><strong>Progress:</strong> <span id="progress-text">0/0</span></p>
                            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">
                                <span id="stats-text">✅ 0 | ❌ 0</span>
                            </p>
                        </div>
                    </div>
                    <div style="background: #fff; border-radius: 4px; height: 30px; margin: 10px 0; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);">
                        <div id="progress-bar" style="background: linear-gradient(90deg, #2271b1, #135e96); height: 100%; width: 0%; transition: width 0.3s; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px; font-weight: bold;">
                            <span id="progress-percent" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);"></span>
                        </div>
                    </div>
                    <div id="migration-log" style="max-height: 300px; overflow-y: auto; background: #fff; padding: 10px; margin-top: 10px; border-radius: 4px; font-family: monospace; font-size: 12px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);"></div>
                </div>
                <div id="migration-complete" style="display: none;">
                    <p style="color: #00a32a; font-weight: bold; font-size: 16px;">✅ Migration completed!</p>
                    <p id="completion-summary"></p>
                </div>
            </div>
            
            <p>
                <button id="start-migration" class="button button-primary button-large" onclick="startMigration()">
                    Start Migration
                </button>
                <button id="cancel-migration" class="button button-large" onclick="cancelMigration()" style="display: none;">
                    Cancel
                </button>
            </p>
        </div>
    </div>

    <script>
    // Migration Queue System
    let migrationQueue = [];
    let currentIndex = 0;
    let totalPosts = 0;
    let processedPosts = 0;
    let failedPosts = 0;
    let migrationCancelled = false;
    let hiddenIframe = null;
    let currentMessageHandler = null;
    let currentTimeout = null;

    function startMigration() {
        if (!confirm('Are you sure you want to start the migration? This will update all posts with Adaire Blocks.')) {
            return;
        }

        // Reset state
        migrationQueue = [];
        currentIndex = 0;
        processedPosts = 0;
        failedPosts = 0;
        migrationCancelled = false;

        document.getElementById('start-migration').style.display = 'none';
        document.getElementById('cancel-migration').style.display = 'inline-block';
        document.getElementById('migration-status').style.display = 'block';
        document.getElementById('migration-progress').style.display = 'block';
        document.getElementById('migration-complete').style.display = 'none';
        
        addLog('🚀 Starting migration...');
        addLog('📋 Fetching posts to migrate...');
        
        // Get posts to migrate
        fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'action=adaire_get_posts_to_migrate&nonce=<?php echo wp_create_nonce('adaire_migration'); ?>'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                migrationQueue = data.data.posts;
                totalPosts = migrationQueue.length;
                
                addLog(`✅ Found ${totalPosts} post${totalPosts !== 1 ? 's' : ''} to migrate`);
                
                if (totalPosts === 0) {
                    completeMigration();
                    return;
                }
                
                addLog('🔄 Starting queue processing...');
                // Start the queue
                processNextInQueue();
            } else {
                addLog('❌ Error: ' + data.data.message, 'error');
                resetButtons();
            }
        })
        .catch(error => {
            addLog('❌ Error fetching posts: ' + error.message, 'error');
            resetButtons();
        });
    }

    function processNextInQueue() {
        // Check if we should stop
        if (migrationCancelled) {
            addLog('⏹️ Migration cancelled by user', 'warn');
            cleanupIframe();
            completeMigration();
            return;
        }

        // Check if queue is complete
        if (currentIndex >= migrationQueue.length) {
            addLog('✅ Queue processing complete!');
            cleanupIframe();
            completeMigration();
            return;
        }

        const post = migrationQueue[currentIndex];
        const progress = currentIndex + 1;
        
        updateProgress(progress, totalPosts, `Processing: ${post.title}`);
        addLog(`[${progress}/${totalPosts}] 📄 Processing: ${post.title} (ID: ${post.id})`);

        // Clean up previous iframe if it exists
        cleanupIframe();

        // Create fresh iframe for this post
        hiddenIframe = document.createElement('iframe');
        hiddenIframe.style.display = 'none';
        hiddenIframe.id = 'migration-iframe-' + post.id;
        document.body.appendChild(hiddenIframe);

        // Set up message handler for this specific post
        setupMessageHandler(post);

        // Set timeout (reduced to 15 seconds for faster processing)
        currentTimeout = setTimeout(() => {
            addLog(`⏱️ Timeout for: ${post.title}`, 'warn');
            failedPosts++;
            moveToNextPost();
        }, 15000);

        // Load the post in the iframe
        const editorUrl = '<?php echo admin_url('post.php'); ?>?post=' + post.id + '&action=edit&adaire_auto_migrate=1';
        addLog(`  Loading editor for post ${post.id}...`);
        hiddenIframe.src = editorUrl;
    }

    function setupMessageHandler(post) {
        // Remove previous handler if exists
        if (currentMessageHandler) {
            window.removeEventListener('message', currentMessageHandler);
        }

        // Create new handler for this post
        currentMessageHandler = function(event) {
            // Only process messages from our migration
            if (!event.data || !event.data.type) {
                return;
            }

            // Handle completion messages
            if (event.data.type === 'adaire_migration_complete') {
                // Clear timeout
                if (currentTimeout) {
                    clearTimeout(currentTimeout);
                    currentTimeout = null;
                }
                
                if (event.data.success) {
                    processedPosts++;
                    const blocks = event.data.blocksRecovered || 0;
                    addLog(`  ✅ Success: ${blocks} block${blocks !== 1 ? 's' : ''} recovered and saved`);
                } else {
                    failedPosts++;
                    addLog(`  ❌ Failed: ${event.data.error || 'Unknown error'}`, 'error');
                }
                
                // Move to next post after a short delay
                setTimeout(() => moveToNextPost(), 500);
            }
            
            // Handle log messages from iframe (optional, can be verbose)
            if (event.data.type === 'adaire_migration_log' && event.data.level === 'error') {
                addLog(`  ⚠️ ${event.data.message}`, event.data.level);
            }
        };
        
        window.addEventListener('message', currentMessageHandler);
    }

    function moveToNextPost() {
        // Increment index
        currentIndex++;
        
        // Process next post
        setTimeout(() => processNextInQueue(), 100);
    }

    function cleanupIframe() {
        // Clear timeout
        if (currentTimeout) {
            clearTimeout(currentTimeout);
            currentTimeout = null;
        }

        // Remove message handler
        if (currentMessageHandler) {
            window.removeEventListener('message', currentMessageHandler);
            currentMessageHandler = null;
        }

        // Remove iframe
        if (hiddenIframe && hiddenIframe.parentNode) {
            hiddenIframe.parentNode.removeChild(hiddenIframe);
            hiddenIframe = null;
        }
    }

    function updateProgress(current, total, status) {
        const percentage = Math.round((current / total) * 100);
        const remaining = total - current;
        
        document.getElementById('status-text').textContent = status;
        document.getElementById('progress-text').textContent = `${current}/${total}`;
        document.getElementById('progress-bar').style.width = percentage + '%';
        document.getElementById('progress-percent').textContent = percentage + '%';
        
        // Update queue status
        if (remaining > 0) {
            document.getElementById('queue-status').textContent = `Queue: ${remaining} remaining`;
        } else {
            document.getElementById('queue-status').textContent = 'Queue: Complete';
        }
        
        // Update stats
        document.getElementById('stats-text').textContent = `✅ ${processedPosts} | ❌ ${failedPosts}`;
    }

    function addLog(message, type = 'info') {
        const log = document.getElementById('migration-log');
        const entry = document.createElement('div');
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        
        // Color code based on log level
        if (type === 'error') {
            entry.style.color = '#d63638';
            entry.style.fontWeight = 'bold';
        } else if (type === 'warn') {
            entry.style.color = '#f0b849';
        } else if (message.includes('✅') || message.includes('SUCCESS')) {
            entry.style.color = '#00a32a';
        } else if (message.includes('===')) {
            entry.style.fontWeight = 'bold';
            entry.style.marginTop = '8px';
        }
        
        log.appendChild(entry);
        log.scrollTop = log.scrollHeight;
    }

    function completeMigration() {
        addLog('');
        addLog('=== MIGRATION COMPLETE ===');
        addLog(`📊 Total posts: ${totalPosts}`);
        addLog(`✅ Successful: ${processedPosts}`);
        addLog(`❌ Failed: ${failedPosts}`);
        addLog(`⏭️ Skipped: ${totalPosts - processedPosts - failedPosts}`);
        
        document.getElementById('migration-progress').style.display = 'none';
        document.getElementById('migration-complete').style.display = 'block';
        
        const successRate = totalPosts > 0 ? Math.round((processedPosts / totalPosts) * 100) : 0;
        document.getElementById('completion-summary').innerHTML = 
            `<strong>Migration Results:</strong><br>` +
            `✅ ${processedPosts} successfully migrated<br>` +
            `❌ ${failedPosts} failed<br>` +
            `📈 Success rate: ${successRate}%`;
        
        resetButtons();
    }

    function cancelMigration() {
        if (confirm('Are you sure you want to cancel the migration? Posts already processed will remain migrated.')) {
            migrationCancelled = true;
            addLog('🛑 Cancelling migration...', 'warn');
            cleanupIframe();
            
            setTimeout(() => {
                completeMigration();
            }, 500);
        }
    }

    function resetButtons() {
        document.getElementById('start-migration').style.display = 'inline-block';
        document.getElementById('cancel-migration').style.display = 'none';
    }
    </script>
    <?php
}

/**
 * AJAX: Get posts that need migration
 */
function adaire_get_posts_to_migrate() {
    check_ajax_referer('adaire_migration', 'nonce');

    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'Unauthorized']);
    }

    // Get all posts and pages that might contain blocks
    $args = [
        'post_type' => ['post', 'page'],
        'post_status' => ['publish', 'draft', 'pending', 'private'],
        'posts_per_page' => -1,
        'fields' => 'ids',
    ];

    $all_posts = get_posts($args);
    $posts_to_migrate = [];

    // Filter posts that contain Adaire Blocks
    foreach ($all_posts as $post_id) {
        $content = get_post_field('post_content', $post_id);
        
        // Check if post contains any Adaire Blocks
        if (has_blocks($content)) {
            $blocks = parse_blocks($content);
            if (adaire_has_adaire_blocks($blocks)) {
                $post = get_post($post_id);
                $posts_to_migrate[] = [
                    'id' => $post_id,
                    'title' => $post->post_title,
                ];
            }
        }
    }

    wp_send_json_success(['posts' => $posts_to_migrate]);
}
add_action('wp_ajax_adaire_get_posts_to_migrate', 'adaire_get_posts_to_migrate');

/**
 * Check if blocks array contains any Adaire Blocks
 */
function adaire_has_adaire_blocks($blocks) {
    foreach ($blocks as $block) {
        // Check if it's an Adaire Block (starts with 'create-block/')
        if (isset($block['blockName']) && strpos($block['blockName'], 'create-block/') === 0) {
            return true;
        }
        
        // Check inner blocks recursively
        if (!empty($block['innerBlocks'])) {
            if (adaire_has_adaire_blocks($block['innerBlocks'])) {
                return true;
            }
        }
    }
    
    return false;
}

// Note: Migration now happens via JavaScript in hidden iframes
// Each post is loaded in the editor context where auto-recovery runs
// This ensures blocks are actually recovered using the current save.js

