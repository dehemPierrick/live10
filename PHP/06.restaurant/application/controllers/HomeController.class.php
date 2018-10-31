<?php

class HomeController {
    public function httpGetMethod(Http $http, array $queryFields) {
        /*
         * Méthode appelée en cas de requête HTTP GET
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
         */

        $kebab = ['salade', 'tomate', 'oignon'];

        return [
            'maVariable' => "je suis le contenu de ma variable",
            'kebab' => $kebab
        ];
    }

    public function httpPostMethod(Http $http, array $formFields) {
        /*
         * Méthode appelée en cas de requête HTTP POST
         *
         * L'argument $http est un objet permettant de faire des redirections etc.
         * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
         */
    }
}