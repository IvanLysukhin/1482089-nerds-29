const openButton = document.querySelector('.contacts .button');
const popup = document.querySelector('.modal');
const closeButton = popup.querySelector('.close');
const nameForm = popup.querySelector('.name-form');
const emailForm = popup.querySelector('.email-form');
const letterForm = popup.querySelector('.letter');
const feedbackFrom = popup.querySelector('.feedback-box');

openButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-open')
  nameForm.focus();
});

feedbackFrom.addEventListener("submit", function(evt) {
  if (!nameForm.value || !emailForm.value || !letterForm.value) {
    evt.preventDefault();
  };
  if (!nameForm.value) {
    nameForm.classList.add('required');
  };
  if (!emailForm.value) {
    emailForm.classList.add('required');
  };
  if (!feedbackFrom.value) {
    letterForm.classList.add('required');
  };
});

closeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-open')
  nameForm.classList.remove('required');
  mailForm.classList.remove('required');
  letterForm.classList.remove('required');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-open")) {
      evt.preventDefault();
      popup.classList.remove("modal-open");
    }
  }
});


//Слайдер на главной

const firstSlide = document.querySelector('.slider-item:nth-child(1)');
const secondSlide = document.querySelector('.slider-item:nth-child(2)');
const thirdSlide = document.querySelector('.slider-item:nth-child(3)');
const firstSlideButton = document.querySelector('.slider-button:nth-child(1)');
const secondSlideButton = document.querySelector('.slider-button:nth-child(2)');
const thirdSlideButton = document.querySelector('.slider-button:nth-child(3)');

firstSlideButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  firstSlide.classList.remove('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
  firstSlideButton.classList.add('current-slide');
  secondSlideButton.classList.remove('current-slide');
  thirdSlideButton.classList.remove('current-slide');
});

secondSlideButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.remove('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
  firstSlideButton.classList.remove('current-slide');
  secondSlideButton.classList.add('current-slide');
  thirdSlideButton.classList.remove('current-slide');
});

thirdSlideButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.remove('visually-hidden');
  firstSlideButton.classList.remove('current-slide');
  secondSlideButton.classList.remove('current-slide');
  thirdSlideButton.classList.add('current-slide');
});
