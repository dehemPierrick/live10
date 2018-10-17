<?php

$pdo = new PDO ("mysql:host=localhost;dbname=classicmodels;charset=utf8", "root", "");

// Afficher les erreurs PDO
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


// récupération du numéro de commande
if (array_key_exists("orderNumber", $_GET)) {

    $order_number = intval($_GET["orderNumber"]);
    $sql = "SELECT  `orderDate`, orders.orderNumber, `status`, customers.customerNumber, customers.customerName, SUM(priceEach * quantityOrdered) AS totalPrice
            FROM `orders` 
            JOIN customers ON customers.customerNumber = orders.customerNumber
            JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber
            WHERE orders.orderNumber = ?
            GROUP BY orders.orderNumber";

    $request = $pdo->prepare($sql);
    $request->execute([$order_number]);
    $order_details = $request->fetch(PDO::FETCH_ASSOC);

    // renvoi des infos de la commande au format json
    echo json_encode($order_details);
}
