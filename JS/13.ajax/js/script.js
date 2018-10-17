"use strict";

var onAjaxHtml = function (resultat) {
    $('#resultat').empty().append(resultat);
};

var onAjaxJson = function (json_datas) {
    var dl = $('<dl>');

    $.each(json_datas, function (cle, valeur) {
        dl.append($('<dt>').text(cle));
        dl.append($('<dd>').text(valeur));
    });

    $('#resultat').empty().append(dl);


    /* utiliser les listes de définitions
     <dl>
     <dt>titre</dt><dd>description</dd>
     <dt>titre</dt><dd>description</dd>
     <dt>titre</dt><dd>description</dd>
     </dl>
     */
};


var onSubmitForm = function (event) {
    event.preventDefault();

    switch (this.choice.value) {
        case 'html':
            $.get("pages/get-html-article.html", '', onAjaxHtml);
            break;
        case 'json':
            $.getJSON("pages/get-json-data.php", '', onAjaxJson);
            break;
        case 'movies':
            $.get("pages/get-html-movies.php", '', onAjaxHtml);
            break;
    }
};


$(function () {
    $('form').submit(onSubmitForm);
});
