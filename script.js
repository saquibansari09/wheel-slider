//grab elements
const buttons = document.querySelectorAll("button");
const sliderContainer = document.querySelector(".container");
const slides = document.querySelectorAll(".wheel-image-ctn");
const firstSlide = slides[0];

//global vars
let activeSliderIndex = 0;
const maxSlideIndex = slides.length - 1;

//register listeners
buttons.forEach((b) => b.addEventListener("click", handleNavigation));

//handlers
function handleNavigation(e) {
  removeActiveSlide();

  const element = e.target;
  if (element.className === "nex") {
    goNext();
  } else {
    goBack();
  }

  activateSlide();
}

function goNext(e) {
  if (activeSliderIndex === maxSlideIndex) {
    return;
  }
  sliderContainer.scrollTo({
    left: sliderContainer.scrollLeft + firstSlide.clientWidth,
    behavior: "smooth",
  });
  activeSliderIndex++;
}

function goBack(e) {
  if (activeSliderIndex === 0) {
    return;
  }

  sliderContainer.scrollTo({
    left: sliderContainer.scrollLeft - firstSlide.clientWidth,
    behavior: "smooth",
  });
  activeSliderIndex--;
}

function activateSlide() {
  slides[activeSliderIndex].classList.add("active");
}

function removeActiveSlide() {
  slides[activeSliderIndex].classList.remove("active");
}

//make first slide active when loaded.
activateSlide();
