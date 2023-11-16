// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero
// verifica che sia dispari
// inseriscilo nell'array.

let emptyArray = [];

for(i = 0; i < 6; i++){
    // Chiedi per 6 volte all'utente di inserire un numero
    let numberInput = prompt('Inserisci un numero');

    // Verifica pari/dispari
    if (numberInput % 2 !== 0){
        emptyArray.push(numberInput);
        console.log(numberInput + " Il numero e' dispari");
        emptyArray.push(numberInput);
        console.log(emptyArray.length);
    } else{
        console.log(" Il numero e' pari");
        }
}


console.log(emptyArray);

