<?php

const DRAW_LIMIT = 6;
const DRAW_MAX = 49;
const DRAW_MIN = 1;

function generate_draw() {
    $draw = [];

    for ($count = 1; $count <= DRAW_LIMIT; $count++) {

        do {
            $number = rand(1, DRAW_MAX);
        } while (in_array($number, $draw));
        array_push($draw, $number);
    }

    sort($draw);
    return $draw;
}

$draw = generate_draw();

include "index.phtml";


/*
    // suppression des { lorsque la structure de controle ne contient qu'une instruction
    foreach($fruits as $fruit)
        if(true)
            echo "bidule";
        else
            while(true){
                // -------
                // -------
                // -------
            }
    echo "saucisse";


    // refonte du for de la fonction :
   for($count = 1; $count <= 6; $count++)
        array_push($draw, rand(1, 49));
*/
