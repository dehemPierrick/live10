<?php

class CircleShape extends EllipseShape {

    public function setSize($width, $height = null) {
        $this->width = $width;
        $this->height = $width;
    }

    function displayShape(Renderer $renderer) {
        return $renderer->displayCircle($this->location, $this->width, $this->color, $this->opacity);
    }
}