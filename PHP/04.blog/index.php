<?php

require_once "php/pdo.php";

// définition d'une page par défaut "home"
$template = "home";

// récupération de la clé "page" dans l'url pour modifier la page à afficher
if (array_key_exists('page', $_GET)) {

    // choix de la page
    $template = $_GET['page'];

    // affichage de la page 404 si la page n'existe pas
    if (!is_file("pages/$template.phtml")) {
        $template = 404;
    }
}

//////////////////////////////////////////////////////////////////////////

$articles = fetchAll("SELECT id, title, category FROM articles");


// ce long test moche ne sert qu'a vérifier que j'ai une url de type :
// index.php?page=article&&id=XX
if (array_key_exists('page', $_GET) &&      // vérification que page est présente
    $_GET['page'] == 'article' &&           // vérification que page == article
    array_key_exists('id', $_GET) &&        // vérification que id est présent
    ctype_digit($_GET['id'])
)               // vérification que id est bien un nombre
{

    // filtrage de l'id
    $article_id = intval($_GET['id']);

    // requête de récupération des infos de l'article
    $sql = "SELECT id, author, title, content, category, creationDate 
            FROM articles
            WHERE id = ?
    ";

    $article = fetch($sql, [$article_id]);
}


//////////////////////////////////////////////////////////////////////////
include "pages/layout.phtml";