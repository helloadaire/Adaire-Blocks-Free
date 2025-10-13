document.addEventListener('DOMContentLoaded', function() {
    // Find all accordion blocks on the page
    const accordions = document.querySelectorAll('.adaire-accordion');
    
    accordions.forEach(accordion => {
        const headers = accordion.querySelectorAll('.adaire-accordion__header');
        const items = accordion.querySelectorAll('.adaire-accordion__item');
        const allowMultiple = accordion.getAttribute('data-allow-multiple') === 'true';
        
        // Initialize panel heights on page load
        items.forEach(item => {
            const panel = item.querySelector('.adaire-accordion__panel');
            const isOpen = item.classList.contains('is-open');
            
            if (isOpen) {
                // Set height for open panels
                panel.style.height = panel.scrollHeight + 'px';
            } else {
                // Set height to 0 for closed panels
                panel.style.height = '0px';
            }
        });
        
        headers.forEach(header => {
            header.addEventListener('click', function() {
                const item = this.closest('.adaire-accordion__item');
                const panel = item.querySelector('.adaire-accordion__panel');
                const isOpen = item.classList.contains('is-open');
                
                if (!allowMultiple) {
                    // Close all other items
                    const allItems = accordion.querySelectorAll('.adaire-accordion__item');
                    allItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('is-open');
                            const otherPanel = otherItem.querySelector('.adaire-accordion__panel');
                            otherPanel.style.height = '0px';
                        }
                    });
                }
                
                // Toggle current item
                if (isOpen) {
                    item.classList.remove('is-open');
                    panel.style.height = '0px';
                } else {
                    item.classList.add('is-open');
                    // Force a reflow to ensure the transition works
                    panel.style.height = panel.scrollHeight + 'px';
                }
            });
        });
    });
});
