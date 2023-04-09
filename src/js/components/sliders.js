import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay ]);

const partnersSwiper = new Swiper('.partners-slider__inner', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  loopedSlides: 20,
  freeMode: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
});

const repairSwiper = new Swiper('.repair__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
});

const reviewsSwiper = new Swiper('.reviews__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: '.reviews__prev',
    nextEl: '.reviews__next'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const articleSwiper = new Swiper('.article-page__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
