<?php


class OrderController {
    public function httpGetMethod(Http $http, array $queryFields) {
        /*
         * Méthode appelée en cas de requête HTTP GET
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
         */

        // création de la session utilisateur
        $userSession = new UserSession();

        $customerModel = new CustomerModel();
        $customer = $customerModel->getUser($userSession->getId());

        $addressForm = new AddressForm();
        $addressForm->bind($customer);
        return [
            '_form' => $addressForm
        ];
    }

    public function httpPostMethod(Http $http, array $formFields) {
        /*
         * Méthode appelée en cas de requête HTTP POST
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
         */


        try {
            // filtrage des champs récupérés depuis le formulaire d'adresse

            $firstName = trim($formFields['FirstName']);
            $lastName = trim($formFields['LastName']);
            $phone = trim($formFields['Phone']);
            $address = trim($formFields['Address']);
            $city = trim($formFields['City']);
            $zipCode = trim($formFields['ZipCode']);
            if (empty($firstName) OR empty($lastName) OR empty($phone) OR empty($address) OR empty($city) OR empty($zipCode))
                throw new DomainException("Les champs marqués d'une * sont obligatoires");

            // création de la session utilisateur
            $userSession = new UserSession();
            $customerModel = new CustomerModel();
            $customerModel->updateAddress($firstName, $lastName, $phone, $address, $city, $zipCode, $userSession->getId());
            $http->redirectTo('/order/payment');
        } catch (DomainException $exception) {

            // on instancie la classe AddressForm et
            // on utilise la méthode bind pour lui injècter les valeurs utilisateur
            $addressForm = new AddressForm();
            $addressForm->bind($formFields);
            $addressForm->setErrorMessage($exception->getMessage());
            return [
                '_form' => $addressForm
            ];
        }


    }
}