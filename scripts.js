const menu = document.getElementById("menu");
const links = document.querySelector(".menu-links");

function toggleMenu() {
  links.classList.toggle("hidden");
  menu.src = links.classList.contains("hidden") ? "images/menu.svg" : "images/close.svg";
}