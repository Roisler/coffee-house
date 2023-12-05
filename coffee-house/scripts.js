const burger = document.querySelector('.header-menu_burger');
const headerMenu = document.querySelector('.header-menu');

const navMenuOrigin = document.querySelector('.header-menu_nav');
const navMenu = navMenuOrigin.cloneNode(true);

const mobileMenu = document.createElement('div');

const logoMenuOrigin = document.querySelector('.header-menu_coffee-menu');
const logoMenu = logoMenuOrigin.cloneNode(true);

const showMenu = () => {
  burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      burger.classList.remove('active');
      headerMenu.removeChild(mobileMenu);
      navMenu.style = 'display: none';
      logoMenu.style = 'display: none';
    } else {
      burger.classList.add('active');
      mobileMenu.classList.add('header_mobile-menu');
      headerMenu.appendChild(mobileMenu);

      mobileMenu.appendChild(navMenu);
      mobileMenu.appendChild(logoMenu);
      navMenu.style = 'display: flex; flex-direction: column';
      logoMenu.style = 'display: flex;';
    }
  })
};

showMenu();

const slider = document.querySelector('.favorite-coffee_slider');
const slides = Array.from(slider.querySelectorAll('.favorite-coffee_slide'));

const buttonNext = document.querySelector('.control-next');
const buttonPrev = document.querySelector('.control-prev');
const buttonsStatus = document.querySelectorAll('.favorite-coffee_control');

const buttonsCount = buttonsStatus.length;
const slidesCount = slides.length;

let slideIndex = 0;


const showNextSlide = () => {
  slideIndex += 1;
  if (slideIndex >= slidesCount) {
    slideIndex = 0;
  }
  showSlide();
};

const showPrevSlide = () => {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = slidesCount - 1;
  }
  showSlide();
};

const showSlide = () => {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
      slider.style = `transform: translateX(${-index * 100}%)`;
    } else {
      slide.classList.remove('active');
    }
  });

  buttonsStatus.forEach((buttonStatus, index) => {
    let buttonIndex = slideIndex;
    if (index === buttonIndex) {
      buttonStatus.classList.add('active');
    } else {
      buttonStatus.classList.remove('active');
    }
  })
};

slides.forEach((slide) => {
  slide.addEventListener('swipe', (e) => {
    e.preventDefault();
    console.log(e.details)
  })
})
buttonNext.addEventListener('click', showNextSlide);
buttonPrev.addEventListener('click', showPrevSlide);

showSlide();

