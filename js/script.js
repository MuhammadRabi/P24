// mobile nav

let menuToggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
