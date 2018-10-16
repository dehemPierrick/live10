/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

// identification des images de la galerie
var photos = document.querySelectorAll('#photo-list img');

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onMouseOverPhoto() {
    this.classList.add('hover');
}

function onMouseOutPhoto() {
    this.classList.remove('hover');
}

function onClickPhoto() {
    this.classList.toggle("selected");

    // selection de la zone de texte à modifier
    var em = document.querySelector('#total em');

    // selection des élément du dom qui ont la classe selected
    var selected = document.querySelectorAll('.selected');

    // modification du contenu
    em.textContent = selected.length;
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

// ajout des écouteurs d'evennement au clic sur chacune des photos.
for (var index = 0; index < photos.length; index++) {
    photos[index].addEventListener('click', onClickPhoto);
    photos[index].addEventListener('mouseover', onMouseOverPhoto);
    photos[index].addEventListener('mouseout', onMouseOutPhoto);
}
