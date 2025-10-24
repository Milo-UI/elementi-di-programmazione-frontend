/*
    Abbiamo visto che possiamo passare stringhe, numeri o altro come argomento di una funzione, ma è anche possibile passare una funzione, per richiamarla o eseguirla all'interno di essa.
*/
// creo una arrow function che ha come parametro una callback function
const myFunc = (callbackFunc) => {
    // fai qualcosa
    let valore = 50;
    // richiamiamo la funzione di callback
    callbackFunc(valore);
};

// quando richiamo la funzione, le passo come parametro un'altra funzione
// myFunc(function(valore) {
//     // fai qualcosa
//     console.log(valore);
// });
// La converto in una arrow function per leggibilità
myFunc(valore => {
    console.log(valore)
});

/* --------------------------------- forEach -------------------------------- */
/*
    forEach è un metodo degli array che permette di iterare gli elementi di un array e si aspetta come argomento una callback function.

    Nella callback function possiamo passare dei parametri:
        - il primo sarà l'elemento dell'array che sta venendo iterato
        - il secondo sarà l'indice dell'elemento iterato
*/
let personaggi = ['mario', 'luigi', 'peach', 'yoshi', 'bowser'];

personaggi.forEach((personaggio, indice) => {
    // console.log('qualcosa'); // stamperà in console qualcosa 5 volte
    console.log(indice, personaggio);
});

// Posso anche creare una funzione di callback esterna e richiamarla nel forEach
const logPersonaggio = (personaggio, indice) => {
    console.log(`${indice} - Ciao ${personaggio}!`);
};

personaggi.forEach(logPersonaggio);
// in questo caso non mettiamo le parentesi tonde quando scriviamo il nome della funzione di callback, perché stiamo solo fornendo il riferimento alla funzione e non la stiamo chiamando. Sarà poi il metodo forEach a chiamare la funzione per ogni elemento dell'array

/* ----------------------------- esempio pratico ---------------------------- */
let listaPersonaggi = document.getElementById('personaggi');
let html = ``;

personaggi.forEach(personaggio => {
    // creiamo un html template
    html += `<li>${personaggio}</li>`;
});

console.log(html);
listaPersonaggi.innerHTML = html;