import '@fortawesome/fontawesome-free/js/all.js';
document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.split("/").pop(); 
    let activePage;

    if (currentPath === "") {
        activePage = "index.html";
    } else {
        activePage = currentPath;
    }

    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();

        if (linkPath === activePage) {
            link.classList.add('current');
        }
    });
});