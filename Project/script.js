// Updating Year automatically
var year = document.querySelector(".year");
const current_year = new Date().getFullYear();
year.textContent = current_year;

// Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// console.log(btnNavEl);
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//
// sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
