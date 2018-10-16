"use strict";

// pierre / feuille / ciseaux

/*******************************************
 Declarations
 *******************************************/
var reponses;
var choixOrdinateur;
var choixJoueur;

reponses = ['pierre', 'feuille', 'ciseaux', 'lezard', "spock"];


/*******************************************
 Program Core
 *******************************************/


choixJoueur = parseInt(window.prompt("Choisissez parmis  : \n1-pierre \n2-feuille \n3-ciseaux"));// on vérifie que l'utilisateur entre un nombre entier, sinon on repose la question infiniment

// on vérifie que l'utilisateur entre un nombre entier, sinon on repose la question infiniment
while (isNaN(choixJoueur) == true || choixJoueur < 1 || choixJoueur > 3) {
    choixJoueur = parseInt(window.prompt("Choisissez parmis  : \n1-pierre \n2-feuille \n3-ciseaux"));
}

// on soustrait 1 à la réponse puisque 3 pour l'utlisateur -> correspond à reponses[2]
choixJoueur = reponses[choixJoueur - 1];

// génération de la réponse aléatoire de l'ordinateur
choixOrdinateur = reponses[Math.floor(Math.random() * reponses.length)];

// traitement de l'égalité
if (choixOrdinateur == choixJoueur) {
    document.write('égalité, personne ne gagne.');

// comparaison des réponses
} else {
    switch (choixOrdinateur) {
        case "pierre" :
            if (choixJoueur == "feuille") {
                document.write('<p>Votre feuille étouffe la pierre, vous avez gagné</p>');
            } else {
                document.write('<p>Vos ciseaux sont cassés par la pierre, vous avez perdu</p>');
            }
            break;

        case "feuille" :
            if (choixJoueur == "pierre") {
                document.write('<p>Votre pierre est étouffé par la feuille, vous avez perdu</p>');
            } else {
                document.write('<p>Vos ciseaux coupent la feuille vous avez gagné</p>');
            }
            break;

        case "ciseaux" :
            if (choixJoueur == "pierre") {
                document.write('<p>Votre pierre écrase les ciseaux, vous avez gagné</p>');
            } else {
                document.write('<p>Les ciseaux découpent votre feuille, vous avez perdu</p>');
            }
            break;

    }
}


/*******************************************
 Display results
 *******************************************/

document.write("vous avez choisi : " + choixJoueur);
document.write("l'ordinateur à choisi : " + choixOrdinateur);