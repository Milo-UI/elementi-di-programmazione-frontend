/*
    JS ha tutta una serie di oggeti built-in a nostra disposizione. uno di questi è l'oggeto Math.

    Math ha tante proprietà e tanti metodi pronti all'uso e per accedervi dobbiamo ovviamente richiamare l'oggetto Math.
*/
// Stampando l'oggetto a console, possiamo vederne proprietà e metodi
console.log(Math);

// Possiamo utilizzare la proprietà PI di Math se ci serve il pi greco per una formula
console.log(Math.PI);

/* --------------------------------- Metodi --------------------------------- */
const area = 7.7;

// Math.round() arrotonda il valore all'intero più vicino
console.log(Math.round(area)); 

// Math.floor() arrotonda il valore per difetto
console.log(Math.floor(area));

// Math.ceil() arrotonda il valore per eccesso
console.log(Math.ceil(area));

// Math.trunc() elimina i decimali e lascia l'intero
console.log(Math.trunc(area));

// Math.sqrt() calcola la radice quadrata
console.log(Math.sqrt(area));

// Math.pow() eleva il primo argomento alla potenza indicata dal secondo argomento
console.log(Math.pow(area, 3));

// Generare numeri randomici
const random = Math.random();

// Math.random() genera ogni volta che lo chiamiamo un numero randomico compreso 0 e 1
console.log(random);

// Per generare un numero randomico compreso tra 1 e 100 possiamo fare così:
console.log(Math.round(Math.random() * 100));
