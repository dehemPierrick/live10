"use strict";

const STORAGE_NAME = 'addressBook';


function getContactInfos(contactIndex) {

    // récupération des contacts
    var contactList = getLocalStorage(STORAGE_NAME);

    // renvoi du contact spécifié
    return contactList[contactIndex];
}


function addContact(gender, lastname, firstname, phone, contactIndex) {

    // mise au format du contact.
    var newContact = {
        gender: gender,
        lastname: lastname,
        firstname: firstname,
        phone: phone
    };

    // récupération de tous les contacts
    var contacts = getLocalStorage(STORAGE_NAME);

    if (contactIndex == undefined) {
        // ajout d'un nouveau contact
        contacts.push(newContact);

    } else {
        // édition d'un contact déjà existant
        contacts[contactIndex].gender = gender;
        contacts[contactIndex].lastname = lastname;
        contacts[contactIndex].firstname = firstname;
        contacts[contactIndex].phone = phone;
    }

    // enregistre à nouveau tous les contacts
    saveLocalStorage(STORAGE_NAME, contacts)

}

function refreshContactList() {
    var contacts, html, fullname;

    // récupération de tous les contacts
    contacts = getLocalStorage(STORAGE_NAME);

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

function clearAddressBook() {

    // pour vider la liste des contact, il suffit de la remplacer par un tableau vide
    saveLocalStorage(STORAGE_NAME, [])
}