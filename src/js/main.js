/* alpine.js */

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

// alpine params

// AOS.js

AOS.init();

// import Atropos library
import Atropos from 'atropos';

function initAtroposEffectOnElems() {
  document.querySelectorAll('.my-atropos').forEach((element = '.product-descr-slider-img-parallax-effect') => {
    Atropos({
      // pass unique element here
      el: element,
      // rest of parameters
      highlight: false,
      shadowScale: 0,
    });
  })
}
initAtroposEffectOnElems();

// custom scripts

// init Swiper:
const ctaSlider = new Swiper('.cta-slider', {
  slidesPerView:'auto',
  observe: true,
  observeParents: true,
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
  observe: true,
  observeParents: true,
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
  observe: true,
  observeParents: true,
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
  slidesPerView: 'auto',
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
  observe: true,
  observeParents: true,
  navigation: {
    nextEl: '.product-descr-slider__button-next',
    prevEl: '.product-descr-slider__button-prev',
  },
});

const gatherCollectionSlider = new Swiper('.gather-collection-slider', {
  slidesPerView: 1,
  observe: true,
  observeParents: true,
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


// pwaInstall on non-desktop devices

function pwaInstallOnNonDesktopDevices() {
// Detects if device is on iOS 
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  
const pwaInstallToast = document.querySelector('.pwa-install-toast');

pwaInstallToast.style.display='inline-block';
}
}

pwaInstallOnNonDesktopDevices();