document.addEventListener('DOMContentLoaded', () => {
    // --- 1. GALAXY PARTICLE EFFECT (Unique Background) ---

    const particleContainer = document.getElementById('particle-container');
    const particleCount = 100;

    function createStars() {
        for (let i = 0; i < particleCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random position
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            
            // Random size/opacity
            const size = Math.random() * 2 + 1; // 1px to 3px
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            
            // Random animation duration and delay
            star.style.animationDuration = Math.random() * 3 + 2 + 's';
            star.style.animationDelay = Math.random() * 5 + 's';

            particleContainer.appendChild(star);
        }
    }

    createStars();


    // --- 2. SCROLL REVEAL ANIMATION (Smooth Content Appearance) ---

    const revealElements = document.querySelectorAll('.reveal-text, .reveal-item');
    
    // Function to check if an element is in the viewport
    const checkVisibility = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            // If the element is within 80% of the viewport height, add the 'visible' class
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('visible');
            }
            // Optional: you can remove the 'visible' class if you want the animation to repeat when scrolling back up
        });
    };

    // Initial check on load
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);


    // --- 3. SMOOTH NAVIGATION SCROLL (UX Improvement) ---

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- 4. ACTIVE LINK HIGHLIGHT (Optional) ---

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Check if the current scroll position is within the section
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});