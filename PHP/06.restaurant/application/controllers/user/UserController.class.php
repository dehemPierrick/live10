<?php


class UserController {

    function httpGetMethod(Http $http, Array $queryField) {

    }

    function httpPostMethod(Http $http, Array $formField) {
        $firstName = trim($formField['firstName']);
        $lastName = trim($formField['lastName']);
        $phone = trim($formField['phone']);
        $email = trim($formField['email']);
        $password = $formField['password'];
        $address = trim($formField['address']);
        $city = trim($formField['city']);
        $zipCode = intval($formField['zipCode']);

        if (!empty($firstName) and !empty($lastName) and !empty($email) and !empty($password)) {
            $userModel = new CustomerModel();
            $userModel->create($firstName, $lastName, $phone, $email, $password, $address, $city, $zipCode);
        }
    }
}