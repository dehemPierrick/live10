"use strict";

// on attend que le DOM soit chargé (sur document)
document.addEventListener('DOMContentLoaded', function () {

    // vider le carnet d'adresse
    document.getElementById('remove-contacts').addEventListener('click', onClickRemoveContact);

    // afficher le formulaire d'ajout de contact
    document.getElementById('add-contact').addEventListener('click', onClickAddContact);

    // formulaire d'ajout d'un nouveau contact
    document.getElementById('contact-form').addEventListener('submit', onSubmitContactForm);

    // on met l'écouteur sur la liste des contacts, et pas les contacts individuels,
    // car la liste est régulièrement régénéré et les écouteurs d'évènements disparaissent
    document.getElementById('contact-list').addEventListener('click', onClickContactList, true);

    // lien d'édition du contact
    document.querySelector('#contact-infos a').addEventListener('click', onClickEditContact);

    // mise à jour de la liste des contacts
    refreshContactList();

});
