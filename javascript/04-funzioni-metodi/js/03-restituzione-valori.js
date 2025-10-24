/*
    Possiamo fare in modo che le nostre funzioni ci restituiscano un valore, invece di stampare semplicemente qualcosa in console.
*/
// Se per esempio avessimo una serie di raggi forniti da un database o da un utente e volessimo darli in pasto a una funzione che calcola l'area di un cerchio=, ma non volessimo stampare l'area in console, bensì riceverla per farne qualcosa in seguito, utilizzeremmo la parola chiave return
const calcArea = function(raggio) {
    let area = 3.14 * raggio ** 2; // Variabile locale, non posso usarla fuori dalla funz
    // console.log(area);
    return area;
    // Posso anche abbreviare
    // return 3.14 * raggio ** 2;
};

let area = calcArea(5);
console.log(area);

/* 
    return è una parola chiave utilizzata all'interno delle funzioni per restituire il valore specificato. Se non viene specificato alcun valore, la funzione restituisce undefined.
    Una volta che il codice incontra una dichiarazione return, l'esecuzione della funzione si interrompe immediatamente. Qualsiasi codice dopo il return non verrà eseguito.
*/
// Adesso che abbiamo l'area di un cerchio salvata in una variabile, possiamo utilizzarla per calcolarci il volume di un cilindro utilizzando un'altra funzione
const calcVolCilindro = function(area, altezza) {
    return area * altezza;
};

let volCilindro = calcVolCilindro(area, 10);
console.log(volCilindro);