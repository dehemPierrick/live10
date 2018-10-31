<?php

class Renderer {

    private $shapes = [];

    // ajoutoe une instance de forme dans la liste
    function addShape($shape) {
        array_push($this->shapes, $shape);
    }

    // génère la la balise SVG nécessaire à l'affichage
    function getHtmlShapes() {
        $html_shapes = "";

        /*
         * utilisation du polymorphisme ici, on ne sait pas ce que contient $shape
         * mais l'on sait que touts les  objets contiennent une méthode comune : displayShape()
         * il faut également transmettre l'instance de Renderer en paramètre pour permettre
         * à la fonction de revenir dans la classe Renderer
         */
        foreach ($this->shapes as $shape) {
            $html_shapes .= $shape->displayShape($this);
        }
        return $html_shapes;
    }

    function displayCircle(Point $location, $width, $color, $opacity) {
        return '<circle cx="' . $location->getX() . '" cy="' . $location->getY() . '" r="' . $width . '" fill="' . $color . '" opacity="' . $opacity . '"/>';
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
        return '<ellipse cx="' . $location->getX() . '" cy="' . $location->getY() . '" rx="' . $width . '" ry="' . $height . '" fill="' . $color . '" opacity="' . $opacity . '"/>';
    }

    function displayRectangle(Point $location, $width, $height, $color, $opacity) {
        return '<rect x="' . $location->getX() . '"  y="' . $location->getY() . '" width="' . $width . '"  height="' . $height . '"  fill="' . $color . '" opacity="' . $opacity . '"/>';
    }
}