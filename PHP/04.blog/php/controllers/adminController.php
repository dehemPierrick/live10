<?php

/****************************************************************
 *          SUPPRESSION D'UN ARTICLE + LES COMMENTAIRES LIES
 ****************************************************************/

if (array_key_exists('id', $_GET) && ctype_digit($_GET['id']) && array_key_exists('action', $_GET)) {
    $action = $_GET['action'];
    // filtrage de l'id
    $id = intval($_GET['id']);
    switch ($action) {
        case 'removeArticle':
            // requête de suppression de l'article contenant l'id spécifié dans la query string
            $sql = "DELETE FROM `articles`
                    WHERE `id` = ?";
            // suppression dans la base de données
            execute($sql, [$id]);
            break;
        case 'removeComment':
            /****************************************************************
             *          SUPPRESSION D'UN COMMENTAIRE
             ****************************************************************/
            // requête de suppression du commentaire
            $sql = "DELETE FROM `comments`
                WHERE `id` = ?";
            // suppression du commentaire dans la base de données
            execute($sql, [$id]);
            break;
    }
}
