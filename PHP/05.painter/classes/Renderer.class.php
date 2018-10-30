<?php

class Renderer {

    private $shapes = [];

    function getShapes() {
        return $this->shapes;
    }

    function addShape($shape) {
        array_push($this->shapes, $shape);
    }

    function getHtmlShapes() {
        $html_shapes = "";

        foreach ($this->shapes as $shape) {
            $html_shapes .= $shape->displayShape($this);
        }

        return $html_shapes;
    }

    function displayCircle(Point $location, $width, $color, $opacity) {
        return '<circle 
                cx="' . $location->getX() . '" 
                cy="' . $location->getY() . '" 
                r="' . $width . '" 
                fill="' . $color . '" 
                opacity="' . $opacity . '"/>';
    }

    function displayTriangle(Point $point1, Point $point2, Point $point3, $color, $opacity) {
        $x1 = $point1->getX();
        $y1 = $point1->getY();
        $x2 = $point2->getX();
        $y2 = $point2->getY();
        $x3 = $point3->getX();
        $y3 = $point3->getY();

        return "<polygon  points=\"$x1,$y1 $x2,$y2 $x3,$y3\"   fill=\"$color\" opacity=\"$opacity\"></polygon>";
    }

    function displayEllipse(Point $location, $width, $height, $color, $opacity) {
        return '<ellipse 
                cx="' . $location->getX() . '" 
                cy="' . $location->getY() . '" 
                rx="' . $width . '" 
                ry="' . $height . '" 
                fill="' . $color . '" 
                opacity="' . $opacity . '"/>';
    }

    function displayRectangle(Point $location, $width, $height, $color, $opacity) {
        return '<rect   x="' . $location->getX() . '"  y="' . $location->getY() . '"  width="' . $width . '"  height="' . $height . '"  fill="' . $color . '" opacity="' . $opacity . '"/>';
    }
}