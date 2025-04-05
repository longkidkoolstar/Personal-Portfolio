// Smooth scrolling for navigation links
document.querySelectorAll('.navbar-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) { // Check if the element exists before scrolling
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Create particle effect
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation duration between 10s and 25s
        const duration = Math.random() * 15 + 10;
        particle.style.animationDuration = `${duration}s`;

        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;

        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.3;

        container.appendChild(particle);
    }
}


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

// Rest of your JavaScript code (dark mode toggle)

document.addEventListener("DOMContentLoaded", function() {
    // Initialize page fade-in effect
    document.body.classList.add('fade', 'in');

    // Initialize dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check localStorage on load
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode', 'animate-switch');
        darkModeToggle.textContent = '☀️';  // Sun icon for dark mode
    } else {
        body.classList.add('animate-switch');  // Add animation class on load
        darkModeToggle.textContent = '🌙';  // Moon icon for light mode
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));

        // Add rotation animation on click
        darkModeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            darkModeToggle.style.transform = '';
        }, 500);

        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️';  // Sun icon for switching to dark mode
        } else {
            darkModeToggle.textContent = '🌙';  // Moon icon for switching to light mode
        }
    });

    // Create particles for hero section
    createParticles();

    // Add animation to skill icons on scroll
    const skillIcons = document.querySelectorAll('.about-content div[align="left"] img');
    skillIcons.forEach((icon, index) => {
        // Add staggered animation delay
        icon.style.transitionDelay = `${index * 0.1}s`;
    });
});