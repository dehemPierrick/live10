# Quelque modeste notes de cours
## Gestion des erreurs
 __unexpected blablala on line 22__ 
 
- Il faut regarder la ligne précédente vous avez sans doute oublié un ; , }



 __Use of undefined constant prout - assumed 'prout'__ 
 
 - vous avez oublié le $ devant la variable en php
 
 

## jQuery
il existe 4 sélecteurs jquery

 - ``$('.generic-form input')``                     _identification par sélecteur css_
 - ``$(document)``                                  _identification d'un élément du DOM_
 - ``$(function(){ /* le DOM est chargé */ })``     _s'execute quand le DOM est chargé ('DOMContentLoaded' en JS natif)_
 - ``$('<li>')``                                     _crée une balise qu'on insèrera plus tard dans le DOM avec .append()_


 
## Différences JS / PHP

|                      |         PHP        |          JS         |
|----------------------|--------------------|---------------------|
|  s'éxécute sur       | serveur            |   client HTML       |
|  les variables       |    $               |       var           |
|  la concaténation    |    .               |        +            |
|  tableau associatifs |   ['key' => val]   |        {key : val}  |
|  le ";"              |  obligatoire       |       optionnel     |
|  guillemet simple    |  "$prenom"         |        ''           |

### entre .php / .phtml ###

|                 |      .PHP       |       .PHTML      |
|-----------------|-----------------|-------------------|
| présence html   |  pas de html    | quasi que du html |
| présence php    |  quasi que php  |  très peu de php  |
| fermeture ?>    |  jamais         |  très fréquent    |

### les rêgles du .phtml ####

 - on indente le php comme le html
 - a chaque ligne on réouvre et on referme le ``<?php  ?>``
 - écriture simplifié des instructions ``<?php if(): ?> <?php endif ?>``  ou encore ``<?= 'blablabla'  ?>`` à la place de ``<?php echo 'blablabla' ?>``)

## SQL
### Priorité des commandes SQL
Les commandes s'ecrivent dans l'ordre suivant, mais sont interpretté avec cet ordre de priorité avec MYSQL
Ainsi, on ne peux pas créer une colonne sans le **SELECT** et l'utiliser dans un **GROUP BY**

    4   SELECT 
    1   FROM
    2   WHERE
    3   GROUP BY
    5   HAVING
    6   ORDER BY
    7   LIMIT

## POO
### Principes importants
 - **l'encapsulation** : regroupement et sécurisation de propriétés au sein d'une même méthode ``get_width(){return $this->width}``
 - **composition** : ""
 - **héritage** : ""
 - **portée (ou scope)** : ""
 