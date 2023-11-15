'use strict';

// Variables

let parola = prompt('Inserisci una parola o una frase:');
let stringaTemp = '';

// Functions

function palindroma(parola) {
  let wordlength = parola.length - 1;
  for (let i = 0; i < wordlength / 2; i++) {
    if (parola[i] !== parola[wordlength]) {
      return false;
    }
    wordlength--;
  }
  return true;
}

// Code

// Rimuovo tutti gli spazi all'interno della stringa
stringaTemp = parola.replaceAll(' ', '');

if (palindroma(stringaTemp) === true) {
  console.log(`La parola o frase "${parola}" è palindroma!`);
} else {
  console.log(`La parola o frase "${parola}" non è palindroma`);
}
