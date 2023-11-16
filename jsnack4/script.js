// Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.

const firstArray = [];

for (let i = 1; i <= 100; i++){
    console.log(i);
    if (i % 7 == 0)
    console.log('n divisibile per 7');
    else if (i % 8 == 0)
    console.log('n divisibile per 8');
}
