<?php

class CartController {

    private $ajaxMessage = "";

    function httpGetMethod(Http $http, array $queryFields) {
        $userSession = new UserSession();
        if (!$userSession->isLogged()) {
            $flashBag = new FlashBag();
            $flashBag->add('Merci de vous connecter pour voir votre panier');
            $http->redirectTo('user/login');
        }


        if (array_key_exists('action', $queryFields)) {
            $action = $queryFields['action'];
            $mealId = array_key_exists('mealId', $queryFields) ? intval($queryFields['mealId']) : null;
            $quantity = array_key_exists('quantity', $queryFields) ? intval($queryFields['quantity']) : null;

            try {
                $newQuantity = $this->cartAction($action, $mealId, $quantity);
            } catch (DomainException $exception) {
                echo $exception->getMessage();
            }
        }

        if (array_key_exists('ajax', $queryFields)) {
            echo $this->ajaxMessage;
            exit;
        }

        if (array_key_exists('urlBack', $queryFields)) {
            $http->redirectTo($queryFields['urlBack']);
        }

        $cart = new CartModel();
        return [
            'cart' => $cart->getAllMealInfos(),
            'totalPrices' => $cart->getTotalPrices()
        ];
    }

    private function cartAction($action, $mealId = null, $quantity = null) {
        // récupération des données pour ajax
        $cartModel = new CartModel();
        $mealModel = new MealModel();
        $meal = $mealModel->getMeal($mealId);

        switch ($action) {
            case "decrease":
                $meal['QuantityInCart'] = $cartModel->decrease($mealId, $quantity);
                break;

            case "increase":
                $meal['QuantityInCart'] = $cartModel->increase($mealId, $quantity);
                break;

            case "clearCart":
                $meal['QuantityInCart'] = 0;
                $cartModel->clear();
                break;
        }

        // finalisation de la réponse ajax
        $meal['Quantity'] = $quantity;
        $meal['totalQuantityInCart'] = $cartModel->getTotalQuantity();
        $this->ajaxMessage = json_encode($meal);
    }

    function httpPostMethod() {

    }
}