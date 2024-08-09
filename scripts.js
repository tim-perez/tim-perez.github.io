const menu = document.getElementById('menu');
const menuItems = document.querySelector('.menu-links');

function toggleMenu() {
  menuItems.classList.toggle('hidden');
  menu.src = menuItems.classList.contains('hidden') ? 'images/menu.svg' : 'images/close.svg';
}