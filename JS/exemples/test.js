"use strict";


// execution d'une fonction une seule fois après 5 secondes
function apresLaPause() {
    console.log('le réconfort');
}
setTimeout(apresLaPause, 5000);


// répétition de la fonction trotteuse à chaque 1s d'interval
function trotteuse() {
    var date = new Date();
    console.log(date.getSeconds());

    if (date.getSeconds() > 30) {
        clearInterval(trotteuse_interval);
    }
}

var trotteuse_interval = setInterval(trotteuse, 1000);

