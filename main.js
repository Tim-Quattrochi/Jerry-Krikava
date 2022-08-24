const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const nextItem = document.querySelector("#next");
const previousItem = document.querySelector("#previous");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";


const rightArrow = (e) => {
  console.log(e)
  if (counter >= carouselImages.length - 1) return
  if (e.key === "ArrowRight") {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    console.log(counter)
  }
}

carouselSlide.addEventListener("keydown", rightArrow)


const leftArrow = (e) => {
  if (counter >= carouselImages.length - 1) return
  if (e.key === "ArrowLeft") {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    console.log(counter)
  }
}


carouselSlide.addEventListener("keydown", leftArrow)


nextItem.addEventListener("click", (e) => {

  if (counter >= carouselImages.length - 1) return
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  console.log(counter)
});


previousItem.addEventListener("click", () => {
  if (counter <= 0) return

  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  console.log(counter)
});

carouselSlide.addEventListener("transitionend", () => {
  console.log(carouselImages[counter])
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none"
    counter = carouselImages.length - 2
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    console.log("fired")

  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none"
    counter = carouselImages.length - counter
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
})


