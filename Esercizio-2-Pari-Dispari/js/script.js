// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Richiesta all'utente di scegliere pari o dispari ed un numero da 1 a 5
let userChoise = prompt('Scelga pari o dispari');

while (userChoise !== 'pari' && userChoise !== 'dispari') {
    alert('Può scrivere solo pari o dispari');
    userChoise = prompt('Scelga pari o dispari');
}

let usNum = parseInt( (prompt( 'Scelga un numero da 1 a 5')))
console.log(usNum);

while (usNum > 5 || usNum < 1 || isNaN(usNum)) {
    alert('Può scegliere solo numeri da 1 a 5');
    usNum = prompt( 'Scelga un numero da 1 a 5');
}


// Generiamo un numero random per il computer 


//Somma dei numeri 


//check se la somma è pari o dispari


//dichiarare il vincitore