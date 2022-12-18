const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

let curSlide = 0;
let maxSlide = slides.length - 1; 

console.log(nextSlide, prevSlide)

nextSlide.addEventListener("click", function () {

  console.log('1');

    if (curSlide === maxSlide) curSlide = 0;
        else curSlide++;

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

prevSlide.addEventListener("click", function () {

  console.log('2');

    if (curSlide === 0) curSlide = maxSlide;
        else curSlide--;

    slides.forEach((slide, indx) => { 
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});