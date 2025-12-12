const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const colorBtn = document.getElementById('colorBtn');
const hero = document.querySelector('.hero');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


colorBtn.addEventListener('click', () => {
    hero.classList.toggle('red');
});
