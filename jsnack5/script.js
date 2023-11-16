// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let firstWord = prompt("Inserisci la prima parola che hai scelto");
console.log(firstWord);

let secondWord = prompt("Inserisci la seconda parola che hai scelto");
console.log(secondWord);

if (firstWord.length < secondWord.length){
    console.log(firstWord + ", " + secondWord);
} else if (secondWord.length < firstWord.length){
    console.log(secondWord + ",  " + secondWord);
}