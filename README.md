# Pali e dispari

<h2>Palidroma</h2>

1. Chiediamo all'utente di inserire una parola attraverso un prompt e salviamo questa parola nella variabile chiamata `parola`.
2. Creo una funzione a cui passo a parametro la mia parola che controlla se la prima lettera della prima parola equivale all'ultima lettera della parola. Mi fermo quando arrivo alla lunghezza della parola / 2 (cioè a metà parola). Se sono tutte uguali restituisco `true` viceversa restituisco `false`.

<h2>Pari e Dispari<h2>

1. Chiediamo all'utente di scegliere tra pari e dispari e salvo la scelta in una variabile chiamata `scelta`. Gli chiedo poi di inserire un numero da 1 a 5 e salvo questo numero nella variabile chiamata `numero`.
2. Creo una funzione che non prende niente a parametro e genera tramite le funzioni `Math.floor(Math.random)` un numero casuale tra 1 e 5 per il computer. Salvo il tutto in una variabile chiamata `numeroPC`.
3. Sommo `numero` (il numero scelto dall'utente) e `numeroPC` (il numero generato casualmente per il PC) e salvo la somma in una variabile chiamata `somma`.
4. Passo questa somma ad una funzione che ritorna "pari" in caso la somma sia pari, viceversa ritorni "dispari". Se l'output di questa funzione è uguale a `scelta` ha vinto l'utente. Viceversa ha vinto il computer.
