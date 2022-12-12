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
let result = document.getElementById("result");
let text = "";
let cpuresult = document.getElementById("cpuresult");
let userresult = document.getElementById("userresult");

// console.log(dado);

let randomcpu = Math.random();
let randomuser = Math.random();
// console.log(random);
const max = 6;

let cpu = Math.floor(randomcpu * max) + 1;
// console.log("numero cpu = " + cpu);

let user = Math.floor(randomuser * max) + 1;
// console.log("numero user = " + user);

if (cpu > user) {
  text = "il vincitore è cpu";
  //   console.log(text);
} else if (user > cpu) {
  text = "il vincitore è user";
  //   console.log(text);
} else if (user == cpu) {
  text = "pareggio";
  //   console.log(text);
}
cpuresult.innerHTML = "il numero della cpu è = " + cpu;
userresult.innerHTML = "il numero dell' user è = " + user;
result.innerHTML = text;

/*
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:avviso: NOTE:
è vietato utilizzare il metodo includes()
La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
L'esito del controllo deve essere stampato in pagina
 */

/*
1.crerare elementi nel dom un form e una p dove ci sarà
 la scritta se l'utente può entrare o meno
2. mettere elemnti del dom sullo script
3.inventa una lista di email con array
4. crea un form con input
5. creare un bottone e fare un add event listener
6. controlla se può accedere
7.stampa il messaggio


*/

const button = document.getElementById("btn");
// console.log(textemail, input);

btn.addEventListener("click", function () {
  let input = document.getElementById("input");
  console.log(input.value);

  let textemail = document.getElementById("textemail");
  const emails = [
    "leonardocontino@gmail.com",
    "lello@gmail.com",
    "conti@gmail.com",
  ];
  //   console.log(emails);
  for (let i = 0; i < emails.length; i++)
    if (input.value !== i) {
      textemail = "l'email non corrisponde";
      console.log(textemail);
    } else {
      textemail = "benvenuto";
      console.log(textemail);
    }
});
