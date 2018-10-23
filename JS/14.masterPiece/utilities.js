"use strict";

function getRandomInteger(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getRandomColor() {
    var red = getRandomInteger(0, 255);
    var blue = getRandomInteger(0, 255);
    var green = getRandomInteger(0, 255);
    var alpha = Math.random();
    return "rgba(" + red + "," + blue + "," + green + "," + alpha + ")";
}