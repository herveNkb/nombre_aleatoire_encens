const text = document.getElementById('texte');
const button = document.getElementById('button');
let adage = document.querySelector('#citation');
let author = document.querySelector('#auteur');

// Variables essentielles
let dernier = 0; // Stocke la citation actuellement affichée
let nombreAleatoire = 0; // Stocke le nbe aléatoire (l'index) pour afficher une citations

// Tableau de citations
let citations = [
    [
        "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
        'Gandhi',
    ],
    [
        'Le plus grand risque est de ne prendre aucun risque.',
        'Mark Zuckerberg'
    ],
    [
        'Les mots d\'une phrase ou d\'un vers sont les traces, les cicatrices des sentiments de l\'auteur.',
        'Fabrice Luchini'
    ],
    [
        'Écrire, c\'est se cacher derrière les mots tout en se mettant à nu.',
        'Claudine Paquet'
    ],
    [
        'Le plus dur ce sont ces doutes, ces intermittences, ces vides si complets que je me demande parfois si tout ce qui est arrivé n\'est pas un rêve.\n' +
        'Et quand la joie revient dans sa plénitude, j\'ai bien honte alors d\'avoir eu la lâcheté de ne plus y croire.',
        'Simone de Beauvoir',
    ],
    [
        'Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.',
        'T.S Elliot',
    ],
    [
        'Le succès c’est tomber sept fois, se relever huit.',
        'Proverbe japonais'
    ],
    [
        'Aujourd\'hui, je suis convaincue que personne ne perd personne, parce que personne ne\n' +
        'possède personne. C\'est cela la véritable expérience de la liberté: avoir la chose la\n' +
        'plus importante au monde, sans la posséder.',
        'Paulo Coehlo',
    ],
    [
        'Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.',
        'Brian Tracy',
    ],
    [
        'La gentillesse dans les mots suscite la confiance.\n' +
        ' La gentillesse dans la pensée crée la profondeur.\n' +
        'La gentillesse dans les actes engendre l\'amour.',
        'Lao-Tseu',
    ],
    [
        'Aimer la littérature, c\'est être persuadé qu\'il y a une phrase écrite qui nous redonnera le goût de vivre.',
        'Georges Perros',
    ],
    [
        'Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.',
        'Anita Roddick',
    ],
    [
        'Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.',
        'Robert Louis Stevenson',
    ],
    [
        'L’action est la clé fondamentale de tout succès.',
        'Pablo Picasso'
    ],
    [
        'Le succès, c’est se promener d’échecs en échecs tout en restant motivé.',
        'Winston Churchill',
    ],
    [
        'Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.',
        'Robert T. Kiyosaki',
    ],
    [
        'Il y aura toujours une plume pour écrire le futur, mais jamais une gomme pour effacer le passé. ',
        'Anonyme',
    ],
    [
        'Il semble qu\'il existe dans le cerveau une zone tout à fait spécifique qu\'on pourrait appeler la mémoire poétique \n'+
        'et qui enregistre ce qui nous a charmé, ce qui nous a émus, ce qui donne à notre vie sa beauté.',
        'Milan Kundera',
    ],
    [
        'Ce ne sont pas les autres qui nous infligent les pires déceptions, mais le choc entre la réalité et les emballements de notre imagination !',
        'Hélène Grémillon',
    ],
    [
        'Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.',
        'C.S. Lewis',
    ],
    [
        'Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.',
        'Winston Churchill',
    ],
    [
        'L\'attention est la forme la plus rare et la plus pure de la générosité !',
        'Simone Weil'
    ],
    [
        'Sans la littérature on ne saurait pas ce que pense un homme lorsqu\'il est seul.',
        'Georges Perros'
    ],
];

// Fonction générant un nbe aléatoire, mais grâce à 'Math.floor' il sera toujours un nbe entier
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Détection du clic sur le bouton
button.addEventListener('click', () => {
    do {
        nombreAleatoire = genererNombreEntier(citations.length);
    } while (nombreAleatoire === dernier);

    button.removeEventListener('click', genererNombreEntier);
    // Affiche le changement de citation et d'auteur
    adage.textContent = citations[nombreAleatoire][0];
    author.textContent = citations[nombreAleatoire][1];

    // Évite qu'une citation ne se répète
    dernier = nombreAleatoire;
});


// Fonction générant le nombre aléatoire pour l'encens - méthode différente de l'autre
function entierAleatoire(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 
 
button.addEventListener('click', () => {
    text.innerHTML =
        'Pour un peu de détente et de sérénité, c\'est le '
        + entierAleatoire(1, 15) +
        ', qui doit être brûlé !'
    ;
});
button.removeEventListener('click', entierAleatoire);

