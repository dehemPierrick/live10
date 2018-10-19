<?php

/******************************************************
 *                      AFFICHAGE
 *****************************************************/
// si l'id de l'article est fourni est qu'il est numérique
if (array_key_exists('id', $_GET) && ctype_digit($_GET['id'])) {
    // filtrage de l'id
    $article_id = intval($_GET['id']);

    // Récupération de l'article
    $sql = "SELECT id, author, title, content, category, creationDate
                    FROM articles
                    WHERE id = ?";
    $article = fetch($sql, [$article_id]);

    // Récupération des commentaires liés à l'article
    $sql = "SELECT id, author, content, creationDate
                    FROM comments
                    WHERE articles_id = ?
                    ORDER BY creationDate DESC";
    $comments = fetchAll($sql, [$article_id]);
}

if (empty($article)) {
    header("Location: index.php?page=404");
}


/*****************************************************
 *          RECEPTION D'UN NOUVEAU COMMENTAIRE
 *****************************************************/

if (array_key_exists('add_comment', $_POST)) {

    // filtrage des champs récupérés depuis le formulaire d'insertion
    $author = trim($_POST['author']);
    $email = trim($_POST['email']);
    $content = trim($_POST['content']);
    $article_id = intval($_POST['article_id']);

    // vérification des champs vides
    if (empty($author) OR empty($email) OR empty($content)) {
        header("Location: index.php?page=article&id=$article_id&error=Veuillez%20remplir%20tous%20les%20champs");
    } else {

        $sql = "INSERT INTO comments (author, email, content, creationDate, articles_id) 
                VALUES(?, ?, ?, NOW(), ?)";


        execute($sql, [$author, $email, $content, $article_id]);


        header("Location: index.php?page=article&id=$article_id&success=Votre commentaire à bien été envoyé");
    }
}
