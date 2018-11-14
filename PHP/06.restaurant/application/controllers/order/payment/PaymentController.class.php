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
        $cartModel = new CartModel();

        $cardInfos = $formFields;
        $userEmail = $customerModel->getEmail($userSession->getId());
        $amount = round($cartModel->getTotalPrices()['ttc'] * 100); // prix attendu en centimes

        try {
            // tentative de paiement
            $this->stripe_paiement($cardInfos, $userEmail, $amount);

        } catch (DomainException $exception) {
            $flasbag = new FlashBag();
            $flasbag->add($exception->getMessage());
            $http->redirectTo('/');
        }
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
                case 'succeeded':
                    // efface le panier
                    $cartModel = new CartModel();
                    $cartModel->clear();
                    throw new DomainException('<p>paiement effectué</p>');
                    break;

                case 'pending':
                    throw new DomainException('<p>paiement en attente</p>');
                    break;

                default:
                case 'failed':
                    throw new DomainException('<p>paiement échoué</p>');
                    break;
            }
        }
    }

}