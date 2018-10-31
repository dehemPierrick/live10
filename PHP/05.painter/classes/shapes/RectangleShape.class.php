<?php

class RectangleShape extends Shape {

    // constructeur de classe : cette méthode s'execute
    // à chaque instantiation (new) d'une classe

    public function displayShape(Renderer $renderer) {
        return $renderer->displayRectangle($this->location, $this->width, $this->height, $this->color, $this->opacity);
    }
}


