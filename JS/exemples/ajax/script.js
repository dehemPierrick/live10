"use strict";

function onAjaxSuccess(order) {
    if (order) {
        $('#index').text(order['orderNumber']);
        $('#date').text(order['orderDate']);
        $('#customerName').text(order['customerName']);
        $('#status').text(order['status']);
        $('#price').text(order['totalPrice'].toFixed(2) + ' €');
    } else {
        window.alert('mauvais numéro de commande');
    }
}

function onClickRefreshDatas() {

    var orderNumber = $('[name=orderNumber]').val();

    // $.get() et un alias de $.ajax(), il attends 4 paramètres
    $.get(
        'ajax.php',                     // url de la page à contacter
        'orderNumber=' + orderNumber,   // paramètres à envoyer (query string)
        onAjaxSuccess,                  // fonction à exécuter après le succès de la requête
        'json'                          // type de réponse attendu (text/html/xml/json)
    );
}


/*
 voici successivement toutes les manières d'attendre le chargement du dom, du plus long au plus court
 document.addEventListener('DOMContentLoaded', function() {  });
 $(document).on('DOMContentLoaded', function() {  });
 $(document).ready(function() {  });
 $(function() {  });
 */

$(function () {
    // install un écouteur d'évènement sur le bouton
    $('#getOrder').click(onClickRefreshDatas);
});
