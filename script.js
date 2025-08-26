const headerFone = document.getElementById("header-fone-id");
const burger = document.getElementById("header__image-links");
const menu = document.getElementById("mobile-menu");
const cross = document.getElementById("mobile-menu__cross-img-id");

burger.addEventListener("click", () => {
  headerFone.style.display = "none";
  headerFone.style.opacity = "0";
  menu.style.display = "block";
  menu.style.opacity = "1";
  cross.style.display = "block";
});

cross.addEventListener("click", () => {
  headerFone.style.display = "block";
  headerFone.style.opacity = "1";
  menu.style.display = "none";
  menu.style.opacity = "0";
  cross.style.display = "none";
});
