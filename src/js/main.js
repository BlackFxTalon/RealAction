/* alpine.js */

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

// alpine params

// AOS.js

AOS.init();

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

const seasonPopularSlider = new Swiper('.season-popular-slider', {
  slidesPerView:'auto',
  spaceBetween:10,
  pagination: {
    el: '.season-popular-slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '"><span class="swiper-pagination-bullet-count">' + (index + 1) + "</span></p>";
    },
  },
  navigation: {
    nextEl: '.season-popular-slider__button-next',
    prevEl: '.season-popular-slider__button-prev',
  },

  breakpoints: {
    320: {
      loop: true,
    },
    1440: {
      slidesPerView:4,
      loop: false,
      spaceBetween:12,
    },
    1920: {
      slidesPerView:5,
      spaceBetween:15,
    },
    
  }
});

const productCardSlider = new Swiper('.product-card-slider', {
  slidesPerView:'auto',
  pagination: {
    el: '.product-card-slider__pagination',
    type: "fraction",
  },
  scrollbar: {
    el: ".product-card-slider__scrollbar",
  },
  navigation: {
    nextEl: '.product-card-slider__button-next',
    prevEl: '.product-card-slider__button-prev',
  },

  breakpoints: {
    768: {
      spaceBetween:20,
    },
    1440: {
      spaceBetween:30,
    },
    1920: {
      slidesPerView:2,
      spaceBetween:20,
    },
    
  }
});

const productDescrSlider = new Swiper('.product-descr-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.product-descr-slider__button-next',
    prevEl: '.gather-collection-slider__button-prev',
  },
});

const gatherCollectionSlider = new Swiper('.gather-collection-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.gather-collection-slider__button-next',
    prevEl: '.gather-collection-slider__button-prev',
  },

  breakpoints: {
    768: {
      spaceBetween:20,
      slidesPerView: 'auto',
    },

    1440: {
      spaceBetween:0,
      slidesPerView: 1,
    }
  }
});

const orderMakingForm = new Swiper('.order-making__form', {
  slidesPerView: 1,
  autoHeight:true,
  allowTouchMove:false,
  navigation: {
    nextEl: '.order-making__to-next-step-btn',
    prevEl: '.order-making__return-back-btn',
  },

});

function slideToIndexSlide0() {
  document.querySelector('.order-making__to-slide-1-btn').addEventListener('click', ()=>{
    orderMakingForm.slideTo(0);
  });
}

slideToIndexSlide0();

function slideToIndexSlide1() {
  document.querySelector('.order-making__to-next-step-btn--to-office-data').addEventListener('click', ()=>{
    orderMakingForm.slideTo(1);
  });
}

slideToIndexSlide1();

function slideToIndexSlide2() {
  document.querySelector('.order-making__to-next-step-btn--to-delivery-home-data').addEventListener('click', ()=>{
    orderMakingForm.slideTo(2);
  });
}

slideToIndexSlide2();

function slideToIndexSlide3() {
  document.querySelector('.order-making__to-next-step-btn--to-slide-3').addEventListener('click', ()=>{
    orderMakingForm.slideTo(3);
  });
}

slideToIndexSlide3();

const fullScreenBtn = document.querySelector('.product-card-slider__fullscreen-btn');

fullScreenBtn.addEventListener('click',()=>{
  document.querySelector('[data-fancybox="productCardSlider"]').click();
})

function initGatherCollectionScrollBar () {
  if (window.innerWidth >= 1440) {
    new SimpleBar(document.querySelector('.gather-collection-list-wrapper'));
  }
}

initGatherCollectionScrollBar();