<?php


function dire_bonjour($name = null) {
    if ($name == null) {
        // on déclenche l'erreur ici donc le code s'arrètera là
        throw new DomainException("Vous n'avez pas rempli de nom");
    }
    echo "<p>salut $name</p>";
}

try {

    dire_bonjour('Franck');

    dire_bonjour();

    // cette fonction ne sera pas exécuté
    dire_bonjour('Albert');

} catch (DomainException $exception) {
    echo "<p class='error-message'><em>Il y a une erreur :</em> $exception->getMessage()</p>";
}

// et on continue la suite ici après avoir géré l'erreur






