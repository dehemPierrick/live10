<?php

const FILE_NAME = "tasks.csv";
require_once "utilities.php";

function add_task($title, $description, $date, $priority) {

    // récupération de toutes les tâches
    $tasks = get_csv(FILE_NAME);

    // mise au format de la nouvelle tâche
    $new_task = [$title, $description, $date, $priority];

    // ajout de la nouvelle tâche à laa fin de la liste
    array_push($tasks, $new_task);

    // réengegistrement de toutes les tâches
    save_csv($tasks, FILE_NAME);
}


// vérification de réception du formulaire
if (array_key_exists('add_task', $_POST)) {
    /*
        Quand on reçoi le formulaire, $_POST contient les données suivantes
        $_POST = [
            'title' => 'titre',
            'description' => 'description',
            'day' => 1,
            'month' => 1,
            'year' => 2018,
            'priority' => 'medium',
            'add_task' => 'Ajouter'
        ];
    */

    // On formate les données
    $title = strtolower(trim($_POST["title"]));
    $description = trim($_POST["description"]);

    // Format de stockage des dates YYYY-MM-DD HH:MM:SS MSMS
    $date = $_POST["year"] . "-" . $_POST["month"] . "-" . $_POST["day"];
    $priority = $_POST["priority"];


    // vérification des erreurs
    if (empty($title)) {
        // création d'un message d'erreur si le formulalaire est incomplet
        $error = '<p>Erreur, le champ titre est obligatoire</p>';


        // si tout va bien on peut enfin enregistrer la tâche
    } else {
        add_task($title, $description, $date, $priority);
    }
}

header("Location: index.php");

