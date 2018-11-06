<?php

session_start();

//var_dump($_SESSION);
if (array_key_exists('is_logged', $_SESSION) and $_SESSION['is_logged'] == true) {
    echo "vous êtes connecté";
}


?>
<nav>
    <a href="index.php">index</a>
    <a href="login.php">login</a>
    <a href="logout.php">logout</a>
</nav>
