'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

const MODE_EASY = 1;
const MODE_MEDIUM = 2;
const MODE_HARD = 3;

const ARMOR_COPPER = 1;
const ARMOR_IRON = 2;
const ARMOR_MAGIC = 3;

const WEAPON_WOOD = 1;
const WEAPON_STEEL = 2;
const WEAPON_EXCALIBUR = 3;

var game;

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

function settings() {

    // Choix du niveau de difficulté : facile, moyen ou difficile
    game.difficulty = getInteger(1, 3, 'Choisissez un niveau de difficulté \n1 - Facile\n2 - Moyen\n3 - Difficile');

    switch (game.difficulty) {
        case MODE_EASY :
            // En mode FACILE: Points de vie du dragon : entre 150 et 200 - Points de vie du chevalier : entre 200 et 250
            game.dragonHealth = getRandomInteger(150, 200);
            game.playerHealth = getRandomInteger(200, 250);
            break;

        case MODE_MEDIUM :
            // En mode NORMAL: Points de vie du dragon : entre 200 et 250 - Points de vie du chevalier : entre 200 et 250
            game.dragonHealth = getRandomInteger(200, 250);
            game.playerHealth = getRandomInteger(200, 250);
            break;

        case MODE_HARD :
            // En mode DIFFICILE : Points de vie du dragon : entre 200 et 250, Points de vie du chevalier : entre 150 et 200
            game.dragonHealth = getRandomInteger(200, 250);
            game.playerHealth = getRandomInteger(150, 200);
            break;
    }

    // Choix de l'armure du chevalier : en cuivre, fer ou magique
    var armor = getInteger(1, 3, 'Choisissez votre armure \n1 - Cuivre\n2 - Fer\n3 - Magique');

    switch (armor) {
        case ARMOR_COPPER  :
            game.armor = 1;
            break;
        case ARMOR_IRON  :
            game.armor = 1.25;
            break;
        case ARMOR_MAGIC  :
            game.armor = 1.5;
            break;
    }

    // Choix de l'épée du chevalier : en bois, en acier ou Excalibur
    var weapon = getInteger(1, 3, 'Choisissez votre épée \n1 - Bois\n2 - Acier\n3 - Excalibur');
    switch (weapon) {
        case WEAPON_WOOD:
            game.weapon = 0.5;
            break;
        case WEAPON_STEEL:
            game.weapon = 1;
            break;
        case WEAPON_EXCALIBUR:
            game.weapon = 1.5;
            break;
    }

    console.log("%cdébut de la partie", "text-transform:uppercase");
    console.log("%cJavawan the Bug : ", "font-weight:bold", game.dragonHealth + " PV");
    console.log("%cLuk Skriptwalker : ", "font-weight:bold", game.playerHealth + " PV");
}

function computeDragonDamage() {
    var damage;
    if (game.difficulty == MODE_EASY) {
        damage = getRandomInteger(10, 20);
    } else {
        damage = getRandomInteger(20, 30);
    }
    return damage;
}

function computePlayerDamage() {
    var damage;
    switch (game.difficulty) {
        case MODE_EASY:
            damage = getRandomInteger(25, 30);
            break;
        case MODE_MEDIUM:
            damage = getRandomInteger(15, 20);
            break;
        case MODE_HARD:
            damage = getRandomInteger(5, 10);
            break;
    }
    return damage;
}

function mainLoop() {
    var damage;

    while (game.playerHealth > 0 && game.dragonHealth > 0) {
        // affichage du tour
        console.log('\n%c== Tour n° ' + game.turn + ' ==', 'font-weight:bold;color:red');

        // on génère un nombre avec une chance sur 2 de tomber (pile ou face),
        // si jamais on obtient 0 (false) c'est le dragon qui fera son attaque
        if (getRandomInteger(0, 1)) {
            // TOUR DU DRAGON

            // déduction des domages
            damage = computeDragonDamage() / game.armor;
            game.playerHealth -= damage;

            // affichage des informations de l'attaque
            console.log("Le dragon %cJavawan the Bug%c est plus rapide et vous inflige " + damage + " points de dommage.", "font-weight:bold", '');
        } else {
            // TOUR DU JOUEUR

            // déduction des domages
            damage = computePlayerDamage() * game.weapon;
            game.dragonHealth -= damage;

            // affichage des informations de l'attaque
            console.log("Vous êtes plus rapide et vous infligez  " + damage + " points de dommage au dragon.");
        }

        // affichage des points de vie
        console.log("%cJavawan the Bug : ", "font-weight:bold", game.dragonHealth + " PV");
        console.log("%cLuk Skriptwalker : ", "font-weight:bold", game.playerHealth + " PV");

        game.turn++;
    }
}

function displayVictory() {
    // afficher message de victoire ainsi qu'une image
    if (game.dragonHealth > game.playerHealth) {
        document.write('<p class="defeat">Javawan the Bug a gagné, vous avez été carbonisé ! La princesse restera sa captive pour les 1000 ans à venir. Il restait ' + game.dragonHealth + ' points de vie au dragon.</p>');
        document.write('<img src="images/dragon.jpg" alt="victoire le dragon à gagné">');
    } else {
        document.write('<p class="victory">Vous avez terrassé le terrible Javawan the Bug et délivrez la princesse ! Il vous restait  ' + game.playerHealth + ' points de vie.</p>');
        document.write('<img src="images/knight.jpg" alt="chevalier victoire du dragon slayer">');
    }
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

function start() {
    game = {};
    game.turn = 1;

    // La préparation du jeu : distribution des points de vie, réglages des paramètres du jeu, etc
    settings();

    // Le déroulement de la partie
    mainLoop();

    // Fin du jeu et affichage du vainqueur
    displayVictory();
}


start();






