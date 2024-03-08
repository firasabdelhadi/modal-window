'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    console.log('Button Clicked')
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

// for (let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener('click', function() {
//         console.log('Button Clicked')
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     });
// }

const closedModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// btnCloseModal.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

btnCloseModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', function (e) {

    // if (e.key === 'Escape') {
    //     if (!modal.classList.contains('hidden')) {
    //         closedModal();
    //     }
    // }
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closedModal();
    }
});