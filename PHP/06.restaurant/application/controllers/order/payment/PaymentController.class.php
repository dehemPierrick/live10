<?php

/**
 * Created by PhpStorm.
 * User: DEHEM-NOYON
 * Date: 13/11/2018
 * Time: 15:22
 */
class PaymentController {
    public function httpGetMethod(Http $http, array $queryFields) {
        // création de la session utilisateur
        $userSession = new UserSession();

        $customerModel = new CustomerModel();
        $customer = $customerModel->getUser($userSession->getId());

        $cartModel = new CartModel();
        $ordersDetails = $cartModel->getAllMealInfos();
        $totalPrice = $cartModel->getTotalPrices();

        return [
            'customer' => $customer,
            'ordersDetails' => $ordersDetails,
            'totalPrice' => $totalPrice
        ];
    }

    public function httpPostMethod(Http $http, array $formFields) {
    }

}