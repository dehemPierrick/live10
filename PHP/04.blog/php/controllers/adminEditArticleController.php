<?php


/*****************************************************
 *        RECEPTION DES DONNEES DU FORMULAIRE
 *****************************************************/

if (!empty($_POST)) {
    // filtrage des champs récupérés depuis le formulaire d'insertion
    $title = trim($_POST['title']);
    $content = trim($_POST['content']);
    $author = trim($_POST['author']);
    $category = trim($_POST['category']);
    $article_id = intval($_POST['article_id']);
    // vérification des champs vides
    if (empty($title) OR empty($author) OR empty($content)) {
        header("Location: index.php?page=admin&error=Veuillez%20remplir%20tous%20les%20champs");
    } else {
        if (empty($article_id)) {
            $sql = "INSERT INTO articles (title,content, author, category, creationDate)
                    VALUES (?,?,?,?,NOW())";
            execute($sql, [$title, $content, $author, $category]);
        } else {
            // requête de mise à jour des données de l'article
            $sql = "UPDATE `articles`
                  SET title = ?,
                      content = ?,
                      author =  ?,                   
                      category = ?,
                      creationDate =NOW()
                  WHERE id = ?";
            execute($sql, [$title, $content, $author, $category, $article_id]);
        }
        header("Location: index.php?page=admin");
    }
}


/*****************************************************
 *      AFFICHAGE ET RECUPERATION DU FORMULAIRE
 *****************************************************/

if (array_key_exists('id', $_GET) && ctype_digit($_GET['id'])) {
    // filtrage de l'id
    $id = intval($_GET['id']);
    // récupérer les données de l'article de la bdd
    $sql = "SELECT id, author, title, content, category
            FROM articles
            WHERE id = ?";
    $article = fetch($sql, [$id]);
} else {
    // création d'un article par défaut dans le cas de la création du formulaire
    $article = [
        'author' => '',
        'content' => '',
        'title' => '',
        'category' => ''
    ];
}
