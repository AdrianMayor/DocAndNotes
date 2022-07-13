'use strict';

// Seleccionar los elementos del html que nos hacen falta
const reloj = document.querySelector('h1#reloj');
const buttonStart = document.querySelector('button#start');
const buttonStop = document.querySelector('button#stop');
const buttonReset = document.querySelector('button#reset');

// Un contador para llevar el tiempo
let contador = 0;

// Creamos la variable que guardará el intervalo
let intervalo;

// Funcion para actualizar el cronómetro
function updateClock() {
  // Calculamos los segundos
  const seconds = contador % 60;

  // Los minutos son cada 60 segundos (del contador)
  // Como ya guardamos el resto de dividir el contador entre 60 (1 minuto)
  // redondeamos los minutos
  const minutes = Math.floor(contador / 60);

  // Añadimos un 0 delante de los minutos o segundos si son menores de 10
  const secondsFormatted = seconds < 10 ? `0${seconds}` : seconds;
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

  // Actualizamos el reloj en el dom
  reloj.textContent = `${minutesFormatted}:${secondsFormatted}`;

  // Guardamos el contador en el localStorage
  saveTime();
}

// Funciones manejadoras de los eventos de click sobre los botones

// Funcion sobre evento click en buttonStart
function handleClickStart() {
  // Antes limpiamos el intervalo
  clearInterval(intervalo);

  // Iniciamos el intervalo
  intervalo = setInterval(() => {
    contador++;
    updateClock();
  }, 1000);
}

// Funcion sobre evento click en buttonStop
function handleClickStop() {
  // Paramos el intervalo
  clearInterval(intervalo);
}

// Funcion sobre evento click en buttonReset
function handleClickReset() {
  // Paramos el intervalo
  clearInterval(intervalo);

  // Poner el contador a 0
  contador = 0;

  // Actualizar el reloj
  updateClock();
}

// Asignamos a los botones las funciones manejadoras
buttonStart.addEventListener('click', handleClickStart);
buttonStop.addEventListener('click', handleClickStop);
buttonReset.addEventListener('click', handleClickReset);

////////////
// A mayores

function saveTime() {
  localStorage.setItem('time', contador);
}

window.addEventListener('beforeunload', saveTime);

// Guardamos el tiempo en una variable
const savedTime = localStorage.getItem('time');

if (savedTime) {
  contador = savedTime;
  updateClock();
}
