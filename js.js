const navbtnEl = document.querySelector(".nav-button");

const navlistEl = document.querySelector(".navigation__list");
const hamburger1El = document.querySelector(".hamburger-line__1");
const hamburger2El = document.querySelector(".hamburger-line__2");
const hamburger3El = document.querySelector(".hamburger-line__3");

navbtnEl.addEventListener("click", function () {
  navlistEl.classList.toggle("show");
  hamburger1El.classList.toggle("show");
  hamburger2El.classList.toggle("show");
  hamburger3El.classList.toggle("show");
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;





