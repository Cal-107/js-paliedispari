// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Ref
const inputUs = prompt('Inserisca una parola')

// Evocazione
const inputReverse = reverseWord(inputUs);

// Definizione di funzione
function reverseWord (word) {
    let reverse = '';
    for (let i = inputUs.length - 1; i >= 0; i--) {
        reverse += word[i];
    }
    if (inputUs === reverse) {
        alert(`La parola inserita ${inputUs} è palindroma`);
        console.log(`La parola inserita ${inputUs} è palindroma`);
    } else {
        alert(`La parola inserita ${inputUs} non è palindroma`);
        console.log(`La parola inserita ${inputUs} non è palindroma`);
    }

    return reverse;
}