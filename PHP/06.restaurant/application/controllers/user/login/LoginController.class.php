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


        /*
                $errors = [];

                // tous les champs doivent être rempli
                if (!empty($email) and !empty($password)) {
                    $customerModel = new CustomerModel();

                    // tentative de connexion
                    if($customer = $customerModel->login($email, $password)){

                        // création de la session utilisateur
                        $userSession = new UserSession();
                        $userSession->create($customer['Id'], $customer['FirstName'], $customer['LastName']);

                        // création du message de confirmation
                        $flashbag = new FlashBag();
                        $flashbag->add('bravo vous êtes connecté');

                        // redirection vers la page d'accueil
                        $http->redirectTo('/');

                    } else {
                        array_push($errors, 'Mauvais login ou mot de passe');
                    }
                } else {
                    array_push($errors, 'Veuillez remplir tous les champs');
                }
                return [
                    'errors' => $errors
                ];*/
    }
}