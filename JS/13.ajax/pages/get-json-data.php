<?php


$grec_recipe = [
    'ingredients' => ['salade', 'tomate', 'oignon'],
    'cooking_time' => '5min',
    'meat_choice' => ['agneau', 'poulet', 'boeuf', 'cochon']
];

echo json_encode($grec_recipe);