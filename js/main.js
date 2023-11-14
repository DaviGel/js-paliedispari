'use strict';

// Variables

const parola = prompt('Inserisci una parola:');

// Functions

function palindroma(parola) {
  let wordlength = parola.length - 1;
  for (let i = 0; wordlength / 2; i++) {
    if (parola[i] !== parola[wordlength]) {
      return false;
    }
    wordlength--;
  }
  return true;
}

// Code

if (palindroma(parola) === true) {
  console.log(`La parola "${parola}" è palindroma!`);
} else {
  console.log(`La parola "${parola}" non è palindroma`);
}
