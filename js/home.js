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
    document.body.classList.add('fade', 'in');
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
        
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️';  // Sun icon for switching to dark mode
        } else {
            darkModeToggle.textContent = '🌙';  // Moon icon for switching to light mode
        }
    });
});