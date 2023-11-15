'use strict';

// Variables

let scelta = '';
let numero = 0;
let numeroPC = 0;
let somma = 0;

// Functions

function randomicNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evenOdd(somma) {
  if (somma % 2 === 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
}

// Program

while (scelta !== 'pari' && scelta !== 'dispari') {
  scelta = prompt(
    `Scegli tra pari o dispari. Se scrivi altro continuerò a chiederti di scegliere finché non scriverai "pari" o "dispari"`
  );
}

while (numero < 1 || numero > 5 || isNaN(numero)) {
  numero = Number(
    prompt(
      'Scegli un numero tra 1 e 5 compresi. Se scegli un numero minore di 1 o maggiore di 5 o un carattere che non sia un numero continuerò a chiederti di scegliere un numero finché non ne scriverai uno come da richiesta'
    )
  );
}

numeroPC = randomicNumber(1, 5);
somma = numero + numeroPC;

console.log(
  `L'utente ha scelto ${scelta}. Il numero scelto dall'utente è ${numero}. Quello scelto dal PC è ${numeroPC}. La somma tra i due numeri è ${somma}`
);

if (evenOdd(somma) === scelta) {
  console.log(`L'utente ha vinto!`);
} else {
  console.log('Ha vinto il computer.');
}
