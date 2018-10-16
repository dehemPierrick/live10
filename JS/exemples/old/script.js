"use strict";


/*
 document.write() / window.alert() / console.log()
 constantes
 variables
 types          float/integer/boolean/string/array/undefined
 operateurs
 concaténation
 prompt
 */

/**  déclaration **/
var age;
var anneeNaissance;

/** définition **/
age = window.prompt("Quel âge avez-vous?");     // on pose la question à l'utilisateur
age = parseInt(age);                            // conversion de la valeur de prompt en nombre entier
anneeNaissance = 2018 - age;                    // on calcul son année de naissance

/** exploitation, affichage **/
document.write("<p>Vous êtes né en  " + anneeNaissance + " !</p>");

