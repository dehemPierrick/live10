<?php

include "classes/Point.class.php";
include "classes/shapes/Triangle.class.php";
include "classes/shapes/Shape.class.php";
include "classes/shapes/Ellipse.class.php";
include "classes/shapes/Circle.class.php";
include "classes/shapes/Rectangle.class.php";
include "classes/shapes/Square.class.php";

include "classes/Renderer.class.php";
include "classes/Program.class.php";

// générer les html des formes
$renderer = new Renderer();

// configurer les paramètres des différentes formes
$program = new Program($renderer);


$html_shapes = $renderer->getHtmlShapes();



include "index.phtml";