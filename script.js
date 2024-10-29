const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

// Initial call to set the background of the body
setBgToBody();

// Event listeners for the left and right arrow buttons
leftBtn.addEventListener("click", () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1; // Wrap around to the last slide
    }
    setBgToBody();
    setActiveSlide();
});

rightBtn.addEventListener("click", () => {
    activeSlide++;
    if (activeSlide >= slides.length) {
        activeSlide = 0; // Wrap around to the first slide
    }
    setBgToBody();
    setActiveSlide();
});

// Function to set the background image of the body based on the active slide
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Function to update the active slide class
function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[activeSlide].classList.add("active");
}
