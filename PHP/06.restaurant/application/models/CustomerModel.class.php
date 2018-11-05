<?php


class CustomerModel {

    function create($firstName, $lastName, $phone, $email, $password, $address, $city, $zipCode) {
        $sql = "INSERT INTO restaurant.customers (FirstName, LastName, Phone, Email, Password, Address, City, ZipCode, RegisterDate) 
                VALUES (?,?,?,?,?,?,?,?,NOW())";

        $db = new Database();
        $db->executeSql($sql, [$firstName, $lastName, $phone, $email, $password, $address, $city, $zipCode]);
    }


}