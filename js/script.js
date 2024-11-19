const parola = prompt("inserisci una parola");
function checkparola(utenteparola) {
    if (utenteparola.split("").reverse().join("") === parola ) {
        console.log("La parola è palindroma");
    } else {
        console.log("La parola non è palindroma");
    }  
} checkparola(parola);                                  