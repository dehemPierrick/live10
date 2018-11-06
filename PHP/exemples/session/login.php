<?php
include "header.php";


if (array_key_exists('password', $_POST)) {

    if ($_POST['password'] == "lapin") {
        // configuration de la session
        $_SESSION['is_logged'] = true;
        header('location: index.php');
    } else {
        echo "mauvais mot de passe";
    }
}
?>

<form method="post">
    <input name="password" placeholder="mot de passe">
    <input type="submit">
</form>
