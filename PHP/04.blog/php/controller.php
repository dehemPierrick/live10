<?php
/**
 * Ce fichier est responsable des données à afficher dans la page,
 * C'est aussi lui qui est sensé gérer la réception d'éventuel formulaire.
 * En général, on à un controlleur pour une page.
 */

// récupérations des données à renvoyer à la vue en fonction du template choisi
switch ($template) {
    // page pour le contenu d'un article
    case "article":
        require_once "php/controllers/articlesController.php";
        break;
    // panneau d'administration
    case "admin":
        require_once "php/controllers/adminController.php";
        $articles = fetchAll("SELECT id, author, creationDate, title, category FROM articles ORDER BY creationDate DESC");
        $comments = fetchAll("SELECT id, author, email, content, articles_id, creationDate FROM comments ORDER BY creationDate DESC");
        break;
    // page d'édition d'un article
    case "adminEditArticle":
        require_once "php/controllers/adminEditArticleController.php";
        break;
    // page d'accueil (page par défaut);
    default:
        $articles = fetchAll("SELECT id, title, category FROM articles ORDER BY creationDate DESC");
        break;
}