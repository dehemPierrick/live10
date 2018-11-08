'use strict';

/////////////////////////////////////////////////////////////////////////////////////////
// FONCTIONS                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////
function checkForms() {
    var form = $('form');
    if (form.length) {
        var formValidator = new FormValidator(form);
        formValidator.validateForm();
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
// CODE PRINCIPAL                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////

$(function () {
    // affichage des erreurs dans les formulaires
    var errorMessage = $('.error-message');
    if (errorMessage.find('li').length > 0) {
        errorMessage.fadeIn();
    }

    // affichage du flashBag
    var notice = $('.notice');
    if (notice.find('p').length) {
        notice.delay(2345).fadeOut(3210);
    }

    // vérification des formulaires
    checkForms();
});