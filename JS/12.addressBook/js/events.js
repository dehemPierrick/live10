"use strict";


function onClickRemoveContact() {
    clearAddressBook();
    refreshContactList();
}

function onClickAddContact() {
    document.getElementById('contact-form').classList.remove('hidden');
}

function onClickEditContact(event) {
    // on annule le comportement par défaut du clic sur le lien
    event.preventDefault();

    // on récupère la valeur de l'attribut data-index
    var contactIndex = this.dataset.index;

    // récupération des infos du contact séléctioné
    var contact = getContactInfos(contactIndex);

    // identification du formulaire
    var contactForm = document.getElementById('contact-form');

    // on met à jour les input du formulaire
    contactForm['lastname'].value = contact.lastname;
    contactForm['firstname'].value = contact.firstname;
    contactForm['phone'].value = contact.phone;

    // on insert l'id du contact dans le formulaire
    // pour préciser qu'il s'agit d'un update
    contactForm.dataset.index = contactIndex;

    contactForm.classList.remove('hidden');
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
    var contactIndex = link.dataset.index;

    // récupération des infos du contact séléctioné
    var contact = getContactInfos(contactIndex);

    var contactDOM = document.getElementById('contact-infos');

    contactDOM.querySelector('h2').textContent = contact.gender + " " + contact.lastname + " " + contact.firstname;
    contactDOM.querySelector('p').textContent = contact.phone;
    contactDOM.querySelector('a').dataset.index = contactIndex;

    contactDOM.classList.remove('hidden');
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


    // on crée le contact ou on l'édite, si l'attribut data-index à été défini
    addContact(gender, lastname, firstname, phone, this.dataset.index);

    // on met à jour la liste dans le DOM
    refreshContactList();


    this.classList.add('hidden');
    this.reset();
}
