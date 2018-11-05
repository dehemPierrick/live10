<?php

class MealModel {
    function getMeals() {
        $db = new Database();
        return $db->query("SELECT Name, Description, Photo, QuantityInStock, BuyPrice, SalePrice FROM meals");
    }

    function createMeal($name, $description, $photo, $quantityInStock, $buyPrice, $salePrice) {
        $sql = "INSERT INTO meals (Name, Description, Photo, QuantityInStock, BuyPrice, SalePrice) VALUES (?,?,?,?,?,?)";
        $db = new Database();
        $db->executeSql($sql, [$name, $description, $photo, $quantityInStock, $buyPrice, $salePrice]);
    }

    function getMeal($meal_id) {
        $db = new Database();
        return $db->queryOne("SELECT name FROM meals WHERE id = ?", [$meal_id]);
    }

    function removeMeal($meal_id) {
        $db = new Database();
        $db->executeSql("DELETE FROM meals WHERE id=?", [$meal_id]);
    }
}
