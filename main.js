//Selectors 
let header = document.querySelecors('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', funtion () {
 let windowPosition = window.scrolly > 0;
 header.classList.toggle('active', windowPosition)
 })
 
 hamburgerMenu.addEventListener('click', function () {
   header.classlist.toggle('menu-open');
})