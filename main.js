let menuButton = document.querySelector('.menu-button');
let links = document.querySelector('.links');

menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('active');
    links.classList.toggle('active');
})