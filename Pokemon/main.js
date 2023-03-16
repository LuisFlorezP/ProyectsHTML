let opciones = [
    {
        opcion: "Img/1.webp"
    },
    {
        opcion: "Img/2.png"
    },
    {
        opcion: "Img/3.png"
    },
    {
        opcion: "Img/4.png"
    },
    {
        opcion: "Img/5.png"
    },
    {
        opcion: "Img/6.webp"
    },
    {
        opcion: "Img/7.webp"
    },
    {
        opcion: "Img/8.png"
    },
    {
        opcion: "Img/9.png"
    },
    {
        opcion: "Img/10.png"
    }
];

const btnAzar1 = document.querySelector('#btnAzar1');
const btnAzar2 = document.querySelector('#btnAzar2');
const espacio1 = document.querySelector('#espacio1');
const espacio2 = document.querySelector('#espacio2');
const refrescar1 = document.querySelector('#refrescar1');
const refrescar2 = document.querySelector('#refrescar2');

const eleccionUno = () => {
    espacio1.classList.remove('ranuras');
    espacio1.classList.add('ranuras2');

    const carta = document.querySelector('#carta1');
    carta.classList.add('carta');

    const img = document.querySelector('#pokemon1');
    const azar = Math.round(Math.random()*10);
    img.src = opciones[azar].opcion;
}

const eleccionDos = () => {
    espacio2.classList.remove('ranuras');
    espacio2.classList.add('ranuras2');

    const carta = document.querySelector('#carta2');
    carta.classList.add('carta');

    const img = document.querySelector('#pokemon2');
    const azar = Math.round(Math.random()*10);
    img.src = opciones[azar].opcion;
}

const reinicio1 = () => {
    espacio1.classList.remove('ranuras2');
    espacio1.classList.add('ranuras');

    const carta = document.querySelector('#carta1');
    carta.classList.remove('carta');

    const img = document.querySelector('#pokemon1');
    img.src = "";
}

const reinicio2 = () => {
    espacio2.classList.remove('ranuras2');
    espacio2.classList.add('ranuras');

    const carta = document.querySelector('#carta2');
    carta.classList.remove('carta');

    const img = document.querySelector('#pokemon2');
    img.src = "";
}

btnAzar1.addEventListener('click',eleccionUno);
btnAzar2.addEventListener('click',eleccionDos);
refrescar1.addEventListener('click',reinicio1)
refrescar2.addEventListener('click',reinicio2)