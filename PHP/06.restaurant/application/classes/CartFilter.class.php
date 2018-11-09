<?php

class CartFilter implements InterceptingFilter {

    public function run(Http $http, array $queryFields, array $formFields) {

        $cartModel = new CartModel();
        return [
            'totalQuantityInCart' => $cartModel->getTotalQuantity()
        ];

    }
}