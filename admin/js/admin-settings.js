/**
 * Adaire Blocks Admin Settings JavaScript
 */

(function($) {
    'use strict';
    
    $(document).ready(function() {
        
        // Initialize settings
        initSettings();
        
        // Bulk actions
        $('#enable-all-blocks').on('click', function() {
            $('.adaire-toggle-switch input[type="checkbox"]').prop('checked', true);
            updateBlockCards();
        });
        
        $('#disable-all-blocks').on('click', function() {
            $('.adaire-toggle-switch input[type="checkbox"]').prop('checked', false);
            updateBlockCards();
        });
        
        $('#reset-to-defaults').on('click', function() {
            if (confirm('Are you sure you want to reset all settings to defaults? This will enable all blocks.')) {
                $('.adaire-toggle-switch input[type="checkbox"]').prop('checked', true);
                updateBlockCards();
            }
        });
        
        // Toggle change handler
        $('.adaire-toggle-switch input[type="checkbox"]').on('change', function() {
            // When checkbox is checked, remove the hidden input (so only the checkbox value is sent)
            // When unchecked, keep the hidden input (so '0' is sent)
            var $hiddenInput = $(this).siblings('input[type="hidden"]');
            if ($hiddenInput.length) {
                if ($(this).is(':checked')) {
                    $hiddenInput.remove();
                } else {
                    $hiddenInput.val('0');
                }
            }
            updateBlockCards();
        });
        
        // Form submission
        $('.adaire-blocks-form').on('submit', function() {
            $(this).addClass('loading');
        });
        
        /**
         * Initialize settings
         */
        function initSettings() {
            updateBlockCards();
        }
        
        /**
         * Update block card appearance based on toggle state
         */
        function updateBlockCards() {
            $('.adaire-block-card').each(function() {
                var $card = $(this);
                var $toggle = $card.find('.adaire-toggle-switch input[type="checkbox"]');
                var isEnabled = $toggle.is(':checked');
                
                if (isEnabled) {
                    $card.removeClass('disabled').addClass('enabled');
                } else {
                    $card.removeClass('enabled').addClass('disabled');
                }
            });
        }
        
        /**
         * Show notification
         */
        function showNotification(message, type) {
            var $notification = $('<div class="notice notice-' + type + ' is-dismissible"><p>' + message + '</p></div>');
            $('.adaire-blocks-settings-container').prepend($notification);
            
            setTimeout(function() {
                $notification.fadeOut(function() {
                    $notification.remove();
                });
            }, 3000);
        }
        
        /**
         * Handle AJAX requests
         */
        function handleAjaxRequest(action, data, callback) {
            $.ajax({
                url: ajaxData.ajaxurl,
                type: 'POST',
                data: {
                    action: 'adaire_blocks_' + action,
                    nonce: ajaxData.nonce,
                    ...data
                },
                success: function(response) {
                    if (response.success) {
                        callback(response.data);
                    } else {
                        showNotification('Error: ' + response.data, 'error');
                    }
                },
                error: function() {
                    showNotification('An error occurred. Please try again.', 'error');
                }
            });
        }
        
        // Add smooth scrolling for better UX
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            var target = $(this.getAttribute('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 500);
            }
        });
        
        // Add keyboard shortcuts
        $(document).on('keydown', function(e) {
            // Ctrl/Cmd + S to save
            if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
                e.preventDefault();
                $('.adaire-blocks-form').submit();
            }
            
            // Ctrl/Cmd + A to select all
            if ((e.ctrlKey || e.metaKey) && e.keyCode === 65) {
                e.preventDefault();
                $('#enable-all-blocks').click();
            }
        });
        
        // Add tooltips for better UX
        $('.adaire-block-card').each(function() {
            var $card = $(this);
            var $toggle = $card.find('.adaire-toggle-switch input[type="checkbox"]');
            var isEnabled = $toggle.is(':checked');
            
            $toggle.attr('title', isEnabled ? 'Click to disable this block' : 'Click to enable this block');
        });
        
        // Update tooltips on toggle change
        $('.adaire-toggle-switch input[type="checkbox"]').on('change', function() {
            var isEnabled = $(this).is(':checked');
            $(this).attr('title', isEnabled ? 'Click to disable this block' : 'Click to enable this block');
        });
        
        // Localize script data
        var ajaxData = {
            ajaxurl: ajaxurl,
            nonce: $('#adaire_blocks_nonce').val()
        };
        
    });
    
})(jQuery);
