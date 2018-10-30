<?php

class Point {

    private $x, $y;

    function __construct() {
        $this->x = 0;
        $this->y = 0;
    }

    function move($x, $y) {
        $this->x = $x;
        $this->y = $y;
    }

    function getX() {
        return $this->x;
    }

    function getY() {
        return $this->y;
    }
}