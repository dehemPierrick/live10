"use strict";

var boat = document.getElementById('boat');

function moveBoat() {

    if (boat.offsetLeft > document.body.clientWidth - boat.clientWidth) {
        clearInterval(interval);
    } else {
        boat.style.left = boat.offsetLeft + 10 + "px";
    }
}


var interval = setInterval(moveBoat, 50);