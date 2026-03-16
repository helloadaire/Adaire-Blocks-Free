/* Adaire Blocks — Admin Settings JS */
(function ($) {
    'use strict';

    $(document).ready(function () {

        var ajaxData = {
            ajaxurl: typeof ajaxurl !== 'undefined' ? ajaxurl : '',
            nonce: $('#adaire_blocks_nonce').val()
        };

        /* ── Topbar save button ───────────────────────────── */
        $('#ab-topbar-save').on('click', function () {
            $('#adaire-blocks-form').submit();
        });

        /* ── Init ─────────────────────────────────────────── */
        updateCardStates();

        /* ── Search ───────────────────────────────────────── */
        $('#ab-search-input').on('input', function () {
            var q = $(this).val().trim().toLowerCase();
            var visible = 0;

            $('.ab-card').each(function () {
                var name = $(this).find('.ab-card-name').text().toLowerCase();
                var cat = $(this).find('.ab-card-category').text().toLowerCase();
                var desc = $(this).find('.ab-card-desc').text().toLowerCase();
                var match = !q || name.indexOf(q) > -1 || cat.indexOf(q) > -1 || desc.indexOf(q) > -1;
                $(this).toggle(match);
                if (match) visible++;
            });

            $('.ab-grid-empty').toggle(visible === 0);
            $('#ab-empty-query').text($(this).val().trim());
        });

        /* ── Bulk actions ─────────────────────────────────── */
        $('#enable-all-blocks').on('click', function () {
            $('.ab-card').each(function () {
                var $cb = $(this).find('input[type="checkbox"]');
                if ($cb.length) {
                    $cb.prop('checked', true);
                    restoreHiddenInput($cb);
                }
            });
            updateCardStates();
        });

        $('#disable-all-blocks').on('click', function () {
            $('.ab-card').each(function () {
                var $cb = $(this).find('input[type="checkbox"]');
                if ($cb.length) {
                    $cb.prop('checked', false);
                }
            });
            updateCardStates();
        });

        $('#reset-to-defaults').on('click', function () {
            if (!confirm('Reset all blocks to their default state?')) return;
            $('.ab-card').each(function () {
                var $cb = $(this).find('input[type="checkbox"]');
                if ($cb.length) {
                    $cb.prop('checked', true);
                    restoreHiddenInput($cb);
                }
            });
            updateCardStates();
        });

        /* ── Toggle change ────────────────────────────────── */
        $(document).on('change', '.ab-toggle input[type="checkbox"]', function () {
            var $cb = $(this);
            var $hidden = $cb.siblings('input[type="hidden"]');

            // If checked, remove hidden so only checkbox value "1" is posted.
            // If unchecked, ensure hidden "0" is present.
            if ($cb.is(':checked')) {
                $hidden.remove();
            } else {
                if (!$hidden.length) {
                    $cb.before($('<input type="hidden">').attr('name', $cb.attr('name')).val('0'));
                } else {
                    $hidden.val('0');
                }
            }

            updateCardStates();
        });

        /* ── Form submit ──────────────────────────────────── */
        $('.adaire-blocks-form').on('submit', function () {
            $(this).addClass('loading');
        });

        /* ── Keyboard shortcuts ───────────────────────────── */
        $(document).on('keydown', function (e) {
            // Ctrl/Cmd + S → save
            if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
                e.preventDefault();
                $('.adaire-blocks-form').submit();
            }
            // Ctrl/Cmd + A → enable all
            if ((e.ctrlKey || e.metaKey) && e.keyCode === 65) {
                e.preventDefault();
                $('#enable-all-blocks').trigger('click');
            }
            // Escape → clear search
            if (e.keyCode === 27) {
                $('#ab-search-input').val('').trigger('input').blur();
            }
        });

        /* ── Helpers ──────────────────────────────────────── */
        function updateCardStates() {
            $('.ab-card').each(function () {
                var $cb = $(this).find('input[type="checkbox"]');
                if ($cb.length) {
                    $(this).toggleClass('is-disabled', !$cb.is(':checked'));
                }
            });
        }

        function restoreHiddenInput($cb) {
            if (!$cb.siblings('input[type="hidden"]').length) {
                $cb.before($('<input type="hidden">').attr('name', $cb.attr('name')).val('0'));
            }
        }

        function showNotification(message, type) {
            var $n = $('<div class="ab-notice ab-notice--' + type + '"><p>' + message + '</p></div>');
            if (type === 'error') $n.css('background', '#e53e3e');
            $('.ab-main').prepend($n);
            setTimeout(function () { $n.fadeOut(function () { $n.remove(); }); }, 3000);
        }

        function handleAjaxRequest(action, data, callback) {
            $.ajax({
                url: ajaxData.ajaxurl,
                type: 'POST',
                data: $.extend({ action: 'adaire_blocks_' + action, nonce: ajaxData.nonce }, data),
                success: function (response) {
                    if (response.success) {
                        callback(response.data);
                    } else {
                        showNotification('Error: ' + response.data, 'error');
                    }
                },
                error: function () {
                    showNotification('An error occurred. Please try again.', 'error');
                }
            });
        }

    });

}(jQuery));