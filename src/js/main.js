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
