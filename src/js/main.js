/* alpine.js */

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

// alpine params

// AOS.js

AOS.init();

// custom scripts

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