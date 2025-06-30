// Variables
const btnIniciar = document.querySelector('.iniciar');
const btnParar = document.querySelector('.parar');
let minutos = document.querySelector('.display__minutos');
let segundos = document.querySelector('.display__segundos');
let contadorMinutos = 0;
let contadorSegundos = 0;

// Eventos btn Iniciar - Parar
btnIniciar.addEventListener('click', inicioCronometro);
btnParar.addEventListener('click', detenerCronometro);
let tiempo = false;

// Funciones
function inicioCronometro() {
  if (!tiempo) {
    tiempo = setInterval(() => {
      contadorSegundos++;

      if (contadorSegundos == 60) {
        contadorMinutos++;
        contadorSegundos = 0;
      }
      if (contadorMinutos == 60) {
        clearInterval(tiempo);
      }
      contadorSegundos < 10
        ? (segundos.textContent = `0${contadorSegundos}`)
        : (segundos.textContent = contadorSegundos);
      contadorMinutos < 10
        ? (minutos.textContent = `0${contadorMinutos}`)
        : (minutos.textContent = contadorMinutos);
    }, 1000);
  }
}

function detenerCronometro() {
  clearInterval(tiempo);
  tiempo = false;
}
