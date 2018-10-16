'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var toolbar_toggle;
var currentIndex;
var timer;

// déclaration des boutons d'action
var slider_previous, slider_next, slider_toggle, slider_random;

// zones nécessaire au slide
var image, figure, legend;


// La liste des slides du carrousel.
var images = [
    {legend: "Street Art", src: "1.jpg"},
    {legend: "Fast Lane", src: "2.jpg"},
    {legend: "Colorful Building", src: "3.jpg"},
    {legend: "Skyscrapers", src: "4.jpg"},
    {legend: "City by night", src: "5.jpg"},
    {legend: "Tour Eiffel la nuit", src: "6.jpg"}
];


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/




// Quand on clique sur l'hyperlien de l'interface de navigation toolbar-toggle les boutons de la barre d'outils s'affichent ou se cachent, comme un bouton on/off.
// 1. identifie l'élément
toolbar_toggle = document.getElementById('toolbar-toggle');
slider_previous = document.getElementById('slider-previous');
slider_next = document.getElementById('slider-next');
slider_toggle = document.getElementById('slider-toggle');
slider_random = document.getElementById('slider-random');

// 2. gestion de l'action
function onClickToolbarToggle() {
    var toolbar = document.querySelector('.toolbar');
    toolbar.classList.toggle('hidden');
}

// afficher l'image précédente
function onClickSliderPrevious() {
    if (currentIndex <= 0) {
        currentIndex = images.length;
    }
    currentIndex--;
    updateImage();
}

// afficher l'image suivante
function onClickSliderNext() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    updateImage();
}

function onClickSliderToggle() {
    var slider_toggle_i = slider_toggle.querySelector('i');
    // Quand on clique sur le bouton slider-toggle le carrousel
    // démarre ou s'arrête alternativement, comme un bouton on/off.


    if (timer == null) {
        timer = setInterval(onClickSliderNext, 1000);
        slider_toggle_i.classList.remove('fa-play');
        slider_toggle_i.classList.add('fa-pause');
    } else {
        clearInterval(timer);
        timer = null;
        slider_toggle_i.classList.add('fa-play');
        slider_toggle_i.classList.remove('fa-pause');
    }

    // rafraichissement de l'image
    currentIndex = 1;
    updateImage();
}


function onClickSliderRandom() {
    var random;

    do {
        // génération d'un nombre aléatoire différent de l'image actuelle
        random = Math.floor(Math.random() * images.length);
    } while (random == currentIndex);

    // rafraichissement de l'image
    currentIndex = random;
    updateImage();
}

function updateImage() {
    figure = document.getElementById('slider');
    image = figure.querySelector('img');
    legend = figure.querySelector('figcaption');

    image.src = "images/" + images[currentIndex].src;
    image.alt = images[currentIndex].legend;
    legend.textContent = images[currentIndex].legend;
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// on défini une image par défaut;
currentIndex = 0;
updateImage();

// définition du timer
timer = null;

// 3. création de l'évènement qui déclenche l'action
toolbar_toggle.addEventListener('click', onClickToolbarToggle);
slider_previous.addEventListener('click', onClickSliderPrevious);
slider_next.addEventListener('click', onClickSliderNext);
slider_toggle.addEventListener('click', onClickSliderToggle);
slider_random.addEventListener('click', onClickSliderRandom);

// Quand on appuie sur les touches fléchées gauche et droite du clavier on peut respectivement reculer et avancer dans le diaporama.


