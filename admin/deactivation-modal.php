<?php
// Prevent direct access
if (!defined('ABSPATH'))
    exit;

class Adaire_Deactivation_Modal
{

    private static $instance = null;

    // Get the only instance of this class
    public static function get_instance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct()
    {
        add_action('admin_footer', [$this, 'render_modal']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_assets']);
        add_action('wp_ajax_adaire_deactivation_feedback', [$this, 'handle_feedback']);
    }

    public function enqueue_assets($hook)
    {
        // Only load on the main plugins page
        if ($hook !== 'plugins.php')
            return;

        wp_enqueue_style('adaire-deact-css', ADAIRE_BLOCKS_PLUGIN_URL . 'admin/css/deactivation-modal.css', [], ADAIRE_BLOCKS_VERSION);
        wp_enqueue_script('adaire-deact-js', ADAIRE_BLOCKS_PLUGIN_URL . 'admin/js/deactivation-modal.js', ['jquery'], ADAIRE_BLOCKS_VERSION, true);

        // Pass the ajax url and security nonce to our javascript
        wp_localize_script('adaire-deact-js', 'adaireDeact', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('adaire_deact_nonce'),
        ]);
    }

    public function render_modal()
    {
        global $pagenow;
        if ($pagenow !== 'plugins.php')
            return;
        ?>
        <div id="adaire-deact-modal" class="adaire-modal-overlay" style="display:none;">
            <div class="adaire-modal-container">
                <h3>Quick feedback</h3>
                <p>We'd love to know why you're deactivating, it helps us improve the blocks.</p>

                <form id="adaire-deact-form">
                    <div class="adaire-reasons-list">
                        <label><input type="radio" name="adaire_reason" value="no_longer_needed"> No longer needed</label>
                        <label><input type="radio" name="adaire_reason" value="found_better"> Found a better plugin</label>
                        <label><input type="radio" name="adaire_reason" value="not_working"> Not working as expected</label>
                        <label><input type="radio" name="adaire_reason" value="temporary"> Temporary deactivation</label>
                        <label><input type="radio" name="adaire_reason" value="other"> Other</label>
                    </div>

                    <div id="adaire-other-details" style="display:none;">
                        <textarea placeholder="Tell us more..."></textarea>
                    </div>

                    <div class="adaire-field">
                        <label>Your email (optional)</label>
                        <input type="email" id="adaire-deact-email" placeholder="you@example.com">
                    </div>

                    <div class="adaire-modal-btns">
                        <button type="submit" class="button button-primary adaire-submit-btn">Submit & Deactivate</button>
                        <button type="button" class="button adaire-skip-btn">Skip</button>
                    </div>
                </form>
            </div>
        </div>
        <?php
    }

    public function handle_feedback()
    {
        check_ajax_referer('adaire_deact_nonce', 'nonce');

        $reason = sanitize_text_field($_POST['reason'] ?? '');
        $email = sanitize_email($_POST['email'] ?? '');
        $site = get_bloginfo('url');

        // Capture deactivation info as a simple log
        $deactivations = get_option('adaire_deact_log', []);
        $deactivations[] = [
            'date' => current_time('mysql'),
            'reason' => $reason,
            'email' => $email,
            'site' => $site
        ];
        update_option('adaire_deact_log', $deactivations);

        // Ping the main server with the feedback
        wp_remote_post('https://adaire.digital/api/plugin-feedback', [
            'timeout' => 5,
            'blocking' => false,
            'body' => [
                'plugin' => 'adaire-blocks-free',
                'reason' => $reason,
                'email' => $email,
                'site' => $site
            ],
        ]);

        wp_send_json_success();
    }
}
