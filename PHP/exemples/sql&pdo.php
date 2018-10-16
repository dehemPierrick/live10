<?php

/**************************************************
 * Connexion à la base de donnée
 **************************************************/

// DSN : pas de majuscule(sur mac il y a souvent un port par défaut)
// LOGIN : "root"
// PASS : "" (sur mac, c'est souvent root par défaut)
$pdo = new PDO("mysql:host=localhost;dbname=classicmodels;charset=utf8", "root", "");

// Afficher les erreurs PDO
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


/**************************************************
 * Définition de la requête
 **************************************************/

// définition de la requête sql
$sql = "SELECT * FROM customers LIMIT 25";


/**************************************************
 * Execution de la requête
 **************************************************/

// préparation de la requête
$request = $pdo->prepare($sql);

// execution de la requète
$request->execute();

// mise en forme de plusieurs résultats avec FETCH ASSOC
// pour les mettre sous forme de tableau associatif
$customers = $request->fetchAll(PDO::FETCH_ASSOC);
var_dump($customers);


/**************************************************
 *          Définition d'une requête
 *              AVEC VARIABLE
 **************************************************/

// ON NE MET JAMAIS DE VARIABLES DANS LA REQUËTE !!!!
// SINON FAILLE DE TYPE "INJECTION SQL"

$sql = "
        SELECT addressLine1, city, country, phone, customerName, customerNumber 
        FROM customers
        WHERE country IN(?, ?, ?)
        AND creditLimit > ?
    ";

// préparation de la requête
$request = $pdo->prepare($sql);

// passage des paramètres sécurisés :
$request->execute(['France', 'Italy', 'USA', 1000]);

// mise en forme des résultats
$customers = $request->fetchAll(PDO::FETCH_ASSOC);


/**************************************************
 *          Définition d'une requête
 *              AVEC VARIABLE
 *           ET UN SEUL RESULTAT
 **************************************************/

// ON NE MET JAMAIS DE VARIABLES DANS LA REQUËTE !!!!
// SINON FAILLE DE TYPE "INJECTION SQL"

$sql = "SELECT customerName
        FROM customers
        WHERE customerNumber = ?";

// préparation de la requête
$request = $pdo->prepare($sql);

// passage du paramètre sécurisés :
$request->execute([101]);

// dans le cas ou un seul résultat est attendu on utilise FETCH
$customers = $request->fetch(PDO::FETCH_ASSOC);









/*
    // Les autres méthodes pour protèger les données et éviter l'injection lors de l'envoi de
    // paramètres à pdo

/////////////////////////////////////////////////////////////////////////////////
    $sql = "
        SELECT addressLine1, city, country, phone, customerName, customerNumber
        FROM customers
        WHERE country IN(:country1, :country2, :country3)
        AND creditLimit > :creditLimit
    ";

    $request = $pdo->prepare($sql);
    $request->execute([
       ':country1'    => 'France',
       ':country2'    => 'Italy',
       ':creditLimit' => 1000,
       ':country3'    => 'USA',
    ]);


/////////////////////////////////////////////////////////////////////////////////
    $sql = "
        SELECT addressLine1, city, country, phone, customerName, customerNumber
        FROM customers
        WHERE country IN(:country1, :country2, :country3)
        AND creditLimit > :creditLimit
    ";

    $request = $pdo->prepare($sql);

    $request->bindParam(':country1', $_POST['country1'], PDO::PARAM_STR);
    $request->bindParam(':country2', $_POST['country2'], PDO::PARAM_STR);
    $request->bindParam(':country3', $_POST['country3'], PDO::PARAM_STR);
    $request->bindParam(':creditLimit',  $_POST['creditLimit'], PDO::PARAM_INT);
    $request->execute();


*/















