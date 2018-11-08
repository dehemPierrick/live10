"use strict";

var FormValidator = function (form) {
    this.form = form;
    this.errorMessage = this.form.find('.error-message');
    this.errors = [];
};

FormValidator.prototype.checkFieldRequired = function () {
    var field, name;
    var requiredFields = $('[data-required]');

    // on boucle sur tous les champs qui possèdent l'attribut data-required
    for (var index = 0; index < requiredFields.length; index++) {
        field = $(requiredFields[index]);
        name = field.data('name');

        // si la longueur de la value de l'input est de zero
        if (field.val().length == 0) {
            // on ajoute le message d'erreur
            this.errors.push('Le champ <strong>' + name + '</strong> est requis');
        }
    }
};

FormValidator.prototype.checkFieldLength = function () {
    var field, name, maxlength;
    var requiredFields = $('[data-max-length]');

    // on boucle sur tous les champs qui possèdent l'attribut data-required
    for (var index = 0; index < requiredFields.length; index++) {
        field = $(requiredFields[index]);
        name = field.data('name');
        maxlength = field.data('maxLength');

        // si la longueur de la value de l'input > à maxLength
        if (field.val().length > maxlength) {
            // on ajoute le message d'erreur
            this.errors.push('Le champ <strong>' + name + '</strong> doit être plus petit que ' + maxlength);
        }
    }
};

FormValidator.prototype.checkFieldTypes = function () {

};

FormValidator.prototype.displayErrors = function () {

    // création d'un <ul> en mode bac à sable
    var ul = $('<ul>');

    // boucle sur toutes les erreurs
    for (var index = 0; index < this.errors.length; index++) {
        // insertion des erreurs avec un <li> dans le <ul>
        ul.append($('<li>').html(this.errors[index]));
    }

    // enfin remplace l'<ul> déjà existant dans le DOM
    this.errorMessage.find('ul').replaceWith(ul);

};

FormValidator.prototype.onSubmitForm = function (event) {
    // remise des erreurs à zero
    this.errors = [];

    // vérification du formulaire
    this.checkFieldRequired();
    this.checkFieldTypes();
    this.checkFieldLength();


    // action s'il y a des erreurs sur la page
    if (this.errors.length > 0) {
        event.preventDefault();
        this.displayErrors();
    }
};

FormValidator.prototype.validateForm = function () {
    this.form.submit(this.onSubmitForm.bind(this));
};

