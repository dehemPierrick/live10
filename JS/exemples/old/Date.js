"use strict";

var day;  // numéro du jour dans la semaine (0 == dimanche)
var date; // numéro du jour dans le mois
var month;
var year;
var today;
var weekDays;
var months;

// var day, date, month, year, today, weekDays, months;

weekDays = new Array();
months = new Array();
today = new Date();

// Affectation des jours et des mois en Français
weekDays[0] = 'Dimanche';
weekDays[1] = 'Lundi';
weekDays[2] = 'Mardi';
weekDays[3] = 'Mercredi';
weekDays[4] = 'Jeudi';
weekDays[5] = 'Vendredi';
weekDays[6] = 'Samedi';

months[0] = "janvier";
months[1] = "février";
months[2] = "mars";
months[3] = "avril";
months[4] = "mai";
months[5] = "juin";
months[6] = "juillet";
months[7] = "août";
months[8] = "septembre";
months[9] = "octobre";
months[10] = "novembre";
months[11] = "décembre";

date = today.getDate();
year = today.getFullYear();
day = weekDays[today.getDay()];
month = months[today.getMonth()];

document.write("<p>Nous sommes le " + day + " " + date + " " + month + " " + year + ".</p>");


































