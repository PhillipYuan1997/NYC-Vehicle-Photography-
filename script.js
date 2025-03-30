document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#portfolio .slideshow-container .slide');
  let currentIndex = 0;

  function showSlide(index) {
    // Remove the active class from the current slide
    slides[currentIndex].classList.remove('active-slide');
    // Calculate the new index, wrapping around if needed
    currentIndex = (index + slides.length) % slides.length;
    // Add active class to the new slide
    slides[currentIndex].classList.add('active-slide');
  }

  function showNextSlide() {
    showSlide(currentIndex + 1);
  }

  function showPrevSlide() {
    showSlide(currentIndex - 1);
  }

  // Set up automatic slide transition every 5 seconds
  const autoSlideInterval = setInterval(showNextSlide, 5000);

  // Add click event listeners for manual navigation
  document.querySelector('#portfolio .slideshow-container .next').addEventListener('click', () => {
    showNextSlide();
    // Optionally reset the auto-slide timer here if needed
  });
  document.querySelector('#portfolio .slideshow-container .prev').addEventListener('click', () => {
    showPrevSlide();
    // Optionally reset the auto-slide timer here if needed
  });
});
