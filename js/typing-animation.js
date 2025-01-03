gsap.registerPlugin(TextPlugin);

const roles = [
    "Full Stack Developer",
    "Content Creator",
    "Script Specialist",
    "IT Intern",
    "Student Leader",
    "Problem Solver",
    "Web Developer",
    "Custom Userscript Developer",
    "Technical Support Specialist",
    "Graphic Designer",
    "Social Media Manager"
];

let currentRole = 0;

function typeNextRole() {
    // Clear the text first
    gsap.to("#role-cycle", {
        duration: 0.5,
        text: "",
        ease: "none"
    }).then(() => {
        // Type the next role
        gsap.to("#role-cycle", {
            duration: 2,
            text: roles[currentRole],
            ease: "none"
        }).then(() => {
            // Wait for 2 seconds before starting to clear
            setTimeout(() => {
                // Move to next role
                currentRole = (currentRole + 1) % roles.length;
                typeNextRole();
            }, 2000);
        });
    });
}

// Start the animation when the page loads
window.addEventListener('load', typeNextRole); 