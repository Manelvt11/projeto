window.alert('Olá, espero que goste dos meus projetos!');

const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});
