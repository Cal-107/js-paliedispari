// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Richiesta all'utente di scegliere pari o dispari ed un numero da 1 a 5
let userChoise = prompt('Scelga pari o dispari');
console.log(`Il giocatore ha scelto ${userChoise} `)

while (userChoise !== 'pari' && userChoise !== 'dispari') {
    alert('Può scrivere solo pari o dispari');
    userChoise = prompt('Scelga pari o dispari');
}

let usNum = parseInt( (prompt( 'Scelga un numero da 1 a 5') ))
console.log(`Il numero scelto dal giocatore è ${usNum}`);

while (usNum > 5 || usNum < 1 || isNaN(usNum)) {
    alert('Può scegliere solo numeri da 1 a 5');
    usNum = prompt('Scelga un numero da 1 a 5');
}

// Generiamo un numero random per il computer 
// Evocazione di funzione
let numComp = randomNumber(1, 5);
console.log(`Il numero del computer è ${numComp}`);

//Somma dei numeri 
let somma = numComp + usNum;
console.log(`La somma tra il numero del computer e del numero del giocatore di  è ${somma}`);


// Check se la somma è pari o dispari e dichiarare il vincitore
if ((userChoise == 'pari' && oddEven(somma) == true) || (userChoise == 'dispari' && oddEven(somma) == false)) {
    console.log('Il giocatore ha vinto');
}  else {
    console.log('Il computer ha vinto');
}




// Funzioni 

// Numeri random
function randomNumber(min, max) {
    const random = Math.floor(Math.random()* (max - min + 1) + min);

    return random;
}

// check pari o dispari
function oddEven (num) {
    let flag = false
    if (num % 2 == 0) {
        flag = true 
        alert('Pari');
        console.log('Pari');
    } else {
        alert('Dispari');
        console.log('Dispari');
    }

    return flag
}