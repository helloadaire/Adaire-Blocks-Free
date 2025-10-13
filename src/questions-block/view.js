import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('.animated-section');
  const titlesColumn = section?.querySelector('.titles-column');
  const titleItems = section?.querySelectorAll('.title-item');
  const contentItems = section?.querySelectorAll('.content-item');

  if (!section || !titlesColumn || !titleItems.length || !contentItems.length) return;



  // Pin the entire section
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: window.innerWidth <= 1024 ? '+=170%' : "+=250%",
    pin: true,
    pinSpacing: true
  });

  // Single ScrollTrigger to handle both title scaling and content visibility
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: window.innerWidth <= 1024 ? '+=170%' : "+=250%",
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      
      // Remove active class from all items
      titleItems.forEach(item => item.classList.remove('active'));
      contentItems.forEach(item => item.classList.remove('active'));
      
      // Add active class based on scroll progress
      if (progress < 0.33) {
        titleItems[0].classList.add('active');
        contentItems[0].classList.add('active');
      } else if (progress < 0.66) {
        titleItems[1].classList.add('active');
        contentItems[1].classList.add('active');
      } else {
        titleItems[2].classList.add('active');
        contentItems[2].classList.add('active');
      }
    }
  });
}); 