/* 
    ES1 Scrivi una funzione javascript che accetti due argomenti, una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa

    Es2 Scrivi una funzione javascript che accetta un “argomento” e ritorna il tipo di dato: oggetto, funzione, stringa, numero, undefined.

    Es3 Scrivi una funzione javascript che accetta una stringa come parametro e trova la parola più lunga all’interno della frase. Es (mi chiamo Massimiliano -> Massimiliano).

    Es4 Scrivi un programma che accetta (da finestra) un numero come input e inserisce un dash (-) tra due numeri pari. Es ( 823486 -> 8-234-8-6 )

    Es5 Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.

    Es6 Dati due array, calcolare la somma degli elementi presenti nello stesso indice. Esempio:
    array1 = [1,0,2,4,6]
    array2 = [0,4,5,8,7]
    Output = [1,4,7,12,13]

    Es7 Scrivi una funzione che stampa a console tutti i numeri interi di un dato intervallo. Per i multipli di 3 stamperà *Zoom! mentre per i multipli di 5 stamperà *Boom!. Controlla anche il caso in cui il numero è divisibile sia per 3 che per 5.
*/
/* ----------------------------------- ES1 ---------------------------------- */

function contaOccorrenze(stringa, lettera) {
    // Controlla se la lettera è un singolo carattere
    if (lettera.length !== 1) {
        return "Devi fornire una sola lettera."
    }

    let conteggio = 0;

    // Itera attraverso ogni carattere della stringa
    for (let i = 0; i < stringa.length; i++) {
        // incrementa il conteggio se il carattere corrente è uguale alla lettera
        if (stringa[i] === lettera) {
            conteggio++;
        }
    }

    return `La lettera "${lettera}" si ripete ${conteggio} volte nella stringa "${stringa}"`;
}

let risultato = contaOccorrenze("banana", "a");
console.log(risultato);

/* ----------------------------------- ES2 ---------------------------------- */
function trovaTipoDato(dato) {
    if (dato === null) {
        return `Null è di tipo null`;
    }
    
    let tipo = typeof dato;

    return `${dato} è di tipo ${tipo}`;
}

console.log(trovaTipoDato(42));
console.log(trovaTipoDato('ciao'));
console.log(trovaTipoDato(null));
console.log(trovaTipoDato(undefined));
console.log(trovaTipoDato(trovaTipoDato));
// console.log(trovaTipoDato([]));

/* ----------------------------------- ES3 ---------------------------------- */
function trovaParolaLunga(frase) {
    // Divido la frase in parole
    let parole = frase.split(' ');

    let parolaMax = '';

    // itero tra le parole per trovare la più lunga
    for (let i = 0; i < parole.length; i++) {
        if (parole[i].length > parolaMax.length) {
            parolaMax = parole[i];
        }
    }

    return parolaMax
}

let parolaLunga = trovaParolaLunga("mi chiamo Massimiliano");
console.log(`La parola più lunga nella frase è "${parolaLunga}"`);

/* ----------------------------------- ES4 ---------------------------------- */
function inserisciDash(numero) {
    let numeroStr = numero.toString();
    let risultato = '';

    for (let i = 0; i < numeroStr.length; i++) {
        risultato += numeroStr[i]; // Aggiungo il carattere corrente al risultato

        // controllo se il carattere corrente e quello successivo sono pari
        if (numeroStr[i] % 2 === 0 && numeroStr[i + 1] % 2 === 0) {
            risultato += '-';
        }
    }

    return risultato
}

let numeroSuddiviso = inserisciDash(82348632);
console.log(numeroSuddiviso);

/* ----------------------------------- ES5 ---------------------------------- */
function rimuoviDuplicati(array) {
    // Creo un nuovo array per memorizzare i valori unici
    let senzaDuplicati = [];

    for (let i = 0; i < array.length; i++) {
        // controllo se l'elemento non già presente nel nuovo array
        if (!senzaDuplicati.includes(array[i])) {
            senzaDuplicati.push(array[i]); // aggiungi l'elemento se non è già presente
        }
    }

    return senzaDuplicati;
}

let arrayOriginale = [1, 2, 2, 3, 4, 4, 5];
let arraySenzaDuplicati = rimuoviDuplicati(arrayOriginale);
console.log(arraySenzaDuplicati);

/* ----------------------------------- ES6 ---------------------------------- */
function sommaArray(array1, array2) {
    // creo un nuovo array per contenere i risultati
    let somma = [];

    for (let i = 0; i < array1.length; i++) {
        somma.push(array1[i] + array2[i]);
    }

    return somma
}

let array1 = [1,0,2,4,6];
let array2 = [0,4,5,8,7];
let arrayUniti = sommaArray(array1, array2);
console.log(arrayUniti);

/* ----------------------------------- ES7 ---------------------------------- */
function stampaZoomBoom(inizio, fine) {
    for (let i = inizio; i <= fine; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('*ZoomBoom!');
        } else if (i % 3 === 0) {
            console.log('*Zoom!');
        } else if (i % 5 === 0) {
            console.log('*Boom!');
        } else {
            console.log(i);
        }
    }
}

stampaZoomBoom(1, 15)