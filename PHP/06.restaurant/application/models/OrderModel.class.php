<?php

class OrderModel {

    public function create($customer_id, Array $products, $status = "stripe paiement") {
        // création de la commande
        $sql = "INSERT INTO orders (Amount, OrderDate, Status, Customer_Id) VALUES (?,NOW(),?,?)";
        $db = new Database();

        // au début on insert un total de zero,
        $amount = 0;

        // insertion de la commande, récupération de l'id de la commande
        $order_id = $db->executeSql($sql, [$amount, $status, $customer_id]);

        // insertion des détails
        foreach ($products as $product) {
            $amount += $product['Quantity'] * $product['SalePrice'];
            $sql = "INSERT INTO orderdetails (Meal_Id, Order_Id, Quantity, PriceEach) VALUES (?,?,?,?)";
            $db->executeSql($sql, [$product['Id'], $order_id, $product['Quantity'], $product['SalePrice']]);
        }

        // on met à jour le total commande après calcul
        $db->executeSql("UPDATE orders SET Amount = ?", [$amount]);
    }
}