"use strict";


function onClickRemoveContact() {
    clearAddressBook();
    refreshContactList();
}

function onClickAddContact() {
    $('#contact-form')              // selection de l'élement
        .trigger('reset')           // remise à zero des champs
        .removeAttr('data-index')   // suppression de l'attrbut data
        .fadeIn();                  // affichage du formulaire
}

function onClickEditContact(event) {
    // on annule le comportement par défaut du clic sur le lien
    event.preventDefault();

    // on récupère la valeur de l'attribut data-index
    var contactIndex = $(this).data('index');

    // récupération des infos du contact séléctioné
    var contact = getContactInfos(contactIndex);

    // on met à jour les input du formulaire
    $('#lastname').val(contact.lastname);
    $('#firstname').val(contact.firstname);
    $('#phone').val(contact.phone);

    // on insert l'id du contact pour préciser qu'il s'agit d'un update
    // avant de faire apparaitre le formulaire
    $('#contact-form').data('index', contactIndex).fadeIn();
}

// Lorsqu'on clique sur un contact on affiche ses infos
function onClickContactList(event) {
    // on annule le comportement par défaut du clic sur le lien
    event.preventDefault();

    // Il y a deux propriété très importantes sur event qui permettent de récupérer
    // ce qui à déclenché l'évènement
    // event.currentTarget  ==> this
    // event.target         ==> l'enfant qui à déclenché l'évênement

    // on identifie la cible qui à été cliqué
    var link = event.target;

    // on récupère la valeur de l'attribut data-index
    var contactIndex = $(link).data('index');

    // récupération des infos du contact séléctioné
    var contact = getContactInfos(contactIndex);

    var contactDOM = $('#contact-infos');

    contactDOM.children('h2').text(contact.gender + " " + contact.lastname + " " + contact.firstname);
    contactDOM.children('p').text(contact.phone);
    contactDOM.children('a').data('index', contactIndex);

    contactDOM.fadeIn();
}


// envoi du formulaire de création de nouveau contact
function onSubmitContactForm(event) {

    // on annule l'envoi du formulaire au PHP
    event.preventDefault();

    // this correspond au formulaire, car c'est lui qui à déclenché l'evt "submit"
    // l'objet HTMLFORMelement est particulier car il possède en propriétés les input
    // et élément enfants qui possèdent un name ainsi on peut récupérer leur values
    var gender = this['gender'].value;
    var lastname = this['lastname'].value;
    var firstname = this['firstname'].value;
    var phone = this['phone'].value;

    // on vérifie que les champs ne sont pas vides ( rappel 0 <==> false)
    if (!lastname.length || !firstname.length || !firstname.length) {
        // sinon on annule l'enregistrement du contact
        window.alert('veuillez remplir tous les champs');
        return false;
    }

    // récupération de l'attribut data-index si le formulaire est une édition
    var contactIndex = $(this).data('index');

    // on crée le contact ou on l'édite, si l'attribut data-index à été défini
    addContact(gender, lastname, firstname, phone, contactIndex);

    // on met à jour la liste dans le DOM
    refreshContactList();

    // on masque le formulaire et on le remet à zero
    $(this).fadeOut().trigger('reset');
}
