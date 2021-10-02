// mobile nav

let menuToggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// scroll to top

let scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  let windowHeight = window.pageYOffset;
  windowHeight > 800
    ? scrollToTop.classList.add("active")
    : scrollToTop.classList.remove("active");
}

scrollToTop.addEventListener("click", ScrollTop);

function ScrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// scroll to section functionality

let navLi = document.querySelectorAll("nav ul li a");

function scrolltoSection(section) {
  section.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault;
      section.forEach((a) => {
        a.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      let clickedSec = document.querySelector(e.target.dataset.nav).offsetTop;
      window.scrollTo({
        top: clickedSec,
        behavior: "smooth",
      });
    });
  });
}

scrolltoSection(navLi);
