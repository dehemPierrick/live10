"use strict";

var contactInfos, addContact_btn, removeContact_btn;

// on attend que le DOM soit chargé (sur document)
document.addEventListener('DOMContentLoaded', function () {

    // pour pouvoir identifier les éléments du DOM
    contactInfos = document.getElementById('contact-infos');
    addContact_btn = document.getElementById('add-contact');
    removeContact_btn = document.getElementById('remove-contacts');

    // formulaire d'ajout d'un nouveau contact
    document.getElementById('contact-form').addEventListener('submit', onSubmitContactForm);

    refreshContactList();

    // on met l'écouteur sur la liste des contacts, et pas les contacts individuels,
    // car la liste est régulièrement régénéré et les écouteurs d'évènements disparaissent
    document.getElementById('contact-list').addEventListener('click', onClickContactList, true);


});
