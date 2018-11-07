<?php

class LoginController {

    function httpGetMethod() {
        return [
            'errors' => []
        ];
    }

    function httpPostMethod(Http $http, Array $formField) {
        $email = trim($formField['email']);
        $password = $formField['password'];

        try {

            if (empty($email) OR empty($password))
                throw new DomainException('Veuillez remplir tous les champs');

            $customerModel = new CustomerModel();
            $customer = $customerModel->login($email, $password);

            // création de la session utilisateur
            $userSession = new UserSession();
            $userSession->create($customer['Id'], $customer['FirstName'], $customer['LastName']);

        } catch (DomainException $exception) {
            return [
                'errors' => $exception->getMessage()
            ];
        }

        // création du message de confirmation
        $flashbag = new FlashBag();
        $flashbag->add('bravo vous êtes connecté');

        // redirection vers la page d'accueil
        $http->redirectTo('/');

    }
}