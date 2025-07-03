const arrowM = document.getElementById("arrowM");
const imgM = document.getElementById("imgM");

let imgNumber = 1;

function imgChange(button, image, sectionName) {
  button.addEventListener("click", () => {
    imgNumber += 1;
    if (imgNumber === 4) {
      imgNumber = 1;
    }
    image.setAttribute("src", `./img/${sectionName}${imgNumber}.png`);
  })
}

// let imgNumber = 1;

// function imgChange(button, image, sectionName) {
//   button.addEventListener("click", () => {
//     imgNumber = imgNumber + 1 % 3;
//     image.setAttribute("src", `./img/${sectionName}${imgNumber}.png`);
//   })
// }

imgChange(arrowM, imgM, "micropieux");