<?php


// fichier de connexion à pdo (normalement on  le range pas la mais c'est pour par perturber jojo)
require_once "php\pdo.php";

// 1. On choisit quelle page afficher (en général VUE\CONTROLLEUR) c'est le DISPATCHER
require_once "php\dispatcher.php";

// 2. On récupère les données à afficher et on reçoit les formulaires, c'est le CONTROLLEUR
require_once "php\controller.php";

// 3. Enfin on affiche le template et les données, c'est la VUE
include "pages\layout.phtml";