<?php

// définir les erreurs par défaut
$error = "";

// on a bien reçu le formulaire
if (array_key_exists('login_form', $_POST)) {
    // formatage des données
    $pseudo = trim($_POST['pseudo']);
    $password = $_POST;

    // vérification  des données
    if (!empty($pseudo) AND !empty($password)) {
        // si tout ce passe bien, oon tente la connexion,
    } else {
        // on retourne un message d'erreur le cas échant
        $error = "Tous les champs sont obligatoires";
    }
}

?>


<form method="post">
    <ul>
        <?php if (!empty($error)): ?>
            <li><?= $error ?></li>
        <?php endif ?>
        <li><input name="pseudo" placeholder="pseudo"></li>
        <li><input type="password" name="password" placeholder="mot de passe"></li>
        <li><input type="submit" name="login_form"></li>
    </ul>
</form>
