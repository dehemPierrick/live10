'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var billboard;
var count;
var timer;
var firing_btn;
var rocket;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// décollage de la fusée
function pourFaireDecollerLaFusee() {
    rocket.src = "images/rocket3.gif";
    rocket.classList.add('tookOff');
}

// affichage du décompte
function countDown() {
    // déccrémentation du compteur
    count--;

    // affichage de la valeur dans le DOM
    billboard.textContent = count;

    // vérification pour ne pas dépasser 0
    if (count <= 0) {
        clearInterval(timer);
    }
}

// déclenchement du décompte
function onClickFiring_btn() {

    rocket.src = "images/rocket2.gif";

    // on attends 10 secondes que le compte à rebours se termine.
    setTimeout(pourFaireDecollerLaFusee, 10000);

    // lancement du décompte
    timer = setInterval(countDown, 1000);
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

// identification des éléments dans la page
firing_btn = document.getElementById('firingButton');
billboard = document.getElementById('billboard').querySelector('span');
rocket = document.getElementById('rocket');

// écouteur d'évênement au click sur le bouton du lanceur
firing_btn.addEventListener('click', onClickFiring_btn);

// initialisation du compteur
count = 10;

// affichage initial du compteur
billboard.textContent = count;