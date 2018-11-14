<?php

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
            'totalPrice' => $totalPrice,
            'errorMessage' => ''
        ];
    }

    function httpPostMethod(Http $http, $formFields) {
        $userSession = new UserSession();
        $customerModel = new CustomerModel();
        $customer_id = $userSession->getId();

        $cartModel = new CartModel();

        $userEmail = $customerModel->getEmail($customer_id);
        $amount = round($cartModel->getTotalPrices()['ttc'] * 100); // prix attendu en centimes

        $flasbag = new FlashBag();

        try {
            // tentative de paiement
            $this->stripe_paiement($formFields, $userEmail, $amount);

            $orderModel = new OrderModel();
            $orderModel->create($customer_id, $cartModel->getAllMealInfos());

            // efface le panier
            $cartModel = new CartModel();
            $cartModel->clear(false);

            $flasbag->add('<p>paiement effectué</p>');

        } catch (DomainException $exception) {
            $flasbag->add($exception->getMessage());
        }

        $http->redirectTo('/');
    }

    function stripe_paiement(array $formFields, $email, $amount) {
        include(ROOT_PATH . '/vendor/autoload.php');

        if (array_key_exists('stripeToken', $formFields)) {
            \Stripe\Stripe::setApiKey(STRIPE_SECRET_KEY);
            $customer = \Stripe\Customer::create(array("description" => "Client ayant commandé sur Restaurant.com", "email" => $email, "source" => $formFields['stripeToken'] // obtenu via l'étape précédente
            ));

            $charge = \Stripe\Charge::create(array("amount" => $amount, // En centimes ! 20 € ici
                                                   "currency" => "eur", "customer" => $customer->id, "metadata" => array("message" => 'commande passé le ' . date('NOW'))));

            switch ($charge->status) {
                case 'pending':
                    throw new DomainException('<p>paiement en attente</p>');
                    break;

                case "succeeded":
                    break;

                default:
                case 'failed':
                    throw new DomainException('<p>paiement échoué</p>');
                    break;
            }
        }
    }

}