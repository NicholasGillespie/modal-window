'use strict';

// define moving parts
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.open-modal');

// refactoring code (below) => functions into variable 'openModal' + 'closeModal'
// ↳ .classList.add() => add class 'hidden' when clicked
// ↳ .classList.remove() => remove class 'hidden' when clicked
/*
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/
// looping through all btnsOpenModal
// ↳ addEventListerner => btnsOpenModal listens for 'click'
// ↑↓ function() openModal

// ↳ addEventListerner => btnsCloseModal listens for 'click'
// ↑↓ function() closeModal

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// LISTEN TO KEYBOARD EVENTS
// keyboard events are so called "Global Events"
// Global Events are listed on the whole document

// keyboard events :
// ↳ keydown => fired as soon as key pressed down
// ↳ keypress => fired continuously as finger on certain key
// ↳ keyup => fired when lift finger off keyboard

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
