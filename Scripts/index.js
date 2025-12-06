

const splashScreen = document.querySelector('.screen');
const continueToRegBtn = document.getElementById('js-continue-to-reg-btn');
const carouselContainer = document.querySelector('.carousel-screen-con')

setTimeout(() => {
  splashScreen.classList.remove('active');
  window.location.href = '/gym-center.html';
  
}, 4000);

