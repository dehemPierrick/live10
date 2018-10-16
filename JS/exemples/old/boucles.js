"use strict";


/***********************************************************************
 TEST AVEC WHILE

 while("condition vraie"){
        // se repète tant que la condition est vraie
    }
 */

document.write('<h2>Test Avec la boucle WHILE</h2>');

// déclaration du compteur
var count = 0;

// test si la condition est vraie
while (count < 10) {

    // affichage
    document.write('<p>' + count + '</p>');

    // incrémentation du compteur
    count++;
}


/***********************************************************************
 TEST AVEC FOR

 for(définition ; condition ; mise à jour){
        // actions a effectuer
    }

 */


document.write('<h2>Test Avec la boucle FOR</h2>');
var index;

for (index = 0; index < 10; index++) {
    document.write('<p>' + index + '</p>');
    index++;
}


// test avancé avec un objet.
var astronaute;
astronaute = {};
astronaute.repareFusee = function () {
};

for (astronaute.oxygen = 100; astronaute.oxygen > 0; astronaute.oxygen /= 10) {
    astronaute.repareFusee();
}


/***********************************************************************
 TEST AVEC DO-WHILE

 Le dowhile marche exactement pareille que le while on execute
 AU MOINS UNE FOIS les actions, indépendament de la condition

 */
var number;

// tant que l'utilisateur n'as pas mis de nombre on repose la question
do {
    number = window.prompt("Veuillez entrez un nombre (exemple : 1, 2.50 , 3000')");
} while (isNaN(number));


// Exemple de connexion avec mot de passe
var access;
var password;

do {
    password = window.prompt("entre votre mot de passe").trim();

    if (password == "bbb") {
        access = true;
    } else {
        console.log("wrong password");
        access = false;
    }
} while (access == false);

if (access == true) {
    console.log('bravo vous êtes connecté');
}

