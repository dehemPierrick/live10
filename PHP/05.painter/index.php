<?php

include "shapes/Rectangle.class.php";
include "Program.class.php";

$program = new Program();
$program->setShapes();

$shapes = $program->getShapes();

$rectangle = new Rectangle();
$rectangle->setPosition(10, 20);

include "index.phtml";