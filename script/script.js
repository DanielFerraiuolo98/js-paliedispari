/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

/*const text = prompt("scrivi una parola");
const reversedText = parolaPalindroma(text);

if(text.toLowerCase = reversedText.toLowerCase()){
    console.log("la parola è palindroma");
}
else{
    console.log("la parola non è palindroma");
}

console.log(reversedText);

function parolaPalindroma(parola) {
    let palindroma = "";

    for (let i = text.length -1; i >= 0; i--){
        palindroma = palindroma + parola[i];
    }
    return palindroma;
} */


    /*Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.*/

    const userChoice = prompt("scegli pari o dispari");
    const numUser = parseInt(prompt("inserisci un numero da 1 a 5")); 
    console.log(numUser);
    const numPc = generaNumeroRandom(1,5);
    const somma = numPc + numUser;
    const pariDispari = pariODispari(somma);
    console.log(pariDispari);

    if(pariDispari === userChoice){
        console.log("hai vinto");
    }
    else{
        console.log("hai perso");
    }

    function generaNumeroRandom(min, max){
        const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(numeroRandom);
    }
   
    function pariODispari(num){
        if(num % 2 === 0){
            return "pari"
        }
        else{
            return "dispari"
        }
    }


