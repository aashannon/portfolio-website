const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('show');
});