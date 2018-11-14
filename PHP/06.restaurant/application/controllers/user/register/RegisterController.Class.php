<?php

class RegisterController {
    function httpGetMethod(Http $http, array $queryFields) {
        return [
            '_form' => new RegisterForm()
        ];

    }

    function httpPostMethod(Http $http, array $formFields) {
        /*****************************************************
         *          RECEPTION DU FORMULAIRE D'INSCRIPTION
         *****************************************************/

        // filtrage des champs récupérés depuis le formulaire d'inscription
        $firstName = trim($formFields['firstname']);
        $lastName = trim($formFields['lastname']);
        $phone = trim($formFields['phone']);
        $email = strtolower(trim($formFields['email']));
        $password = $formFields['password'];
        $address = trim($formFields['address']);
        $city = trim($formFields['city']);
        $zipCode = trim($formFields['zipcode']);

        // vérification des champs vides à transmettre au model
        /*if(!empty($firstName) and !empty($lastName) and !empty($phone) and !empty($email) and !empty($password)
            and !empty($address) and !empty($city) and !empty($zipCode)){
            // inscription dans la base de données du nouvel utilisateur
            $userModel = new CustomerModel();
            $userModel->createUser($firstName, $lastName, $phone, $email, $password, $address,$city,$zipCode);
            // redirection vers la page d'accueil
            $http = new Http();
            $http->redirectTo('/user/login');
        }else{
            echo "Merci de remplir tous les champs du formulaire";
        }*/

        try {

            if (empty($firstName) OR empty($lastName) OR empty($email) OR empty($password))
                throw new DomainException("Les champs marqués d'une * sont obligatoires");

            // création du compte utilisateur
            $customerModel = new CustomerModel();
            $customerId = $customerModel->createUser($firstName, $lastName, $phone, $email, $password, $address, $city, $zipCode);

            // création de la session utilisateur
            $userSession = new UserSession();
            $userSession->create($customerId, $firstName, $lastName);

            // création du message de confirmation
            $flashbag = new FlashBag();
            $flashbag->add('Votre compte à bien été crée');

        } catch (DomainException $exception) {

            // on instancie la classe UserForm et
            // on utilise la méthode bind pour lui injècter les valeurs utilisateur
            $userForm = new RegisterForm();
            $userForm->bind($formFields);
            $userForm->setErrorMessage($exception->getMessage());
            return [
                '_form' => $userForm
            ];
        }

        // redirection vers la page d'accueil
        $http->redirectTo('/');
    }
}