const abrir = document.querySelector('.nav-btn');
const fechar = document.querySelector('.fecharBtn');
const menuMobile = document.querySelector('.menu-mobile');

abrir.addEventListener('click', abrindoMenu);

function abrindoMenu(){
    menuMobile.style.width = '70%';
    abrir.style.display = 'none';
}

fechar.addEventListener('click', fechandoMenu);

function fechandoMenu(){
    menuMobile.style.width = '0';
    abrir.style.display = 'block';
}