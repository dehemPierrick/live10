'use strict';   // Mode strict du JavaScript

/*******************************************
 Declarations
 *******************************************/

var x, y, html, tableMulti, tableSize;

tableMulti = [];
html = "";


/*******************************************
 Programme
 *******************************************/

tableSize = parseInt(window.prompt('Quelle taille de la table ?'));

for (x = 1; x <= tableSize; x++) {
    tableMulti[x] = [];
    for (y = 1; y <= tableSize; y++) {
        tableMulti[x][y] = x * y;
    }
}


/*******************************************
 Affichage
 *******************************************/

for (x = 1; x <= tableSize; x++) {
    html += "<tr>";

    for (y = 1; y <= tableSize; y++) {
        // écriture ternaire d'un if x==y
        var square = x == y ? 'square' : '';

        html += '<td class="' + square + '">';
        html += tableMulti[x][y];
        html += "</td>";
    }

    html += "</tr>";
}

document.write(html);