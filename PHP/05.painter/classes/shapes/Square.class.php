<?php


class Square extends Rectangle {

    /*
     * Surcharge de la méthode SetSize
     *
     *  - on conserve le même nom
     *  - on conserve la même portée
     *  - on conserve le même nombre de paramètres
     *  - on retourne le même type de données
     */
    public function setSize($width, $height = null) {
        $this->width = $width;
        $this->height = $width;
    }
}


///////////////////////////////////

$carre = new Square();
$carre->setSize(200, 200);