<?php

const FILE_NAME = "tasks.csv";
require_once "utilities.php";

function remove_tasks(array $to_delete) {
    $tasks = get_csv(FILE_NAME);
    $new_datas = [];

    foreach ($tasks as $task_id => $task) {

        // est ce que l'id de la tâche est dans le tableau des éléments à supprimer
        if (in_array($task_id, $to_delete) == false) {

            // alors on l'enregistre dans le nouveau tableau
            array_push($new_datas, $task);
        }
    }

    // enfin on réenregistre le tout
    save_csv($new_datas, FILE_NAME);
}

// reception du formulaire
if (array_key_exists('remove-task', $_POST)) {
    // on envoi le tableau des tâches à virer ex: [3,6,7]
    remove_tasks($_POST['indexes']);
}

header("Location: index.php");