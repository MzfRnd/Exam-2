const aboutCircle = document.getElementById("aboutCircle");
const aboutA = document.getElementById("aboutA");
const projectCircle = document.getElementById("projectCircle");
const projectA = document.getElementById("projectA");
const newsCircle = document.getElementById("newsCircle");
const newsA = document.getElementById("newsA");
const contactCircle = document.getElementById("contactCircle");
const contactA = document.getElementById("contactA");

aboutA.addEventListener("mouseover", fillBackground1);
aboutA.addEventListener("mouseout", emptyBackground1);
projectA.addEventListener("mouseover", fillBackground2);
projectA.addEventListener("mouseout", emptyBackground2);
newsA.addEventListener("mouseover", fillBackground3);
newsA.addEventListener("mouseout", emptyBackground3);
contactA.addEventListener("mouseover", fillBackground4);
contactA.addEventListener("mouseout", emptyBackground4);

function fillBackground1() {
  aboutCircle.classList.add("white-backround");
}
function emptyBackground1() {
  aboutCircle.classList.remove("white-backround");
}
function fillBackground2() {
  projectCircle.classList.add("white-backround");
}
function emptyBackground2() {
  projectCircle.classList.remove("white-backround");
}
function fillBackground3() {
  newsCircle.classList.add("white-backround");
}
function emptyBackground3() {
  newsCircle.classList.remove("white-backround");
}
function fillBackground4() {
  contactCircle.classList.add("white-backround");
}
function emptyBackground4() {
  contactCircle.classList.remove("white-backround");
}

$(document).ready(() => {
  $(".title__slider--container").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    dotsClass: "vertical-dots",
  });
});

$(document).ready(() => {
  $(".second-section__card-container").slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img class='card__arrow-img slick-prev' src='./assets/img/Left-arrow.svg'>",
    nextArrow:
      "<img class='card__arrow-img slick-next' src='./assets/img/Right-arrow.svg'>",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
