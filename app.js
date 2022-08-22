let title = document.querySelector('#title');
let text = document.querySelector('#texte');


function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let hasard = entierAleatoire(1, 15);
console.log(hasard);

