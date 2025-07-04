const arrowM = document.getElementById("arrowM");
const imgM = document.getElementById("imgM");
const arrowTa = document.getElementById("arrowTa");
const imgTa = document.getElementById("imgTa");

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