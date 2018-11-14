<?php

/**
 * Created by PhpStorm.
 * User: DEHEM-NOYON
 * Date: 13/11/2018
 * Time: 09:22
 */
class AdminController {
    function httpGetMethod(Http $http, array $queryFields) {
        return [
            '_form' => new MealForm()
        ];
    }

    function httpPostMethod(Http $http, array $formFields) {
        /*****************************************************
         *          RECEPTION DU FORMULAIRE D'AJOUT D'UN PRODUIT
         *****************************************************/

        // filtrage des champs récupérés depuis le formulaire d'ajout du produit
        $name = trim($formFields['name']);
        $description = trim($formFields['description']);

        $quantityInStock = trim($formFields['quantity']);
        $buyPrice = trim($formFields['buyPrice']);
        $salePrice = trim($formFields['salePrice']);

        try {

            if (empty($name) OR empty($description) OR empty($quantity) OR empty($buyPrice) OR empty($salePrice))
                throw new DomainException("Les champs marqués d'une * sont obligatoires");

            // on test si le fichier est uploadable
            if ($http->hasUploadedFile('photo')) {
                $photo = $http->moveUploadedFile('photo', '/images/meals');
            }

            // ajout d'un nouveau produit
            $mealModel = new MealModel();
            $mealModel->createMeal($name, $description, $photo, $quantityInStock, $buyPrice, $salePrice);

            // création du message de confirmation
            $flashbag = new FlashBag();
            $flashbag->add('Votre produit a bien été ajouté');

        } catch (DomainException $exception) {

            // on instancie la classe UserForm et
            // on utilise la méthode bind pour lui injècter les valeurs utilisateur
            $mealForm = new MealForm();
            $mealForm->bind($formFields);
            $mealForm->setErrorMessage($exception->getMessage());
            return [
                '_form' => $mealForm
            ];
        }

        // redirection vers la page d'accueil
        $http->redirectTo('/');
    }
}