"use strict";

/*
 https://www.alsacreations.com/article/lire/1498-lapi-classlist.html
 classlist
 .increase()
 .remove()
 .toggle()
 .contains()
 .toString()
 .length;
 */

var section = document.querySelector('section');

// exemple de pleins d'attributs accessibles directement
section.id = "truc";
section.value = "truc";
section.placeHolder = "truc";
section.style.color = "red";

// ajoute ou enlève une classe d'une balise si elle est  présente ou non
section.classList.toggle('hidden');

// l'équivalent tout pareil du toggle
if (section.classList.contains('hidden')) {
    section.classList.remove('hidden');
} else {
    section.classList.add('hidden');
}

console.log(section.classList.length);
console.log(section.classList.toString());

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

 <nav>
 <ul>
 <li>Accueil</li>
 <li>A propos</li>
 <li>Contact</li>
 </ul>
 </nav>

 <section class="salut mon chaussure hidden">
 <p >Lorem Ipsum sic dolor amet</p>
 <p>Lorem Ipsum sic dolor amet</p>
 <p>Lorem Ipsum sic dolor amet</p>
 </section>

 <script src="test.js"></script>
 </body>
 </html>
 */
