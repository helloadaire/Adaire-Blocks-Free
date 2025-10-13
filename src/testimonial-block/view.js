import Swiper from 'swiper/bundle';

// Frontend JavaScript for Carousel Text Block
document.addEventListener('DOMContentLoaded', function() {
    const carouselBlocks = document.querySelectorAll('.ad-carousel-text-block');
    
    carouselBlocks.forEach(function(block) {
        const swiperContainer = block.querySelector(".swiper");
        console.log(swiperContainer);
        if (swiperContainer) {
            // Get configuration from data attributes
            const slidesPerView = parseInt(block.dataset.slidesPerView) || 3;
            const spaceBetween = parseInt(block.dataset.spaceBetween) || 50;
            const loop = block.dataset.loop === 'true';
            const navigation = block.dataset.navigation === 'true';
            const pagination = block.dataset.pagination === 'true';
            const scrollbar = block.dataset.scrollbar === 'true';
            
            // Count actual slides
            const totalSlides = swiperContainer.querySelectorAll('.swiper-slide').length;
            
            // Loop only works properly if we have more slides than slidesPerView
            // For proper looping, we need at least 3 slides
            const shouldLoop = loop && totalSlides >= 3;
            
            // Check if navigation elements exist
            const prevButton = swiperContainer.querySelector('.swiper-button-prev');
            const nextButton = swiperContainer.querySelector('.swiper-button-next');
            const paginationEl = swiperContainer.querySelector('.swiper-pagination');
        
            
            try {
                const swiperInstance = new Swiper(swiperContainer, {
                    // Basic configuration
                    direction: 'horizontal',
                    loop: shouldLoop,
                    spaceBetween: spaceBetween,
                    slidesPerView: slidesPerView,
                    centeredSlides: true,
                    initialSlide: 0,
                    allowTouchMove: false, // Disable dragging/swiping
                    simulateTouch: false, // Disable touch simulation
                    
                    // Callbacks
                    on: {
                        init: function() {
                        },
                        slideChange: function() {
                           
                        }
                    },
                    
                    // Pagination
                    pagination: pagination ? {
                        el: '.swiper-pagination',
                        clickable: true,
                    } : false,
                    
                    // Navigation arrows
                    navigation: navigation ? {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    } : false,
                    
                    // Scrollbar
                    scrollbar: scrollbar ? {
                        el: '.swiper-scrollbar',
                        draggable: true,
                    } : false,
                    
                    // Responsive breakpoints
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            centeredSlides: false,
                            loop: loop && totalSlides >= 3,
                        },
                        768: {
                            slidesPerView: Math.min(2.2, slidesPerView),
                            spaceBetween: 30,
                            centeredSlides: true,
                            loop: loop && totalSlides >= 3,
                        },
                        1024: {
                            slidesPerView: Math.min(slidesPerView + 0.5, totalSlides),
                            spaceBetween: spaceBetween,
                            centeredSlides: true,
                            loop: loop && totalSlides >= 3,
                        }
                    }
                });
                
               
                
            } catch (error) {
                console.error('Error creating Swiper:', error);
            }
        }
    });
});

