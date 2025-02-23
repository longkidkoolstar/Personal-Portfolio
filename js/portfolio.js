// Function to fetch projects from API with caching
async function fetchProjects() {
    const lastChecked = localStorage.getItem('lastChecked');
    const now = new Date().getTime();

    // Check if the last checked time is more than 24 hours ago
    if (lastChecked && (now - lastChecked < 24 * 60 * 60 * 1000)) {
        // Return cached projects
        const cachedProjects = localStorage.getItem('projects');
        return cachedProjects ? JSON.parse(cachedProjects) : [];
    }

    try {
        const response = await fetch('https://api.jsonstorage.net/v1/json/d206ce58-9543-48db-a5e4-997cfc745ef3/cf348fdf-4232-4b4e-8459-cf6cf101cde5');
        const data = await response.json();
        
        // Cache the projects and update the last checked time
        localStorage.setItem('projects', JSON.stringify(data.projects));
        localStorage.setItem('lastChecked', now);

        return data.projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    const tagsHtml = project.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

    const linksHtml = Object.entries(project.links)
        .map(([platform, url]) => `<a href="${url}" target="_blank">${platform}</a>`)
        .join('');

    let imageHtml = '';
    if (project.image) {
        imageHtml = `<img src="${project.image}" alt="Project Image" class="project-image">`;
    }
    card.innerHTML = `
        <div class="card-image">${imageHtml}</div>
        <h3>${project.title}</h3>
        <div class="tags">${tagsHtml}</div>
        <p>${project.description}</p>
        <div class="project-links">${linksHtml}</div>
    `;

    return card;
}

// Update the renderProjects function to be async
// Update the renderProjects function with animations
async function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    const existingCards = projectsGrid.children;

    // Fade out existing cards
    Array.from(existingCards).forEach(card => {
        card.classList.add('fade-out');
    });

    // Wait for fade out animation
    await new Promise(resolve => setTimeout(resolve, 300));

    projectsGrid.innerHTML = '';

    const projects = await fetchProjects();
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    // Create and append new cards (initially hidden)
    filteredProjects.forEach(project => {
        const card = createProjectCard(project);
        card.classList.add('fade-out');
        projectsGrid.appendChild(card);
    });

    // Trigger reflow
    projectsGrid.offsetHeight;

    // Fade in new cards
    Array.from(projectsGrid.children).forEach((card, index) => {
        // Stagger the animations
        setTimeout(() => {
            card.classList.remove('fade-out');
            card.classList.add('fade-in');
        }, index * 100); // 100ms delay between each card
    });
}

// Update the filter button click handler to be smoother
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', async () => {
            // Prevent multiple clicks during animation
            if (button.classList.contains('active')) return;

            // Update active button with animation
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'scale(1)';
            });
            button.classList.add('active');
            button.style.transform = 'scale(1.1)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);

            // Filter projects
            const filter = button.getAttribute('data-filter');
            await renderProjects(filter);
        });
    });
});

// Update addProject function to be async
async function addProject(project) {
    const projects = await fetchProjects();
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects)); // Update local storage
    renderProjects();
}

