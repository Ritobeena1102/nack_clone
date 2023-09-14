// Select all slides
const slides = document.querySelectorAll(".slide");

// Initial setup: Set each slide's translateX property based on its index.
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

// Current slide tracker
let curSlide = 0;

// Helper function to move slides based on curSlide
const moveSlides = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
};

// Select control buttons
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

// Event listener for next slide
nextSlide.addEventListener("click", function () {
  if (curSlide === slides.length - 1) {
    curSlide = 0; // If it's the last slide, reset to the first slide.
  } else {
    curSlide++;
  }
  moveSlides();
});

// Event listener for previous slide
prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = slides.length - 1; // If it's the first slide, move to the last slide.
  } else {
    curSlide--;
  }
  moveSlides();
});

// Automatically move to the next slide every 3 seconds
setInterval(() => {
  if (curSlide === slides.length - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  moveSlides();
}, 3000);  // 3000ms = 3 seconds
