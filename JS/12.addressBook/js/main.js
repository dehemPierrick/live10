"use strict";

// on attend que le DOM soit chargé
$(function () {
    // création des écouteurs d'évènement
    $('#remove-contacts').click(onClickRemoveContact);
    $('#increase-contact').click(onClickAddContact);
    $('#contact-form').submit(onSubmitContactForm);
    $('#contact-list').click(onClickContactList);
    $('#contact-infos').find('a').click(onClickEditContact);

    refreshContactList();

});
