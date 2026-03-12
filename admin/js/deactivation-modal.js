(function ($) {
    'use strict';

    var deactivateUrl = '';

    // Show the feedback popup
    function openModal() {
        var $modal = $('#adaire-deact-modal');
        if (!$modal.length) return;

        $modal.fadeIn(150);
        $modal.find('input[type="radio"]').prop('checked', false);
        $modal.find('input[type="email"], textarea').val('');
        $('#adaire-other-details').hide();
    }

    // Just go to the actual link
    function proceed() {
        if (deactivateUrl) window.location.href = deactivateUrl;
    }

    $(document).ready(function () {
        // Target any link that deactivates or deletes OUR plugin
        // We look for 'adaire' in the href to be sure we catch it
        $(document).on('click', 'a[href*="adaire"][href*="action=deactivate"], a[href*="adaire"][href*="action=delete"]', function (e) {
            if (deactivateUrl) return;

            e.preventDefault();
            deactivateUrl = $(this).attr('href');
            openModal();
        });
    });

    // Toggle extra textarea if "Other" is picked
    $(document).on('change', 'input[name="adaire_reason"]', function () {
        $('#adaire-other-details').toggle($(this).val() === 'other');
    });

    // Close and continue to deactivate if they skip
    $(document).on('click', '.adaire-skip-btn', proceed);

    // Close modal if clicking outside the box
    $(document).on('click', '#adaire-deact-modal', function (e) {
        if ($(e.target).hasClass('adaire-modal-overlay')) {
            $(this).fadeOut(150);
            deactivateUrl = '';
        }
    });

    // Send the feedback then deactivate
    $(document).on('submit', '#adaire-deact-form', function (e) {
        e.preventDefault();

        var $btn = $('.adaire-submit-btn');
        $btn.prop('disabled', true).text('Sending…');

        $.post(adaireDeact.ajaxUrl, {
            action: 'adaire_deactivation_feedback',
            nonce: adaireDeact.nonce,
            reason: $('input[name="adaire_reason"]:checked').val() || 'none',
            email: $('#adaire-deact-email').val()
        }).always(proceed);
    });

}(jQuery));
