<?php


class CustomerModel {

    function create($firstName, $lastName, $phone, $email, $password, $address, $city, $zipCode) {
        $sql = "INSERT INTO customers (FirstName, LastName, Phone, Email, Password, Address, City, ZipCode, RegisterDate) 
                VALUES (?,?,?,?,?,?,?,?,NOW())";

        $db = new Database();
        $db->executeSql($sql, [$firstName, $lastName, $phone, $email, $password, $address, $city, $zipCode]);
    }

    function login($email, $password) {

        $sql = "SELECT Id, FirstName,LastName, Password FROM customers WHERE Email = ?";
        $db = new Database();
        $customer = $db->queryOne($sql, [$email]);

        // si l'email à été trouvé dans la base ou que le mot de passe est différent
        if (count($customer) == 0 OR $password != $customer['password'])
            throw new DomainException('Mauvais login ou mot de passe');

        return $customer;
    }

}
