let form = document.querySelector('.signup-form');
// let inputUsername = document.querySelector('#username');

form.addEventListener('submit', e => {
    // Impediamo all'evento submit di refreshare la pagina
    e.preventDefault();

    // console.log(inputUsername.value);

    // Dot notation sul form per prendere l'input con l'attributo id o l'attributo name che ci interessa
    console.log(form.username.value);
})

