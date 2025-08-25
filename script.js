const headerFone = document.querySelector(".header-fone");
const burger = document.querySelector("#header__image-links");
const menu = document.querySelector("#mobile-menu");
const cross = document.querySelector(".mobile-menu__cross-img");

burger.addEventListener("click", () => {
  headerFone.style.block = "none";
  headerFone.style.opacity = "0";
  menu.style.display = "block";
  menu.style.opacity = "1";
});

cross.addEventListener("click", () => {
  headerFone.style.display = "block";
  headerFone.style.opacity = "1";
  menu.style.display = "none";
  menu.style.opacity = "0";
});
