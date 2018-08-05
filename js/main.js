// Grab the necessary DOM elements 
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuBtn = document.querySelector('.menu-btn');

const navItems = document.querySelectorAll('.nav-item');

// Initial state setup
let displayMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!displayMenu) {
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuBtn.classList.add('close');
        navItems.forEach((item) => item.classList.add('show'));

        // Reset state menu
        displayMenu = true;
    } else {
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuBtn.classList.remove('close');
        navItems.forEach((item) => item.classList.remove('show'));

        // Reset state menu
        displayMenu = false;
    }
}