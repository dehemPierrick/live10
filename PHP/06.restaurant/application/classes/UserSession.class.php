<?php

class UserSession {

    function __construct() {

        session_start();

    }


    function create($id, $firstName, $lastName) {

        $_SESSION = [
            'user' => [
                'id' => $id,
                'fullName' => "$firstName $lastName",
            ],
            'isLogged' => true,
            'cart' => []
        ];
    }

    function delete() {
        $_SESSION = [];
        session_destroy();
    }


    /*****************************************************************
     *                          ENCAPSULATIONS
     *****************************************************************/
    function isLogged() {
        if (array_key_exists('isLogged', $_SESSION))
            return $_SESSION['isLogged'];
        return false;

        // version courte : return array_key_exists('isLogged', $_SESSION) AND $_SESSION['isLogged'];
    }

    function getId() {
        return $_SESSION['user']['id'];
    }

    function getFullName() {
        return $_SESSION['user']['fullName'];
    }

    function getCart() {
        return $_SESSION['cart'];
    }

    function saveCart($cart) {
        $_SESSION['cart'] = $cart;
    }
}