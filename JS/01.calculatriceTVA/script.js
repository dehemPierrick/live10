"use strict";

// Déclaration des variables
const TAUX_TVA = 20;
var montantHT;
var montantTTC;
var montantTVA;
var isDiscount;
var remise;

// Définition
montantHT = parseFloat(window.prompt('Merci de saisir le montant HT'));
isDiscount = window.prompt('Voulez-vous appliquer une remise ? \n- oui \n- non');

if (isDiscount == "oui" || isDiscount == "yes" || isDiscount == "chocolat" && isDiscount != "bateau") {
    remise = parseFloat(window.prompt('De combien est la remise ? (en pourcentage)'));
    document.write('Une remise de ' + remise + '% à été appliquée');

    // déduction de la remise en pourcentage
    montantHT -= montantHT * remise / 100;
} else {
    document.write('aucune remise n\'a été appliqué');
}

montantTVA = montantHT * TAUX_TVA / 100;  // (20)
montantTTC = montantHT + montantTVA;      // ("100" + 20 ==> 10020)

// affichage
document.write('<p>Le montant HT est de ' + montantHT + ' €</p>');
document.write('<p>Le montant de TVA est de ' + montantTVA + ' €</p>');
document.write('<p><strong>Le resultat TTC est de ' + montantTTC + ' €</strong></p>');

