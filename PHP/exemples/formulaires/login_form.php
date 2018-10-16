<?php


// on vérifie que le formulaire à bien été envoyé
if (array_key_exists('login_form', $_POST)) {
    $pseudo = trim($_POST['pseudo']);
    $email = strtolower(trim($_POST['email']));
    $form_sent = true;

    if (empty($email)) {
        echo "vous n'avez pas rempli l'email";
    } elseif (strstr($email, '@') == false) {
        // l'utilisateur n'a pas mis d'arobase dans son e-mail
        echo "Le format est incorrect";
    } else {
        // enregistrement du formulaire après vérification des données
    }

    header('Location: confirmation.php');
}
