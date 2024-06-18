const botonAbrir = document.getElementById('boton-abrir');
const botonCerrar = document.getElementById('boton-cerrar');
const menu = document.getElementById('menu')
botonAbrir.addEventListener('click', () => {
    menu.classList.remove('hidden')




})
botonCerrar.addEventListener('click', () => {
    menu.classList.add('hidden')




})