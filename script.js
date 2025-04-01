document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            
            navMenu.classList.remove('show');
        });
    });
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
        
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;

            console.log('Form submitted:', { name, email, subject, message });
            
            
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    
    const newsletterForm = document.querySelector('.footer-newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            console.log('Newsletter subscription:', email);
            
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-content, .team-member, .project-card, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(-10px)';
            }
        });
    }
    
    
    document.querySelectorAll('.about-content, .team-member, .project-card, .timeline-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
});