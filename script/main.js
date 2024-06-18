const botonAbrir = document.getElementById('boton-abrir');
const botonCerrar = document.getElementById('boton-cerrar');
const menu = document.getElementById('menu')
botonAbrir.addEventListener('click', () => {
    menu.classList.remove('hidden')
    menu.classList.remove('translate-x-full');



})
botonCerrar.addEventListener('click', () => {
    menu.classList.add('hidden')
    menu.classList.add('translate-x-full');



})
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
    const [swiper, time, progress] = e.detail;
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});