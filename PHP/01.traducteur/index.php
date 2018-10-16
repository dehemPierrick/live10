<?php

$translated = null;

function translate($word, $direction) {
    $dictionaire = [
        'dog' => 'chien',
        'cat' => 'chat',
        'hello' => 'bonjour',
    ];

    switch ($direction) {
        case 'toFrench':
            // est ce que le mot existe dans le dictionaire
            if (array_key_exists($word, $dictionaire)) {
                // on renvoi la valeur de la clé $word
                return $dictionaire[$word];
            }
            break;

        case 'toEnglish':
            // retourne la clé pour le mot recherché (false si on ne trouve pas)
            return array_search($word, $dictionaire);
            break;
    }
    return false;
}

// si le formulaire à été reçu, on cherche la traduction
if (array_key_exists('translate', $_POST)) {
    // récupération des champs du formulaire
    $word = strtolower(trim($_POST['word']));
    $direction = $_POST['direction'];

    // traduction du mot
    $translated = translate($word, $direction);
}

print_r($translated);

include "template.phtml";



