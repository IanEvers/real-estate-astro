

const navBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});
