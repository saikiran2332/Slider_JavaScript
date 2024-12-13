// let counter = 1;
// setInterval(function () {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if (counter > 4) {
//         counter = 1;
//     }
// }, 5000); // Change slide every 5 seconds



const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds