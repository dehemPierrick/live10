<?php


class UserController {

    function httpGetMethod(Http $http, Array $queryField) {

    }

    function httpPostMethod(Http $http, Array $formField) {
        $firstName = "";
        $lastName = "";
        $phone = "";
        $email = trim($formField['email']);
        $password = $formField['password'];
        $address = "";
        $city = "";
        $zipCode = "";

        if (!empty($email) and !empty($password)) {
            $userModel = new CustomerModel();
            $userModel->create($firstName, $lastName, $phone, $email, $password, $address, $city, $zipCode);
        }

    }
}