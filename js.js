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

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("navigation__link"))
      navlistEl.classList.toggle("show");
    hamburger1El.classList.toggle("show");
    hamburger2El.classList.toggle("show");
    hamburger3El.classList.toggle("show");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const headerheroEl = document.querySelector(".header__img-box");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector("nav").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector("nav").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(headerheroEl);
