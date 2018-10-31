<?php


class TriangleShape {

    private $point1;
    private $point2;
    private $point3;
    private $opacity;
    private $color;

    function __construct() {
        $this->point1 = new Point();
        $this->point2 = new Point();
        $this->point3 = new Point();
    }

    public function setColor($color) {
        $this->color = $color;
    }

    public function setOpacity($opacity) {
        $this->opacity = $opacity;
    }

    public function setLocation($x1, $y1, $x2, $y2, $x3, $y3) {
        $this->point1->move($x1, $y1);
        $this->point2->move($x2, $y2);
        $this->point3->move($x3, $y3);
    }

    function displayShape(Renderer $renderer) {
        return $renderer->displayTriangle($this->point1, $this->point2, $this->point3, $this->color, $this->opacity);
    }


}