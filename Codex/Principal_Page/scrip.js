document.addEventListener('DOMContentLoaded', function() {
const menuButton = document.querySelector('.nav_target');
const navLinks = document.querySelector('.nav_links');
const carrousel = document.querySelector('.header_container');

menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    carrousel.classList.toggle('show');
    carrousel.classList.toggle('menu-open')
 });
});