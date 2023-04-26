
var commentSwiper = new Swiper(".commentSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

var headerSwiper = new Swiper(".headerSwiper", {
  centeredSlides: true,
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".slider-swiper-button-next",
    prevEl: ".slider-swiper-button-prev",
  },
});

    
var productSwiper = new Swiper(".productSwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".product-swiper-button-next",
    prevEl: ".product-swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    "@2.00": {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});


var iconSwiper = new Swiper(".iconSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    "@2.00": {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});
  

var categoriSwiper = new Swiper(".categoriSwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".categori-product-swiper-button-next",
    prevEl: ".categori-product-swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    "@2.00": {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
  










