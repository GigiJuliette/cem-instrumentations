
// window.addEventListener("resize", () => {
particlesJS.load('particles-js', './js/config.json');
// });

console.log("With love for my lovely dad");

const obsFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("xx");
    }
  });
}, {
  root: null,
  rootMargin: "-15% 0px",
  threshold: 0
});
const fadeElement = document.querySelectorAll(".anim");

fadeElement.forEach((el) => obsFade.observe(el));

// bellow; image swap "Notre metier"

const arrowM = document.getElementById("arrowM");
const imgM = document.getElementById("imgM");
const arrowTa = document.getElementById("arrowTa");
const imgTa = document.getElementById("imgTa");
const arrowCl = document.getElementById("arrowCl");
const imgCl = document.getElementById("imgCl");

let imgNumber = 1;

function imgChange(button, image, sectionName, format) {
  button.addEventListener("click", () => {
    imgNumber += 1;
    if (imgNumber === 4) {
      imgNumber = 1;
    }
    image.setAttribute("src", `./img/${sectionName}${imgNumber}.${format}`);
  })
}

imgChange(arrowM, imgM, "micropieux", "png");
imgChange(arrowTa, imgTa, "ta", "jpg");
imgChange(arrowCl, imgCl, "cl", "jpg");
imgChange(arrowEs, imgEs, "es", "jpg");