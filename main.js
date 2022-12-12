// console.log("js ok");
/*
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
/*
1.prendere l'elemento nel dom
2.generare un numero random con math random sia per il cpu sia per user
3. validare con if
4.stampare con inner.html
*/
const dado = document.getElementById("dado");
// console.log(dado);

let random = Math.random();
// console.log(random);
const max = 6;

const cpu = Math.floor(random * max) + 1;
console.log("numero cpu = " + cpu);
