const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.menu-bars');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

closeMenu.addEventListener('click', () => {
  document.querySelector('mobile-menu').classList.remove('show');
});

openMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('show');
});

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('show');
  });
});