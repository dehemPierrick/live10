"use strict";

// 1. identification de la cible
var section = document.querySelector('section');

// 2. actions à réaliser
function onMouseOverSection() {
    section.style.backgroundColor = "red";
}

// 3. définition des évênements
section.addEventListener('mouseover', onMouseOverSection);


// comment nommer la fonction déclenchée
// on-typeEvenement-cible pas exemple = > onClickButton


/**************************************************************************

 Utilisation de this avec un écouteur positionné sur plusieurs élements

 **************************************************************************/
    // identification
var paragraphes = document.querySelectorAll('p');

// action à réaliser
function onClickParagraphe() {
    // this est généré par l'écouteur d'évènement
    // il retourne unique l'élément qui à déclenché le click
    // c'est indispenssable pour lui appliquer un effet.
    this.classList.toggle('black');
}

// ajout de l'écouteur d'évènement sur plusieurs élément sur le site.
for (var index = 0; index < paragraphes.length; index++) {
    paragraphes[index].addEventListener('click', onClickParagraphe);
}


/**************************************************************************

 Même exemple avec un menu qui changerais les contenus de la pages

 **************************************************************************/
// identifier chaque éléments du menu
var lis = document.querySelectorAll('nav#menu li');


// changement du contenu de la page en fonction du bouton cliqué
function onClickLi() {
    this.classList.toggle('borderBlack');
    var content = "";
    switch (this.textContent) {
        case "Accueil":
            content = "<p>salut je suis une <b>balise</b> sympa</p><p>salut je suis une <b>balise</b> sympa</p>";
            break;
        case "A propos":
            content = "<p>Notre philosophie, nos valeurs</p><p>Notre philosophie, nos valeurs</p>";
            break;
        case "Contact":
            content = "<p>Laissez moi un message sympa</p><p>Laissez moi un message sympa</p>";
            break;
    }
    // attention avec la propriété innerHTML, limiter son utilisation car il reconstuit
    // la totalité de la page et donc est très gourmand en ressources
    document.getElementById('content').innerHTML = content;
}


// ajouter un écouteur d'évènement sur chaque élément du menu
for (var index2 = 0; index2 < lis.length; index2++) {
    lis[index2].addEventListener("click", onClickLi);
}


/*
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="UTF-8">
 <title>Title</title>
 <link rel="stylesheet" href="style.css">
 </head>
 <body>

 <h1 id="main_title">Je suis une titre</h1>

 <nav id="menu">
 <ul class="flex">
 <li>Accueil</li>
 <li class="borderBlack">A propos</li>
 <li>Contact</li>
 </ul>
 </nav>

 <section id="content"></section>

 <script src="test.js"></script>
 </body>
 </html>
 */