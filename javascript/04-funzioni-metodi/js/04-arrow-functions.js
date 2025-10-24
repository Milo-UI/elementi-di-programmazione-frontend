/*
    Le arrow function sono funzioni scritte in maniera più moderna e concisa, rendendole il codice più breve e leggibile.
*/
// const calcArea = function(raggio) {
//     return 3.14 * raggio ** 2;
// };

// Non abbiamo bisogno della parola chiave
// const calcArea = (raggio) => {
//     return 3.14 * raggio ** 2;
// };

// Se abbiamo un solo parametro, possiamo omettere le parentesi tonde. Sono OBBLIGATORIE quando abbiamo più parametri o quando non ne abbiamo proprio
// const calcArea = raggio => {
//     return 3.14 * raggio ** 2;
// }

// Possiamo anche liberarci della parola chiave return e delle parentesi graffe, portando il blocco di codice sulla stessa linea della dichiarazione quando abbiamo un semplice return statement
const calcArea = raggio => 3.14 * raggio ** 2;

const area = calcArea(5);
console.log("L'area è di:", area);

// Secondo esempio
// const saluta = function () {
//     return 'hello world';
// };

const saluta = () => 'hello world';
const saluto = saluta();
console.log(saluto);

// Terzo esempio
// const scontrino = function(prodotti, tassa) {
//     let totale = 0;

//     for (let i = 0; i < prodotti.length; i++) {
//         totale += prodotti[i] + prodotti[i] * tassa;
//     }

//     return totale
// }

const scontrino = (prodotti, tassa) => {
    let totale = 0;

    for (let i = 0; i < prodotti.length; i++) {
        totale += prodotti[i] + prodotti[i] * tassa;
    }

    return totale
}

console.log(scontrino([10, 15, 30], 0.2));