const swiper = new Swiper(".portfolioSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2.2
    },
    992: {
      slidesPerView: 3,
      allowTouchMove: false
    }
  }
});