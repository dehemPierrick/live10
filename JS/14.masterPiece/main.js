"use strict";

var canvas;


function onClickCanvas(event) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = getRandomColor();

    ctx.beginPath();

    // tracé du cercle
    var x = event.offsetX;
    var y = event.offsetY;
    var radius = getRandomInteger(20, 150);
    var finalAngle = 2 * Math.PI;
    ctx.arc(x, y, radius, 0, finalAngle);

    // remplissage de la forme
    ctx.fill();

    // fin du tracé (pour passer à la forme suivante)
    ctx.closePath();

}

/*function drawArrow(){
 var ctx = canvas.getContext('2d');
 ctx.fillStyle = "pink";
 ctx.strokeStyle = "black";
 ctx.beginPath();
 ctx.moveTo(400,50);
 ctx.lineTo(100,200);
 ctx.lineTo(400,350);
 ctx.lineTo(300,200);
 ctx.closePath();
 ctx.fill();
 ctx.stroke();
 }*/

$(function () {
    canvas = document.getElementById('masterPiece');
    canvas.addEventListener('click', onClickCanvas);
});