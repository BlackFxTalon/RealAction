/* alpine.js */

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

// alpine params

/* swiper.js */

// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';

// custom scripts

// init Swiper:
const ctaSlider = new Swiper('.cta-slider', {
  slidesPerView:'auto',
  autoplay: {
    delay: 10000,
  },
  effect: "fade",
  pagination: {
    el: '.cta-slider__pagination',
    clickable: true,
  },
});
const ctaSliderPaginationCurrent = document.querySelector('.cta-slider__pagination-current');

ctaSlider.on('slideChange', () => {
  const ctaSliderIndex = ctaSlider.realIndex;
  ctaSliderPaginationCurrent.dataset.index = ctaSliderIndex;
});

ctaSlider.on('slideChangeTransitionStart', () => {
  ctaSliderPaginationCurrent.classList.add(`cta-slider__pagination-current--index`);
});

ctaSlider.on('slideChangeTransitionEnd', () => {
  ctaSliderPaginationCurrent.classList.remove(`cta-slider__pagination-current--index`);
});

const newCollectionsSlider = new Swiper('.new-collections-slider', {
  slidesPerView:'auto',
  spaceBetween:10,
  pagination: {
    el: '.new-collections-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.new-collections-slider__button-next',
    prevEl: '.new-collections-slider__button-prev',
  },

  breakpoints: {
    320: {
      loop: true,
    },
    1440: {
      slidesPerView:4,
      loop: false,
      spaceBetween:25,
    },
    1440: {
      spaceBetween:30,
    },
    
  }
});