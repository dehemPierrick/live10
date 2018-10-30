<?php

class Shape {
    protected $location;
    protected $width;
    protected $height;
    protected $color;
    protected $opacity;

    function __construct() {
        $this->width = 100;
        $this->height = 100;
        $this->color = 'tomato';
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
}