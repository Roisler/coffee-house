const body = document.querySelector('body');

const burger = document.querySelector('.header-menu_burger');
const headerMenu = document.querySelector('.header-menu');

const navMenuOrigin = document.querySelector('.header-menu_nav');
const navMenu = navMenuOrigin.cloneNode(true);

const mobileMenu = document.createElement('div');

const logoMenuOrigin = document.querySelector('.header-menu_coffee-menu');
const logoMenu = logoMenuOrigin.cloneNode(true);

let progressValue = 0;
let intervalId = null;

let touchStart = null;
let touchEnd = null;

const showMenu = () => {
  burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      burger.classList.remove('active');
      headerMenu.removeChild(mobileMenu);
      navMenu.style = 'display: none';
      logoMenu.style = 'display: none';
      body.classList.remove('no-scroll');
    } else {
      burger.classList.add('active');
      mobileMenu.classList.add('header_mobile-menu');
      headerMenu.appendChild(mobileMenu);

      mobileMenu.appendChild(navMenu);
      mobileMenu.appendChild(logoMenu);
      navMenu.style = 'display: flex; flex-direction: column';
      logoMenu.style = 'display: flex;';
      body.classList.add('no-scroll');
    }
  });
};

showMenu();

const slider = document.querySelector('.favorite-coffee_slider');
const slides = Array.from(slider.querySelectorAll('.favorite-coffee_slide'));

const buttonNext = document.querySelector('.control-next');
const buttonPrev = document.querySelector('.control-prev');
const buttonsStatus = document.querySelectorAll('.favorite-coffee_control');

const buttonsCount = buttonsStatus.length;
const slidesCount = slides.length;

const progressElement = document.createElement('div');
progressElement.classList.add('progress');

let slideIndex = 0;


const showNextSlide = () => {
  clearInterval(intervalId);
  slideIndex += 1;
  if (slideIndex >= slidesCount) {
    slideIndex = 0;
  }
  progressValue = 0;
  showSlide();
  launchProgress(progressValue);
};

const showPrevSlide = () => {
  clearInterval(intervalId);
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = slidesCount - 1;
  }
  progressValue = 0;
  showSlide();
  launchProgress(progressValue);
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
      buttonStatus.appendChild(progressElement);
    } else {
      buttonStatus.classList.remove('active');
    }
  })
};

buttonNext.addEventListener('click', showNextSlide);
buttonPrev.addEventListener('click', showPrevSlide);

showSlide();

const getTouchStart = (e) => {
  touchStart = e.changedTouches[0].clientX;
};

const getTouchEnd = (e) => {
  touchEnd = e.changedTouches[0].clientX;
};

const swipe = () => {
  if (!touchEnd) {
    return;
  }
  const swipeValue = touchStart - touchEnd;
  if (swipeValue > 0 && swipeValue > 20) {
    clearInterval(intervalId);
    progressValue = 0;
    launchProgress(progressValue);
    showNextSlide();
  }
  if (swipeValue < 0 && Math.abs(swipeValue) > 20) {
    clearInterval(intervalId);
    progressValue = 0;
    launchProgress(progressValue);
    showPrevSlide();
  }
  launchProgress(progressValue);
}

const launchProgress = (value) => {
  clearInterval(intervalId);
  if (value >= 100) {
    progressValue = 0;
    showNextSlide();
  } else {
    let currentValue = value;
    intervalId = setInterval(() => {
      if (currentValue > 99) {
        clearInterval(intervalId);
        showNextSlide();
      }
      progressElement.style.width = `${currentValue}%`;
      currentValue += 0.2;
      progressValue = currentValue;
    }, 10);
  }
};

launchProgress(progressValue);

const pauseProgress = () => {
  clearInterval(intervalId);
};

slides.forEach((slide) => {
  slide.addEventListener('mouseover', (e) => {
    pauseProgress();
  });
  slide.addEventListener('mouseout', () => {
    launchProgress(progressValue);
  });
  slide.addEventListener('touchstart', (e) => {
    e.preventDefault();
    getTouchStart(e);
    pauseProgress();
  });
  slide.addEventListener('touchend', (e) => {
    e.preventDefault();
    getTouchEnd(e);
  });
  slide.addEventListener('touchmove', (e) => {
    e.preventDefault();
    swipe();
  })
})