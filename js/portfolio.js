// Project data structure
const projects = [
{
title: "Example Project 1",
description: "A web application built with React and Node.js",
tags: ["web", "react", "nodejs"],
category: "web",
links: {
github: "https://github.com/longkidkoolstar/project1",
demo: "https://project1-demo.com"
}
},
{
title: "Userscript Example",
description: "A Greasemonkey script to enhance website functionality",
tags: ["javascript", "userscript"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/yourscript"
}
},
{
title: "Tutorial Series",
description: "Video tutorial series on web development",
tags: ["education", "webdev"],
category: "content",
links: {
youtube: "https://youtube.com/watch?v=yourvideo"
}
},
{
title: "Battleship-AI-for-papergames",
description: "A battleship AI for paper games, with a demo version in place.",
tags: ["javascript", "ai", "battleship"],
category: "scripts",
links: {
github: "https://github.com/longkidkoolstar/Battleship-AI-for-papergames"
}
},
{
title: "CryptoJS-AES-Decryptor-Extension",
description: "A CryptoJS AES Decryptor extension for web applications.",
tags: ["javascript", "cryptojs"],
category: "extensions",
links: {
github: "https://github.com/longkidkoolstar/CryptoJS-AES-Decryptor-Extension"
}
},
{
title: "JumperBoys-Game",
description: "A game I am trying to make with slow-mo and no Jumping, this is still private.",
tags: ["game", "javascript"],
category: "games",
links: {
github: "https://github.com/longkidkoolstar/JumperBoys-Game"
}
},
{
title: "Contexto Hack",
description: "A Contexto Hack that allows you to get the word of the day and any game number you are currently playing.",
tags: ["javascript", "contexto"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/contextohack"
}
},
{
title: "Tic Tac Toe Board Evaluation for papergames",
description: "AI plays Tic-Tac-Toe for you on papergames.io. Have fun and destroy some nerds 😃!!",
tags: ["javascript", "tictactoe"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/tic-tac-toe-board-evaluation-for-papergames"
}
},
{
title: "Gomoku AI for papergames",
description: "A powerful AI userscript that plays Gomoku (Five in a Row) on papergames.io. This AI uses the minimax algorithm with alpha-beta pruning and sophisticated position evaluation to play strong moves.",
tags: ["javascript", "gomoku"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/gomoku-ai-for-papergames"
}
},
{
title: "Connect 4 Board Evaluation for papergames",
description: "This userscript enhances your Connect 4 experience on papergames.io by providing a visual evaluation of the best moves for both players. It calculates move strengths and displays them directly on the game board.",
tags: ["javascript", "connect4"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/connect-4-board-evaluation-for-papergames"
}
},
{
title: "Connect 4 AI for papergames",
description: "Adds an AI player to Connect 4 on papergames.io. It makes the most intelligent moves.",
tags: ["javascript", "connect4"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/connect-4-ai-for-papergames"
}
},
{
title: "Tic Tac Toe AI for papergames",
description: "AI plays Tic-Tac-Toe for you on papergames.io. Have fun and destroy some nerds 😃!!",
tags: ["javascript", "tictactoe"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/tic-tac-toe-ai-for-papergames"
}
},
{
title: "Purpose Games Hack",
description: "Answers all games on PurposeGames in record Time (with adjustable slider)",
tags: ["javascript", "purposegames"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/purpose-games-hack"
}
},
{
title: "Anime 2 MAL",
description: "Adds a Button that fetches the MAL(My Anime List) link for anime on Anime-Watching-Websites such as Aniwatch.to (Zoro.to)",
tags: ["javascript", "anime"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/anime2-mal"
}
},
{
title: "Chess Plus+",
description: "Essential/Quality of life tweaks to Chess.com, including Auto Queue, Lichess Analysis, and Chess-Helper",
tags: ["javascript", "chesscom"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/chess-plus"
}
},
{
title: "MonkeyType AutoTyper Bot",
description: "A Bot that automatically types for you in MokeyType.",
tags: ["javascript", "monkeytype"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/monkeytype-autotyper-bot"
}
},
{
title: "Google I'm Not A Robot Clicker",
description: "Automatically clicks the Google I'm not a Robot button for you.",
tags: ["automation", "captcha", "google"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/459134-auto-google-to-sign"
}
},
{
title: "Toggle HTML View of Additional Info",
description: "Adds a button to toggle the HTML view of the additional info div on Greasy Fork pages.",
tags: ["automation", "html", "greasyfork"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/486472-toggle-html-view-of-additional-info"
}
},
{
 title: "Nhentai Plus+",
 description: "Enhances the functionality of Nhentai website.",
 tags: ["nhentai", "enhancement"],
 category: "scripts",
 links: {
 github: "https://github.com/longkidkoolstar/nhentai-plus",
 greasyfork: "https://greasyfork.org/en/scripts/463318-nhentai-plus"
 }
 },
 {
title: "Quillbot Premium Unlocker",
description: "Unlocks Quillbot Premium so that you don't have to pay.",
tags: ["quillbot", "unlocker"],
category: "scripts",
links: {
greasyfork: "https://greasyfork.org/en/scripts/486702-quillbot-premium-unlocker"
}
},
{
title: "Toonily Manga Loader",
description: "Forces Toonily to load all manga images at once and dynamically loads them into a single page strip with a stats window.",
tags: ["toonily", "userscript"],
category: "scripts",
links: {
github: "https://github.com/longkidkoolstar/toonily-manga-loader",
greasyfork: "https://greasyfork.org/en/scripts/486713-toonily-manga-loader"
}
},
{
title: "Nhentai Manga Loader",
description: "Loads nhentai manga chapters into one page in a long strip format with image scaling, click events, and a dark mode for reading.",
tags: ["nhentai", "userscript"],
category: "scripts",
links: {
github: "https://github.com/longkidkoolstar/nhentai-manga-loader",
greasyfork: "https://greasyfork.org/en/scripts/486714-nhentai-manga-loader"
   }
},
{
 title: "Papergames-Ban-Bypass-with-Full-Proxy-Rotation-Extension",
 description: "Bypasses bans on Papergames by using full proxy rotation.",
 tags: ["papergames", "ban bypass", "proxy"],
 category: "scripts",
 links: {
 github: "https://github.com/longkidkoolstar/Papergames-Ban-Bypass-with-Full-Proxy-Rotation-Extension",
 greasyfork: "https://greasyfork.org/en/scripts/504755-papergames-ban-bypass"
 }
 }
];

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

// Function to render projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    filteredProjects.forEach(project => {
        projectsGrid.appendChild(createProjectCard(project));
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    // Add filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
});

// Function to add new project
function addProject(project) {
    projects.push(project);
    renderProjects();
}

