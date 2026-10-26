/* ==========================================
   MUS'AB PREMIUM BOOK MARKETING
   Global Animation & Logic Engine
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Loading Screen logic
    const loader = document.querySelector('#loader, .page-loader');
    if (loader) {
        let loaderDismissed = false;
        const dismissLoader = () => {
            if (loaderDismissed) return;
            loaderDismissed = true;
            window.setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.5s ease';
                window.setTimeout(() => loader.style.display = 'none', 500);
            }, 250);
        };

        if (document.readyState === 'complete') {
            dismissLoader();
        } else {
            window.addEventListener('load', dismissLoader, { once: true });
        }
        window.setTimeout(dismissLoader, 1800);
    }

    // 2. Sticky Navbar Logic
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 4. Premium Scroll Reveal Animations
    // This makes EVERY element with the class 'reveal' animate beautifully when it enters the screen
    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animates once per page load for a clean look
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });

});