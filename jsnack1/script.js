// chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

const firstAge = parseInt(prompt('Scrivi la prima età'));
const secondAge = parseInt(prompt('Scrivi la seconda età'));
const ageSum = parseInt('La tua età');

if (firstAge > secondAge) {
    console.log('First age is greater:  ' + firstAge); 
}else if (secondAge > firstAge) {
    console.log('Second age is greater:  ' + secondAge);
}

document.getElementById("etautente").innerHTML;

