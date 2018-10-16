"use strict";

function addContact(gender, lastname, firstname, phone) {

    // mise au format du contact.
    var newContact = {
        gender: gender,
        lastname: lastname,
        firstname: firstname,
        phone: phone
    };

    // récupération de tous les contacts
    var contacts = getLocalStorage('addressBook');

    // ajout d'un nouveau contact
    contacts.push(newContact);

    // enregistre à nouveau tous les contacts
    saveLocalStorage('addressBook', contacts)

}

function refreshContactList() {
    var contacts, html, fullname;

    // récupération de tous les contacts
    contacts = getLocalStorage('addressBook');

    // on crée un conteneur html vide
    html = '';

    // on boucle sur chacun des contacts pour générer un LI;
    for (var index = 0; index < contacts.length; index++) {
        fullname = contacts[index].firstname + " " + contacts[index].lastname;
        html += '<li><a href="#" title="éditez le contact ' + fullname + '" data-index="' + index + '" >' + fullname + "</a></li>";
    }

    // enfin on ajoute le contenu dans le DOM.
    // Attention à ne pas modifier le DOM dans une boucle pour éviter
    // de reconstruire le DOM 20 fois, c'est qui est très gourmand en RAM

    document.getElementById('contact-list').innerHTML = html

}