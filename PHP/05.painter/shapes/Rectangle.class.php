<?php

class Rectangle {

    public $location;
    private $width;
    private $height;
    private $color;
    private $opacity;

    // constructeur de classe : cette méthode s'execute
    // à chaque instantiation (new) d'une classe

    function __construct() {
        $this->width = 100;
        $this->height = 100;
        $this->color = 'red';
        $this->opacity = 1;

        // composition avec la classe Point;
        $this->location = new Point();

    }

    public function setSize($width, $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function setColor($color) {
        $this->color = $color;
    }

    public function setOpacity($opacity) {
        $this->opacity = $opacity;
    }

    public function setLocation($x, $y) {
        $this->location->move($x, $y);
    }

    public function displayShape() {
        return '<rect 
        x="' . $this->location->getX() . '" 
        y="' . $this->location->getY() . '" 
        width="' . $this->width . '" 
        height="' . $this->height . '" 
        fill="' . $this->color . '" 
        opacity="' . $this->opacity . '"/>';
    }

}