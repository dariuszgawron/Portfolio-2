// MENU & LINKS
const navLinks = document.querySelectorAll('[data-section]');
function changeActiveSection(sectionId) {
    document.querySelector('.section--active').classList.remove('section--active');
    document.querySelector('.nav__link--active').classList.remove('nav__link--active');
    document.querySelector('.section[id*='+sectionId+']').classList.add('section--active');
    document.querySelector('.nav__link[data-section*='+sectionId+']').classList.add('nav__link--active');
}
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        changeActiveSection(navLink.getAttribute('data-section'));
    })
});
document.addEventListener("DOMContentLoaded", function(){
    const sectionId = window.location.hash.substring(1) || null;
    if(sectionId)
        changeActiveSection(sectionId);
});

// SWIPER JS
const swiperTestimonial = new Swiper('.swiper-testimonial', {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    // pagination: {
    //     el: '.swiper-testimonial__pagination',
    //     clickable: true
    // },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});

// MIXITUP
const mixitupPortfolio = mixitup('.portfolio__container',{
    selectors: {
        target: '.portfolio__card'
    },
    animation: {
        duration: 400
    }
});
const filterLinks = document.querySelectorAll('.portfolio__filters-item');
function changeActiveFilterLink() {
    const className = 'button--active';
    document.querySelector(`.${className}`).classList.remove(`${className}`);
    this.classList.add(`${className}`);
}
filterLinks.forEach(filterLink => filterLink.addEventListener('click',changeActiveFilterLink));