"use strict";


/*
 var monTableau;
 monTableau = new Array();
 monTableau[19] = "tomates";

 console.log(monTableau[19]);
 */

var colors;  // undefined
var indexRed;

//colors = []; // pareil que new Array();

colors = "salut";

// on peut utiliser une variable dynamique dans un tableau;
var index = parseInt(window.prompt('quelle couleur ?'));

// définition
colors[0] = "yellow";
colors[1] = "orange";
colors[2] = "red";
colors[3] = "purple";

console.log(colors[index]);