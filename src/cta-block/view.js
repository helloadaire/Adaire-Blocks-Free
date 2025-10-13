import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splide from "@splidejs/splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", async () => {
	// Find all cta-block sliders
	const sliderElements = document.querySelectorAll(".cta-block .cta-splide");
	console.log("CTA block sliders found:", sliderElements.length);
	
	if (sliderElements.length === 0) return;
	
	// Load Splide dynamically
	if (!Splide) {
		console.error('❌ Failed to load Splide - CTA block will not work');
		return;
	}
	
	console.log('✅ Splide loaded successfully for CTA block');
	
	sliderElements.forEach((splideElement, index) => {
		const blockElement = splideElement.closest(".cta-block");
		
		if (blockElement) {
			// Get settings from data attributes
			const animationSpeed = parseFloat(blockElement.dataset.animationSpeed) || 1;
			const autoplayEnabled = blockElement.dataset.autoplay === 'true';
			const autoplayDelay = parseInt(blockElement.dataset.autoplayDelay) || 4000;
			
			console.log(`Initializing CTA slider ${index + 1} with settings:`, {
				animationSpeed,
				autoplayEnabled,
				autoplayDelay
			});
			
			const splide = new Splide(splideElement, {
				type: "loop",
				perPage: 3,
				perMove: 1, // Move only one slide at a time
				gap: 0,
				padding: 0,
				pagination: true,
				arrows: true,
				autoplay: autoplayEnabled,
				interval: autoplayDelay,
				speed: 800,
				// Responsive breakpoints
				breakpoints: {
					1024: {
						perPage: 3, // 3 on desktop
						perMove: 1, // Move only one slide at a time
					},
					768: {
						perPage: 2, // 2 on tablet
						perMove: 1, // Move only one slide at a time
						gap: 0,
					},
					480: {
						perPage: 1, // 1 on mobile
						perMove: 1, // Move only one slide at a time
						gap: 0,
					},
				},
			});
			
			// Mount the Splide instance
			splide.mount();
			console.log(splide)
			console.log(`CTA Splide slider ${index + 1} mounted successfully`);
			
			// Enhanced entrance animations with ScrollTrigger
			const container = blockElement.querySelector('.cta-container');
			const title = blockElement.querySelector('.cta-title');
			const subtitle = blockElement.querySelector('.cta-subtitle');
			const carouselContainer = blockElement.querySelector('.carousel-container');
			const gradientGlow = blockElement.querySelector('.gradient-glow');
			
			if (container && title && subtitle && carouselContainer) {
				// Enhanced entrance animations with ScrollTrigger
				gsap.set([title, subtitle, carouselContainer], { opacity: 0, y: 50 });

				ScrollTrigger.create({
					trigger: container,
					start: "top 80%",
					onEnter: () => {
						gsap.to([title, subtitle, carouselContainer], {
							opacity: 1,
							y: 0,
							duration: 1 / animationSpeed,
							stagger: 0.2,
							ease: "power3.out"
						});
					}
				});

				// Enhanced gradient glow animation
				if (gradientGlow) {
					gsap.set(gradientGlow, { scale: 0.8, opacity: 0.3 });
					
					gsap.to(gradientGlow, {
						scale: 1.2,
						opacity: 0.6,
						duration: 4 / animationSpeed,
						ease: "power2.inOut",
						repeat: -1,
						yoyo: true
					});
				}
				
				// Enhanced hover effects
				if (carouselContainer) {
					carouselContainer.addEventListener('mouseenter', () => {
						gsap.to(carouselContainer, {
							scale: 1.02,
							duration: 0.3 / animationSpeed,
							ease: "power2.out"
						});
					});
					
					carouselContainer.addEventListener('mouseleave', () => {
						gsap.to(carouselContainer, {
							scale: 1,
							duration: 0.3 / animationSpeed,
							ease: "power2.out"
						});
					});
				}

				if (title) {
					title.addEventListener('mouseenter', () => {
						gsap.to(title, {
							scale: 1.05,
							duration: 0.3 / animationSpeed,
							ease: "power2.out"
						});
					});
					
					title.addEventListener('mouseleave', () => {
						gsap.to(title, {
							scale: 1,
							duration: 0.3 / animationSpeed,
							ease: "power2.out"
						});
					});
				}
			}
		}
	});
});