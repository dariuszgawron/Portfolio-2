// LOADER
const loader = document.getElementById('loader');
onload = () => {
    setTimeout(() => {
        loader.classList.add('loader--hidden');
    }, 2200);
};

// SKILLS BARS
const skillsBars = document.querySelectorAll('.skills__progress-bar');
skillsBars.forEach(skillBar => {
    skillBar.style.width = skillBar.dataset.width;
});

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

// PORTFOLIO GALLERY
const portfolioButtons = document.querySelectorAll('.portfolio__card-button');
const portfolioGallery = document.getElementById('portfolio-gallery');
const portfolioClose = document.getElementById('portfolio-gallery-close');
const portfolioImage = document.getElementById('portfolio-gallery-image');
const portfolioPage = document.getElementById('portfolio-gallery-page');
const portfolioPrev = document.getElementById('portfolio-gallery-prev');
const portfolioNext = document.getElementById('portfolio-gallery-next');
const numberOfImages = portfolioButtons.length;
let currentImage = 0;
function openImage(index,total) {
    portfolioPage.innerHTML = `${index} / ${total}`;
    portfolioImage.src = portfolioButtons[index-1].parentNode.previousElementSibling.src;
}
// Open gallery
portfolioButtons.forEach((portfolioButton, index) => {
    portfolioButton.addEventListener('click', () => {
        currentImage = index + 1;
        openImage(currentImage,numberOfImages);
        portfolioGallery.classList.add('portfolio__gallery--show');
    })
});
// Close gallery
portfolioClose.addEventListener('click', () => {
    portfolioGallery.classList.remove('portfolio__gallery--show');
});
// Switch between images
portfolioPrev.addEventListener('click', () => {
    if(--currentImage<1) 
        currentImage=numberOfImages;
    openImage(currentImage,numberOfImages);
});
portfolioNext.addEventListener('click', () => {
    if(++currentImage>numberOfImages) 
        currentImage=1;
    openImage(currentImage,numberOfImages);
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
        992: {
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
        animateResizeContainer: false,
        effects: 'fade stagger(100ms)',
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