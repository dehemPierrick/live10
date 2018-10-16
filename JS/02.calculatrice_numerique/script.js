"use strict";


// déclaration
var number1, number2;
var operator;
var result;

// récupération des données
number1 = parseFloat(window.prompt('nombre1 :'));
operator = window.prompt('opérateur : +, -, /, *, ^');
number2 = parseFloat(window.prompt('nombre2 :'));

// faire le calcul
/*
 // on vérifie que les entrée sont bien des nombres
 if( operator == "+" || operator == "plus") {
 result = number1 + number2;

 } else if( operator == "-" || operator == "moins") {
 result = number1 - number2;

 } else if( operator == "*" || operator == "multiplier") {
 result = number1 * number2;

 } else if( operator == "/" || operator == "diviser") {
 if(number2 != 0) {
 result = number1 / number2;
 }

 } else if( operator == "^" || operator == "puissance") {
 result = Math.pow(number1, number2);

 } else {
 document.write("<p>Opérateur inconnu</p>");
 }
 */

switch (operator) {
    case "plus":
    case "+":
        result = number1 + number2;
        break;

    case "moins":
    case "-":
        result = number1 - number2;
        break;

    case "multiplier":
    case "*":
        result = number1 * number2;
        break;

    case "diviser":
    case "/":
        if (number2 != 0) {
            result = number1 / number2;
        } else {
            document.write("On ne peux pas diviser par zero")
        }
        break;

    case "puissance":
    case "^":
        result = Math.pow(number1, number2);
        break;

    default:
        document.write("<p>Opérateur inconnu</p>");
}

// afficher le résultat
if (result == undefined || isNaN(result)) {
    document.write('<p>Une erreur dans le calcul est survenue</p>');
} else {
    document.write('<p>' + number1 + " " + operator + " " + number2 + " = " + result + '</p>');
}