<?php

const FILE_NAME = "tasks.csv";
require_once "utilities.php";

// récupération de la date d'aujourd'hui
$now = date_create();

// récupération des taches à afficher
$tasks = get_csv(FILE_NAME);


include 'todolist.phtml';