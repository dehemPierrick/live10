'use strict';   // Mode strict du JavaScript

/*******************************************
 Declarations
 *******************************************/

var shoppingList;

shoppingList = [];

// ajouter un produit à la liste des courses
function addProduct(productName) {
    // on supprime les faux espaces et les majuscules
    productName = productName.trim().toLowerCase();

    // insertion du produit à la fin du tableau
    shoppingList.push(productName);
    displayList();
}

// effacer un produit de la liste des courses
function removeProduct(productName) {

    // on supprime les faux espaces et les majuscules
    productName = productName.trim().toLowerCase();

    // on recherche la position du produit dans le tableau
    // mais ça retourne -1 si l'élément n'est pas trouvé
    var index = shoppingList.indexOf(productName);

    if (index == -1) {
        console.log('produit ' + productName + ' introuvable')
    } else {
        shoppingList.splice(index, 1);
    }
    displayList();
}

// affiche la liste des courses
function displayList() {
    var output = "";
    console.clear();
    console.log("%cVotre Liste des courses contient " + shoppingList.length + " produit(s)\n" +
        "------------------------------------------------------------", 'color:red;font-size:18px;font-weight:bold');

    for (var index = 0; index < shoppingList.length; index++) {
        output += '\t- ' + shoppingList[index] + '\n';
    }

    console.log('%c' + output, 'color:blue');
}

// efface la liste des courses
function clearList() {
    shoppingList = [];
    displayList();
}

/*******************************************
 execution
 *******************************************/
shoppingList = ['salade', 'tomate', 'oignon'];
displayList();