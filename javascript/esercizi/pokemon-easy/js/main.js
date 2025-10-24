/*
    Creare una pagina web che abbia un menu di navigazione (che non porta da nessuna parte per il momento) e un inizio di pokedex:

    - per ogni oggetto (pokemon) deve esserci una card contenente l'immagine (o sprite) del pokemon, il suo nome e la sua abilità

    - ogni card avrà un button 'mostra info', che al click farà comparire le informazioni del pokemon in questione, farà cambiare l'immagine con quella del retro del pokemon e il testo all'interno del bottone stesso, che diventerà "Nascondi info".
*/
const pokemons = [{
        id: 0,
        nome: "Bulbasaur",
        tipo: "erba",
        abilita: "Foglielama",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        info: "Il best boy. Abbastanza socievole se non infastidito"
    }, {
        id: 1,
        nome: "Charmander",
        tipo: "fuoco",
        abilita: "Braciere",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        info: "In caso vada fuori controllo chiamare 112 e farsi passare i pompieri"
    }, {
        id: 2,
        nome: "Squirtle",
        tipo: "acqua",
        abilita: "pistolacqua",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
        info: "Non è un pompiere"
    }, {
        id: 3,
        nome: "Pikachu",
        tipo: "elettrico",
        abilita: "tuonoshock",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        info: "Coloro i quali lo agganceranno al contatore saranno punibili secondo norma cod. Penale"
}];

let pokedex = document.querySelector('.pokedex');

console.log(pokedex);


function creaCard() {
    pokemons.forEach(pokemon => {
        let card = `
            <div class="pokemon">
                <div class="card">
                    <img class="card-img" src="${pokemon.sprite}" alt="${pokemon.nome}">

                    <div class="card-body">
                        <h2 class="card-title">${pokemon.nome}</h2>
                        <p class="card-text">
                            Tipo: ${pokemon.tipo}<br>
                            Abilità: ${pokemon.abilita}
                        </p>
                        <button class="btn" data-id="${pokemon.id}">Mostra info</button>
                    </div>
                </div>
            </div>`;
        
        pokedex.innerHTML += card;
    });
}

pokedex.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        // console.log(e.target.getAttribute('data-id'));
        // console.log('Sto mostrando le info di', pokemons[e.target.getAttribute('data-id')].nome);
        // console.log(pokemons[e.target.getAttribute('data-id')].info);
        
        let infoPoke = document.createElement('p');
        infoPoke.classList.add('card-text');

        e.target.classList.toggle('btn-secondary');

        if (e.target.textContent === 'Mostra info') {   
            infoPoke.textContent = pokemons[e.target.getAttribute('data-id')].info;
            e.target.parentElement.insertBefore(infoPoke, e.target);
            e.target.textContent = 'Nascondi info';
            // e.target.classList.add('btn-secondary');
            
            e.target.parentElement.previousElementSibling.setAttribute('src', pokemons[e.target.getAttribute('data-id')].spriteSpalle);
        } else {
            e.target.previousElementSibling.remove();
            e.target.textContent = 'Mostra info';
            // e.target.classList.remove('btn-secondary');

            e.target.parentElement.previousElementSibling.setAttribute('src', pokemons[e.target.getAttribute('data-id')].sprite);
        }
    }
})

creaCard();

let btnNavOpen = document.querySelector('.btn-open');
let btnNavClose = document.querySelector('.btn-close');
let nav = document.querySelector('.navbar ul');

btnNavOpen.addEventListener('click', () => {
    nav.classList.add('open');
})

btnNavClose.addEventListener('click', () => {
    nav.classList.remove('open');
})