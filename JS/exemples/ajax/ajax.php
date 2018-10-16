<?php


/**
 *
 * on récupère depuis ajax$_POST['order_number']
 * On se connecte sur classic model avec PDO
 * On récupère une commande en fonction de son ID
 * on renvoi dans un tableau JSON les infos de cette commande
 * (date, nom du client, prix total, statut de la commande)
 *
 * enfin en JS on fait un affichage propre en HTML des données transmise
 *
 */


$orders = [
    0 => ['title' => "commande d'anchois", 'customerId' => 200],
    1 => ['title' => "besoin de médocs urgent", 'customerId' => 232],
    2 => ['title' => "remplissage des stocks", 'customerId' => 158]
];


if (array_key_exists('order_number', $_POST)) {

    // récupération de l'ID commande
    $order_number = intval($_POST['order_number']);

    // récupération de la commande
    $order = $orders[$order_number];

    // renvoi des données
    echo json_encode($order);

    exit;
}


echo "erreur dans la requête";
