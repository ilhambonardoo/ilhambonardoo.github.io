const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("header");
let lastScrollY = 3020;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
  } else {
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
  }
  navMenu.classList.toggle("hidden");
});

document.addEventListener("scroll", function () {
  const currentScrollY = window.scrollY;
  console.log(currentScrollY);
  if (currentScrollY > lastScrollY) {
    header.classList.remove("fixed");
  } else {
    header.classList.add("fixed");
  }
});
