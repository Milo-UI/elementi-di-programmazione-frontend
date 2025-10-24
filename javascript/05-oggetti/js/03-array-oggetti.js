/*
    Negli array possiamo salvare valori di tutti i tipi, quindi possiamo anche creare array di oggetti.

    Quando otteniamo dati da un database, nella maggior parte dei casi riceveremo array di oggetti. Per esempio, se richiediamo a un database una lista di film, questo ci restituirà un array di oggetti film che avranno le loro proprietà (titolo, durata, anno, attori, regista, ecc.)
*/


let post = [
    {
        title: 'Perché saltare in testa ai Goomba',
        likes: 30
    },
    {
        title: 'Come salvare una principessa in 10 passi',
        likes: 50
    }
];

console.log(post);

let user = {
    nome: 'Mario',
    eta: 30,
    email: 'mario@idraulico.it',
    paese: 'Italia',
    post: [
        {
            title: 'Perché saltare in testa ai Goomba',
            likes: 30
        },
        {
            title: 'Come salvare una principessa in 10 passi',
            likes: 50
        }
    ],

    // metodi
    login: function() {
        console.log("L'utente è loggato");
    },
    logout: function() {
        console.log("L'utente non è loggato");
    },
    // Possiamo anche abbreviare i metodi con questa sintassi
    stampaPost() {
        // console.log(this);
        console.log('Questo utente ha scritto i seguenti post:');
        this.post.forEach(post => {
            console.log(post.title, post.likes);
        })
    }
};

user.stampaPost();

/* ------------------------------- Esercizio 1 ------------------------------ */
/* 
    Progettare l'array di oggetti canzone, ognuna con le proprietà titolo, band e anno. Fare inserire all'utente una nuova canzone attraverso un prompt. Visualizzare il nuovo oggetto così costruito.
*/
let canzoni = [
    {
        titolo: 'Stairway to Heaven',
        band: 'Led Zeppelin',
        anno: '1971'
    },
    {
        titolo: 'Wish You Were Here',
        band: 'Pink Floyd',
        anno: '1975'
    }
];

console.log(canzoni);

// canzoni.push({
//     titolo: prompt('Titolo canzone'),
//     band: prompt('Band canzone'),
//     anno: prompt('Anno canzone'),
// });

console.log(canzoni);
console.log(canzoni[canzoni.length - 1]);


/* ------------------------------- Esercizio 2 ------------------------------ */
/*
    Progettare un array di automobili che contiene alcuni oggetti, con le proprietà marca, modello, colore, alimentazione, anno e cavalli.

    - Visualizzare tutti i dati in console
    - Cancellare da tutte le auto la proprietà cavalli (operatore delete)
    - Modificale la proprietà anno solo nelle auto di colore bianco, impostandola a 2023
    - Rimuovere dall'array tutte le macchine di marca Fiat
*/
let automobili = [
    {
        marca: 'Fiat',
        modello: '500',
        colore: 'bianco',
        alimentazione: 'benzina',
        anno: 2010,
        cavalli: 67
    },
    {
        marca: 'Fiat',
        modello: 'Multipla',
        colore: 'grigio',
        alimentazione: 'diesel',
        anno: 2012,
        cavalli: 95
    },
    {
        marca: 'Jeep',
        modello: 'Wrangler',
        colore: 'arancione',
        alimentazione: 'diesel',
        anno: 2019,
        cavalli: 95
    },
    {
        marca: 'Mazda',
        modello: 'RX7',
        colore: 'rossa',
        alimentazione: 'benzina',
        anno: 2008,
        cavalli: 67
    },
    {
        marca: 'Alfred',
        modello: 'Batmobile',
        colore: 'nero',
        alimentazione: 'vegana',
        anno: 1990,
        cavalli: 100
    }
];

console.log(automobili);

// Cancello da tutte le auto la proprietà cavalli e cambio l'anno di tutte le macchine bianche in 2023
for (let i = 0; i < automobili.length; i++) {
    delete automobili[i].cavalli;

    if (automobili[i].colore === 'bianco') {
        automobili[i].anno = 2023;
    }
}

console.log(automobili);

// Rimuovo le auto di marca Fiat
let automobiliSenzaFiat = [];

for (let i = 0; i < automobili.length; i++) {
    if (automobili[i].marca !== 'Fiat') {
        automobiliSenzaFiat.push(automobili[i]);
    }
}

console.log(automobiliSenzaFiat);
