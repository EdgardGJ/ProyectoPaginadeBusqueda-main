document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.nav_target');
    const navLinks = document.querySelector('.nav_links');
    const searchButton = document.querySelector('.container');

    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});