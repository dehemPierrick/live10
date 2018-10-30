<?php


class Program {

    private $shapes;

    function getShapes() {
        return $this->shapes;
    }

    function setShapes() {

        $this->shapes = [];

        $rectangle = new Rectangle();
        $rectangle->setLocation(200, 200);
        $rectangle->setSize(200, 300);
        $rectangle->setOpacity(.6);
        $rectangle->setColor("purple");
        $this->addShape($rectangle);

        $rectangle2 = new Rectangle();
        $rectangle2->setSize(120, 250);
        $rectangle2->setLocation(300, 250);
        $rectangle2->setOpacity(.9);
        $rectangle2->setColor("green");
        $this->addShape($rectangle2);

        $rectangle3 = new Rectangle();
        $this->addShape($rectangle3);

    }

    function addShape($shape) {
        array_push($this->shapes, $shape);
    }
}