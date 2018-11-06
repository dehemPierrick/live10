<?php

function get_random_integer($max) {
    if ($max > 25)
        throw new DomainException('Le maximum attendu est 25');
    return rand(0, $max);
}

try {
    if (empty($email))
        throw new DomainException("veuillez remplir l'email");

    if (!$user->login())
        throw new DomainException('mot de passe invalide');

    if (!$session->start())
        throw new DomainException('impossible de créer la session')

    $random = get_random_integer(50);

} catch (DomainException $exception) {
    echo "<h1>Oops il y a une erreur sur la page</h1>
          <p><strong> $exception->getMessage()</strong></p>
          <p>Nous allong tout faire pour éviter le problème à nouveau</p>";
}


