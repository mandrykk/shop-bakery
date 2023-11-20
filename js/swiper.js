const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.pagination',
        bulletClass: 'pagination__btn',
        bulletActiveClass: 'pagination__btn-active',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
    navigation: {
        prevEl: '.formats__btn.prev',
        nextEl: '.formats__btn.next',
  },
});