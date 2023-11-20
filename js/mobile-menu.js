const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.header__mobile-menu');
const menuBtnClose = document.querySelector('.mobile-menu__btn-close');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-open');
  disableScroll();
};

function disableScroll() {
  document.body.classList.toggle('is-scroll-disabled');
}

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
