'use strict';

// Variables

let parola = prompt('Inserisci una parola o una frase:');
let stringaTemp = '';

// Functions

function palindroma(parola) {
  if (parola.length === 0) {
    return false;
  } else {
    // let wordlength = parola.length - 1;
    // for (let i = 0; i < parola.length / 2; i++) {
    //   if (parola[i] !== parola[wordlength]) {
    //     return false;
    //   }
    //   wordlength--;
    // }
    // return true;
    let i = 0;
    let j = parola.length - 1;
    while (i < j) {
      if (parola[i] !== parola[j]) {
        return false;
      } else {
        i++;
        j--;
      }
    }
    return true;
  }
}

// Code

// Rimuovo tutti gli spazi all'interno della stringa
stringaTemp = parola.replaceAll(' ', '');
// Converto tutti i caratteri della stringa in minuscolo
stringaTemp = stringaTemp.toLowerCase();

if (palindroma(stringaTemp) === true) {
  console.log(`La parola o frase "${parola}" è palindroma!`);
} else {
  console.log(`La parola o frase "${parola}" non è palindroma`);
}
