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
    var contacts, fullname, ul, a, index;

    // récupération de tous les contacts
    contacts = getLocalStorage(STORAGE_NAME);

    // création d'un conteneur
    ul = $('<ul>');

    // génération de la nouvelle liste des contacts
    for (index = 0; index < contacts.length; index++) {
        fullname = contacts[index].firstname + " " + contacts[index].lastname;

        // on insert le a dans le li et enfin dans le ul, le tout dans la même ligne
        ul.append($('<li>').append(
            $('<a>')
                .attr({href: '#', title: 'éditez le contact ' + fullname})  // modification des attributs
                .data('index', index)                                         // ajout du data-index
                .text(fullname)                                               // changement du text du lien
        ));
    }

    // on vire l'ancienne liste ul pour la remplacer par la nouvelle
    // Attention à ne pas modifier le DOM dans la boucle pour éviter
    // de reconstruire le DOM 20 fois, c'est qui est très gourmand en RAM
    // on ne fait le append dans le DOM qu'une seule fois à la fin de la fonction
    $('#contact-list').empty().append(ul);

}

function clearAddressBook() {

    // pour vider la liste des contact, il suffit de la remplacer par un tableau vide
    saveLocalStorage(STORAGE_NAME, [])
}