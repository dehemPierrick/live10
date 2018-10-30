<?php


class Ellipse extends Shape {

    function displayShape(Renderer $renderer) {
        return $renderer->displayEllipse($this->location, $this->width, $this->height, $this->color, $this->opacity);
    }
}