# Restaurant Framework 3WA LIVE 08

Je suis le readme de mon projet E-commerce de la 3wa


 ## création d'un page "test" en utilisant le Framework
 
 1. Création du controller ``/application/controllers/test/TestController.class.php``
 2. Création de la classe ``TestController``
 3. Création de la méthode ``httpGetMethod()``
 4. Création de la vue ``/application/www/test/TestView.phtml``
 5. On affiche la page avec l'url : ``/index.php/test``
 
 ## Renvoyer une variable dans la vue
 
 1. la méthode httpGetMethod doit retourner un tableau associatif contenant la variable
 2. dans la vue on peut afficher la variable en appelant la clé ``ma_variable`` du tableau crée au dessus
```php
 public function httpGetMethod(Http $http, array $queryFields) {
     return [
         'ma_variable' => 'je suis le contenu de ma variable',
     ];
 }
```