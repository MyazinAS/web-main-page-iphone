const btn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});
