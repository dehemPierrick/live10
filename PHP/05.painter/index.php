<?php

// Fonction d'auto chargement des classes, elle permet de se passer complètement de includes
spl_autoload_register(function ($classname) {
    /*
     * on analyse le nom de la classe instanciée (ex : new SquareShape())
     * ainsi on peut reconstruire le chemin d'accès a son fichier de classe
     * substr cherche les 5 dernière caractères dans SquareShape, s'ils sont
     * égal à "Shape", on va dans le dossier /shape/
     */

    if (substr($classname, -5, 5) == "Shape") {
        include "classes/shapes/$classname.class.php";
    } else {
        include "classes/$classname.class.php";
    }
});

// générer les html des formes
$renderer = new Renderer();

// configurer les paramètres des différentes formes
$program = new Program($renderer);

$html_shapes = $renderer->getHtmlShapes();

include "index.phtml";


