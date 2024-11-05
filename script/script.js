/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

const text = prompt("scrivi una parola");
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
} 
   


