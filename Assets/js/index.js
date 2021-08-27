/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// /*==================== MENU SHOW Y HIDDEN ====================*/
// const navMenu = document.getElementById("rnav-menu"),
//   toggleMenu = document.getElementById("nav-toggle"),
//   closeMenu = document.getElementById("nav-close");

// /*-=- SHOW -=-*/
// toggleMenu.addEventListener("click", () => {
//   navMenu.classList.toggle("show");
// });

// /*-=- HIDDEN -=-*/
// closeMenu.addEventListener("click", () => {
//   navMenu.classList.remove("show");
// });

/* -=-=-=- ACTIVE AND REMOVE MENU -=-=-=-*/
// const navLink = document.getElementById("nav__l");

// function linkAction() {
//   // ACTIVE LINK
//   navLink.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");

//   // REMOVE MENU MOBILE
//   navMenu.classList.remove("show");
// }

// navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SLIDER====================*/
// variables
const thumbnails = document.getElementsByClassName("s__card");
const slider = document.getElementById("slider");
// let buttonRight = document.getElementById("slide-right");
// let buttonLeft = document.getElementById("slide-left");

// // scrolls thumbnail element to the left by 125px
// buttonLeft.addEventListener("click", () => {
//     slider.scrollLeft -= 125;
// });

// // scrolls thumbnail element to the right by 125px
// buttonRight.addEventListener("click", () => {
//     slider.scrollLeft += 125;
// });

//function calculates maximum width of the slider container

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

//AutoPlay Slider
function autoPlay() {
  if (slider.scrollLeft > maxScrollLeft - 1) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 40);

//pauses slider when child element is hovered

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });

  thumbnails[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoPlay, 30));
  });
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(`.hero__info, .b__info, .about__info, #s-s, .main__form`, {
  interval: 200,
});

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);
