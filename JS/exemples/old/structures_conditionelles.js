"use strict";
/*
 - structures conditionnelles (if elseif else)
 - opérateurs de comparaison (== != <= >= ... )
 - booleen (true false)
 - opérateurs logiques ( "et" -> && / "ou" -> ||)
 */

// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************

var condition1, condition2, condition3, condition4, condition5;

if (condition1) {
    // execution de la commande si la condition est vraie
} else if (condition2) {
    // execution de la commande si la condition 2 est vraie
} else if (condition3) {
    // execution de la commande si la condition 3 est vraie
} else if (condition4) {
    // execution de la commande si la condition 4 est vraie
} else if (condition5) {
    // execution de la commande si la condition 5 est vraie
} else {
    // execution de la commande dans TOUS les autres case
    // le est est toujours en dernier
}


// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************

var isAdult, age, majority, isCentenial, isNotThirty;

age = parseInt(window.prompt('Quel est votre âge ?'));
majority = 21;

isAdult = (age >= majority);
isCentenial = (age == 100);
isNotThirty = (age !== 30);

// êtes vous majeur
if (isAdult) {
    console.log("vous êtes majeur");
} else {
    console.log("vous n'êtes pas majeur")
}

// êtes vous centenaires
if (isCentenial) {
    console.log("Vous avez exactement 100 ans");
}

// n'avez vous pas 30 ans
if (isNotThirty) {
    console.log("Vous n'avez pas 30 ans");
} else {
    console.log("vous avez 30 ans")
}


// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************

if (condition1 == true && condition2 == true) {
    // s'execute si la condition1 ET la condition2 sont vrai
}

if (condition1 == true || condition2 == true) {
    // s'execute si la condition1 OU la condition2 sont vrai
}

var phrase = "phrase phrase phrase";
if (phrase.length > 10 && phrase.length < 30) {
    console.log("la phrase est plus longue que 10 caractères")
}

var direction = "nord";
if (direction == "est" || direction == "ouest" || direction == "sud") {
    console.log("vous n'allez pas dans la bonne direction");
} else {
    console.log("vous allez dans la bonne direction");
}
