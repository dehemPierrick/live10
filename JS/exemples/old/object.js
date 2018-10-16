"use strict";

/*
 var monObjet;
 monObjet =  new Object();  // soit avec = {};
 monObjet.prenom = "Alberto";
 console.log(monObjet.prenom);
 */

// déclaration des variabes
var day;  // numéro du jour dans la semaine (0 == dimanche)
var date; // numéro du jour dans le mois
var month;
var year;
var weekDays;
var months;
var myCar;

// création des éléments de l'objet
myCar = new Object();
myCar.brand = "porche";
myCar.productionYear = 1922;
myCar.purchaseDate = new Date("1952-07-01"); // format ISO : YYYY-MM-DD HH:MM:SS MSMS
myCar.passengers = ['Fernando', 'Zorro'];

// Formattage de la date en français
weekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
date = myCar.purchaseDate.getDate();
year = myCar.purchaseDate.getFullYear();
day = weekDays[myCar.purchaseDate.getDay()];
month = months[myCar.purchaseDate.getMonth()];

document.write(
    "<ul>" +
    "<li>marque : " + myCar.brand + "</li>" +
    "<li>année de production : " + myCar.productionYear + "</li>" +
    "<li>date d'achat : " + day + " " + date + " " + month + " " + year + "</li>" +
    "<li>liste des passagers : " + myCar.passengers + "</li>" +
    "</ul>"
);

