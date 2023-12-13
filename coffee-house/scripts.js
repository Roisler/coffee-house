let progressValue = 0;
let intervalId = null;

let touchStart = null;
let touchEnd = null;

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

const swipe = (e) => {
  touchEnd = e.changedTouches[0].clientX;
  const swipeValue = touchStart - touchEnd;
  if (swipeValue > 0 && swipeValue > 20) {
    showNextSlide();
  }
  if (swipeValue < 0 && Math.abs(swipeValue) > 20) {
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
    pauseProgress();
    getTouchStart(e);
  });
  slide.addEventListener('touchend', (e) => {
    swipe(e);
  });
  /*slide.addEventListener('touchmove', (e) => {
    e.preventDefault();
    swipe();
  })*/
})