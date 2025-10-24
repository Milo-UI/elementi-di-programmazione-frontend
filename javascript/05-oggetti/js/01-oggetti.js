/*
    un oggeto è un contenitore di valori eterogenei messi insieme a formare una struttura unica che ha un'identità. Viene utilizzato per rappresentare un'entità specifica, per esempio una persona, un ordine, una fattura, una prenotazione, ecc. tramite l'aggregazione di dati e funzionalità.

    Un oggetto possiede:
        - Dati, ovvero delle proprietà, rappresentate da un nome e un valore
        - Funzionalità, ovvero dei metodi, rappresentati da funzioni
    
    ESEMPIO REALE

    Telefono è un oggetto
    Caratteristiche             Funzionalità
    - colore                    - suonare
    - dimensioni                - fare foto
    - modello                   - riprodurre musica

    ESEMPI IN JAVASCRIPT

    Utente
            proprietà           metodi
            - email             - login
            - username          - logout
            - n. di tel         - commentare

    Blog post
            proprietà           metodi
            - title             - publish
            - content           - unpublish
            - author            - delete
*/
/* ---------------------------- creare un oggetto --------------------------- */
// object literal notation - creare un oggetto in maniera letterale
let user = {
    // le proprietà sono coppie di chiave-valore separate da virgole
    nome: 'Mario',
    eta: 30,
    email: 'mario@idraulico.it',
    paese: 'Italia',
    post: ['Perché saltare in testa ai Goomba?', 'Come salvare una principessa in 10 passi']
};

console.log(user);

// Accedere alle proprietà
// Dot notation
console.log(user.nome);
console.log(user.post[0]);

// Sovrascrivere il valore di una proprietà
user.eta = 26
console.log(user.eta);

// una proprietà può assumere qualsiasi valore, compreso un altro oggetto, quindi possiamo creare oggetti annidati
let garage = {
    macchina: {
        interno: {
            vanoOggetti: 'libretto',
            sedilePasseggero: 'briciole'
        },
        esterno: {
            bagagliaio: 'ruota di scorta'
        }
    }
}

let contenutoVanoOggetti = garage.macchina.interno.vanoOggetti;
console.log(contenutoVanoOggetti);

// Posso creare un oggetto vuoto e assegnargli in seguito le proprietà
let persona = {};

persona.nome = 'Milo';
persona.cognome = 'Spandre';
persona.indirizzo = {
    via: 'Via San Mauro',
    numero: 10,
    cap: '10156',
    citta: 'Torino'
};
persona.eta = 34;

console.log(persona);
console.log(persona.indirizzo.citta);

