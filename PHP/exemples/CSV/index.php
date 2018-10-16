<?php


function save_csv($datas, $fileName) {
    // ouverture de la ressource en écriture
    $file = fopen($fileName, 'w');


    // insertion de la ligne dans le tableau
    foreach ($datas as $line) {
        fputcsv($file, $line);
    }

    // fermeture de la ressource
    fclose($file);
}

function get_csv($fileName) {
    // ouverture de la ressource en lecture
    $file = fopen($fileName, 'r');

    $datas = [];

    // quand il n'y a plus de ligne à retourner, fgetscsv retourne false
    while ($line = fgetcsv($file)) {

        // génération du tableau de données
        array_push($datas, $line);

    }

    return $datas;
}

function remove_students($a_virer) {
    $students = get_csv(FILE_NAME);
    $new_datas = [];

    foreach ($students as $key => $student) {

        // si l'id de l'étudiant n'est pas à virer
        if (in_array($key, $a_virer) == false) {

            // alors on l'enregistre dans le nouveau tableau
            array_push($new_datas, $student);
        }
    }
    // enfin on réenregistre le tout
    save_csv($new_datas, FILE_NAME);
}


///////////////////////////////////////////////////////////////////////

const FILE_NAME = "students.csv";

$a_virer = [1, 2, 3, 4];
remove_students($a_virer);



/*
    function ma_fonction(){
        return ['tomate', 'salade']
    };

    if( $datas = ma_fonction() ){
        // est ce que j'ai réussi à stocker la donnée
        // est ce que ma fonction retourne quelque chose
    } else {
        // enregistrement de la donnée impossible
        // ma fonction ne retourne rien ou false ou null
    }
*/

















