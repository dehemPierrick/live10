"use strict";

// constructeur de la classe Pen
var Pen = function () {

    // création de deux propriétés pour Pen
    this.color = "black";
    this.size = 1;
    this.isDrawing = false;

};

Pen.prototype.colorToRGB = function (color) {
    return "rgb(" + color.red + "," + color.green + "," + color.green + ")";
};


/**
 * méthodes d'encapsulation des propriétés color & size
 *  - et un "setter" pour définir la propriété
 *  - un "getter" pour récupérer la propriété
 **/


Pen.prototype.setColor = function (color) {
    this.color = color;
};

Pen.prototype.getColor = function () {
    return this.color;
};


Pen.prototype.setSize = function (size) {
    this.size = size;
};
Pen.prototype.getSize = function () {
    return this.size;
};
