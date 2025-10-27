const risposteGiuste = ['B', 'A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const risultato = document.querySelector('.risultato');

form.addEventListener('submit', e => {
    e.preventDefault();

    let punteggio = 0;
    const risposteUtente = [form.d1.value, form.d2.value, form.d3.value, form.d4.value, form.d5.value];

    // controlla risposte
    risposteUtente.forEach((risposta, indice) => {
        if (risposta === risposteGiuste[indice]) {
            punteggio += 20;
        }
    });

    // console.log(punteggio);

    // mostra il risultato sulla pagina
    scrollTo(0, 0);
    // risultato.querySelector('.punteggio').textContent = `${punteggio}%`;
    risultato.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        risultato.querySelector('.punteggio').textContent = `${output}%`;
        if (output === punteggio) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

// Window object
// console.log(window);

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('.quiz-form'));
// console.log(window.document.querySelector('.quiz-form'));

// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//     alert('hello');
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if (i === 5) {
//         clearInterval(timer);
//     }
// }, 1000);