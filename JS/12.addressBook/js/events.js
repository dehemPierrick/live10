"use strict";
function onClickContactList(event) {
    event.preventDefault();

    // event.currentTarget  ==> this
    // event.target         ==> l'enfant qui à déclenché l'évênement

    var link = event.target;
    event.target.classList.toggle('selected');

    var valeur = link.dataset.index;

    console.log(valeur);
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

    // enfin on crée le contact
    addContact(gender, lastname, firstname, phone);

    // on met à jour la liste dans le DOM
    refreshContactList();
}
