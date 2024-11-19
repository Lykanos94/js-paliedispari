const parola = prompt("inserisci una parola");
function checkparola(utenteparola) {
    if (utenteparola.split("").reverse().join("") === parola ) {
        console.log("La parola è palindroma");
    } else {
        console.log("La parola non è palindroma");
    }  
} checkparola(parola);



// pari e dispari

let sceltautente = prompt ("Chi vuoi che vinca pari o dispari?");
let numero = prompt ("inserisci numero");
let cpu = Math.floor((Math.random() * 5) + 1);
function checknum (numero , cpu) {
    const somma = numero + cpu;
    console.log("questo è il numero dell'utente" + numero);
    console.log("questo è il numero della cpu" + cpu);
    if (sceltautente === "pari") {
        if (somma % 2 === 0) {
            console.log("Utente vince");
        } else {
            console.log("cpu vince");
        }
        
    } else if (sceltautente === "dispari") {
        if (somma % 2 !== 0) {
            console.log("utente vince");
        } else {
            console.log("cpu vince");
        }
    }
        
} checknum(numero, cpu);