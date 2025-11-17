// const fullScreenImage = document.querySelector('.full-screen-image-con');
// const mainContentContainer = document.querySelector('.main-content-container');
// let containersList = [fullScreenImage, mainContentContainer];

// const circle1 = document.getElementById('circle1');
// const circle2 = document.getElementById('circle2');
// const circle3 = document.getElementById('circle3');
// const nextBtn = document.querySelector('.next-btn');

// const circles = [circle1, circle2, circle3];

// // Main content text
// const mainHeader = document.querySelector('.header');
// const mainText = document.querySelector('.th-text');
// // Main content text

// setTimeout(() => {
//   fullScreenImage.classList.remove('active');

//   mainContentFunction();
// }, 2000)

// function mainContentFunction() {
//   mainContentContainer.classList.add('active');

//   if (circle1.classList.contains('enabled')) {
//     mainHeader.textContent = 'Book A Gym';
//     mainText.textContent = 'Book a nearby gym, choose the best that fits your routine';
//   }

//   nextBtn.addEventListener('click', () => {
//   if (circle1.classList.contains('enabled')) {
//     circle1.classList.remove('enabled');
//     circle2.classList.add('enabled');
//     mainHeader.textContent = 'Find Your Trainer';
//     mainText.textContent = 'Get hands-on training from the best trainer in your city';
//     mainContentContainer.style.backgroundImage = "url('../trueAssets/find-your-trainer.jpg')";
//     mainContentContainer.style.backgroundSize = '290px 500px';
//   } 
//   else if (circle2.classList.contains('enabled')) {
//     circle2.classList.remove('enabled');
//     circle3.classList.add('enabled');
//     mainHeader.textContent = 'Track Your Activity';
//     mainText.textContent = 'Keep your heart rate up, burn the calories, feel the energy';
//     mainContentContainer.style.backgroundImage = "url('../trueAssets/track-your-activity.jpg')";
//     mainContentContainer.style.backgroundSize = '290px 500px';
//   }
//   else if (circle3.classList.contains('enabled')) {
//     window.location.href = '/signup-page.html';
//   }
// });

// }

const splashScreen = document.querySelector('.screen');
const continueToRegBtn = document.getElementById('js-continue-to-reg-btn');
const carouselContainer = document.querySelector('.carousel-screen-con')

setTimeout(() => {
  splashScreen.classList.remove('active');
  window.location.href = '/gym-center.html';
  
}, 4000);

// Splash Screen Timeout Interval



// Carousel Functionality
// Wait for DOM to load
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize carousel after splash screen
//     setTimeout(initCarousel, 2500);
// });

// function initCarousel() {
//     const carousel = document.querySelector('.carousel-screen');
//     const slides = document.querySelectorAll('.slider-screen');
//     const continueBtn = document.querySelector('.continue-to-reg');
    
//     // Hide splash screen and show carousel
//     const splashScreen = document.getElementById('splash-screen');
//     splashScreen.classList.remove('active');
//     splashScreen.style.display = 'none';
    
//     // Make carousel container visible
//     document.querySelector('.carousel-screen-con').style.display = 'flex';
    
//     let currentIndex = 0;
//     const slideCount = slides.length;
//     const slideWidth = 200 + 30; // width + gap
    
//     // Create carousel track
//     const track = document.createElement('div');
//     track.className = 'carousel-track';
    
//     // Move slides into track
//     slides.forEach(slide => {
//         track.appendChild(slide);
//     });
    
//     // Replace original slides with track
//     while (carousel.firstChild) {
//         carousel.removeChild(carousel.firstChild);
//     }
//     carousel.appendChild(track);
    
//     // Add navigation dots
//     const navDots = document.createElement('div');
//     navDots.className = 'carousel-nav';
    
//     for (let i = 0; i < slideCount; i++) {
//         const dot = document.createElement('span');
//         dot.className = 'nav-dot';
//         if (i === 0) dot.classList.add('active');
//         dot.addEventListener('click', () => goToSlide(i));
//         navDots.appendChild(dot);
//     }
    
//     // Add navigation buttons
//     const prevBtn = document.createElement('button');
//     prevBtn.className = 'carousel-btn prev-btn';
//     prevBtn.innerHTML = '❮';
//     prevBtn.addEventListener('click', prevSlide);
    
//     const nextBtn = document.createElement('button');
//     nextBtn.className = 'carousel-btn next-btn';
//     nextBtn.innerHTML = '❯';
//     nextBtn.addEventListener('click', nextSlide);
    
//     // Insert navigation elements
//     carousel.appendChild(prevBtn);
//     carousel.appendChild(nextBtn);
//     carousel.parentNode.insertBefore(navDots, continueBtn);
    
//     // Update carousel display
//     function updateCarousel() {
//         const translateX = -currentIndex * slideWidth;
//         track.style.transform = `translateX(${translateX}px)`;
        
//         // Update active dots
//         document.querySelectorAll('.nav-dot').forEach((dot, index) => {
//             dot.classList.toggle('active', index === currentIndex);
//         });
        
//         // Update active slide
//         slides.forEach((slide, index) => {
//             slide.classList.toggle('active', index === currentIndex);
//         });
//     }
    
//     function nextSlide() {
//         if (currentIndex < slideCount - 1) {
//             currentIndex++;
//         } else {
//             currentIndex = 0;
//         }
//         updateCarousel();
//     }
    
//     function prevSlide() {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = slideCount - 1;
//         }
//         updateCarousel();
//     }
    
//     function goToSlide(index) {
//         currentIndex = index;
//         updateCarousel();
//     }
    
//     // Auto-advance carousel
//     setInterval(nextSlide, 4000);
    
//     // Initial update
//     updateCarousel();
    
//     // Add continue button functionality
//     continueBtn.addEventListener('click', function() {
//         alert('Continuing to registration...');
//         // Add your registration page navigation here
//     });
// }
