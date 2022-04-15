// MENU
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', link => {
        
        navLink.classList.add('nav__link--active');
    })
})