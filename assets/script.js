const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// PLACEMENT  DES FLECHES

const leftArrowContainer = document.createElement("div");
leftArrowContainer.classList.add("arrow_left", "arrow");
leftArrowContainer.dataset.slideOffset = "prev";
leftArrowContainer.style.width = "47px";
leftArrowContainer.style.height = "79px";
leftArrowContainer.style.background = 'url("./assets/images/arrow_left.png")';
document.querySelector("#banner").append(leftArrowContainer);

const rightArrowContainer = document.createElement("div");
rightArrowContainer.classList.add("arrow_right", "arrow");
rightArrowContainer.dataset.slideOffset = "next";
rightArrowContainer.style.width = "47px";
rightArrowContainer.style.height = "79px";
rightArrowContainer.style.background = 'url("./assets/images/arrow_right.png")';
document.querySelector("#banner").append(rightArrowContainer);

let index = 0;
const arrows = document.querySelectorAll(".arrow");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const offset = arrow.dataset.slideOffset === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

// AJOUT DES DOTS

let numberOfDot = slides.length;
function addDots() {
  for (let i = 0; i < numberOfDot; i++) {
    let newDot = document.createElement("div");
    newDot.onclick = () => {
      index = i;
      imgSrc.setAttribute(
        "src",
        `./assets/images/slideshow/${slides[index].image}`
      );
      imgTxt.innerHTML = slides[index].tagLine;
      bulletPointClassChange();
    };
    newDot.className = "dot";
    document.querySelector(".dots").appendChild(newDot);
  }
}
addDots();
document.querySelector(".dot").classList.add("dot_selected");

const imgSrc = document.querySelector("#banner img");
const imgTxt = document.querySelector("#banner p");
let bulletPoints = document.querySelectorAll(".dot");

function changeSlide(n) {
  index += n;
  index >= slides.length
    ? (index = 0)
    : index < 0
    ? (index = slides.length - 1)
    : index;

  imgSrc.setAttribute(
    "src",
    `./assets/images/slideshow/${slides[index].image}`
  );
  imgTxt.innerHTML = slides[index].tagLine;
  bulletPointClassChange();
}

// AJOUT DE LA CLASSE DOT SELECTED SI L'INDEX EST === ID DU BULLETPOINT
function bulletPointClassChange() {
  bulletPoints.forEach((bulletPoint, id) => {
    if (index === id) {
      bulletPoint.classList.add("dot_selected");
    } else {
      bulletPoint.classList.remove("dot_selected");
    }
  });
}
