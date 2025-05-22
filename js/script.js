// JavaScript for interactivity

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');
    
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const sections = document.querySelectorAll('.content-section');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const testimonials = document.querySelectorAll('.testimonial');
    const philosophyPoints = document.querySelectorAll('.philosophy-point');
    
    // Add a class for pre-animation state
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Add sequential animation to portfolio items
    portfolioItems.forEach((item, index) => {
        item.classList.add('fade-up');
        item.style.animationDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
    
    // Add sequential animation to testimonials
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.add('fade-in');
        testimonial.style.animationDelay = `${index * 0.3}s`;
        observer.observe(testimonial);
    });
    
    // Add sequential animation to philosophy points
    philosophyPoints.forEach((point, index) => {
        point.classList.add('fade-right');
        point.style.animationDelay = `${index * 0.2}s`;
        observer.observe(point);
    });
}); 