// Slideshow Functionality
let slides = document.querySelectorAll('.slide');
let slideIndex = 0;

// Show the first slide initially
slides[slideIndex].classList.add('active-slide');

// Function to move to the next slide
function nextSlide() {
  slides[slideIndex].classList.remove('active-slide');
  slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide
  slides[slideIndex].classList.add('active-slide');
}

// Function to move to the previous slide
function prevSlide() {
  slides[slideIndex].classList.remove('active-slide');
  slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop to the last slide
  slides[slideIndex].classList.add('active-slide');
}

// Automatically switch to the next slide every 3 seconds (optional, can be removed)
setInterval(nextSlide, 3000);

// Add event listeners for manual slide controls
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
