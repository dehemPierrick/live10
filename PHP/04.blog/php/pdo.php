<?php


////////////////////            CONNEXION           ////////////////////////////////
$pdo = new PDO('mysql:host=localhost;dbname=blog;charset=utf8', 'root', '');

// Afficher les erreurs PDO
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


////////////////////         FONCTION UTILES        ////////////////////////////////
function fetchAll($sql, array $params = []) {
    global $pdo;
    $request = $pdo->prepare($sql);
    $request->execute($params);
    return $request->fetchAll(PDO::FETCH_ASSOC);
}

function fetch($sql, array $params = []) {
    global $pdo;
    $request = $pdo->prepare($sql);
    $request->execute($params);
    return $request->fetch(PDO::FETCH_ASSOC);
}

function execute($sql, array $params = []) {
    global $pdo;

    $request = $pdo->prepare($sql);

    $request->execute($params);
}
