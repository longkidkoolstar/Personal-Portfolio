// Smooth scroll to sections
document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Portfolio Filter Logic
const filterButtons = document.querySelectorAll('.filter-button');
const projectsGrid = document.getElementById('projectsGrid');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');
        
        // Filter projects based on category
        const filter = this.getAttribute('data-filter');
        const allProjects = projectsGrid.children;
        
        for (let project of allProjects) {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    });
});


// Call loadProjects when the page is ready
window.onload = loadProjects;
