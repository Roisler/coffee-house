const slider = document.querySelector('.favorite-coffee_slider');
const slides = Array.from(document.querySelectorAll('.favorite-coffee_slide'));

const buttonNext = document.querySelector('.favorite-coffee_button-control-next');
const buttonPrev = document.querySelector('.favorite-coffee_button-control-prev');

const slidesCount = slides.length;

let slideIndex = 0;


const showNextSlide = () => {
  slideIndex += 1;
  if (slideIndex >= slidesCount) {
    slideIndex = slidesCount - 1;
  }
  showSlide();
}
const showPrevSlide = () => {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = 0;
  }
  showSlide();
}

const showSlide = () => {
  console.log(slides);
  console.log(slideIndex)
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
};

buttonNext.addEventListener('click', showNextSlide);
buttonPrev.addEventListener('click', showPrevSlide);

showSlide();