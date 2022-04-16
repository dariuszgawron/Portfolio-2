// MENU
// const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        sectionId = navLink.getAttribute('data-section');
        console.log(sectionId);
        document.querySelector('.section--active').classList.remove('section--active');
        document.querySelector('.nav__link--active').classList.remove('nav__link--active');
        document.querySelector('.section[id*='+sectionId+']').classList.add('section--active');
        navLink.classList.add('nav__link--active');
    })
})