const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const backdrop = document.querySelector('.backdrop');

function toggleModal() {
    modal.classList.toggle('is-hidden');
}

function backdropClick(e) {
    if (e.target !== e.currentTarget) return;
    modal.classList.toggle('is-hidden');
}

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', backdropClick);