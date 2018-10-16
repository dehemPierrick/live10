"use strict";

// sélécteur par ID il est le plus rapide et efficace
var main_title = document.getElementById("main_title");

// sélecteur général utilisant les selecteur CSS,
var secondLi = document.querySelector('nav ul li:nth-of-type(2)');

// selecteur multiple, marche comme le précédent mais /!\ retourne un tableau /!\
var paragrapheS = document.querySelectorAll('section > p');

for (var index = 0; index < paragrapheS.length; index++) {
    paragrapheS[index].textContent = index + ". " + paragrapheS[index].textContent;
}

console.log(main_title, secondLi, paragrapheS);