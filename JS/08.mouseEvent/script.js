'use strict';   // Mode strict du JavaScript

// 1. identifier l'élm du DOM
var toggleRectangle = document.getElementById("toggle-rectangle");
var rectangle = document.querySelector('.rectangle');


// 2. Action à réaliser
function onClickToggleRectangle() {
    rectangle.classList.toggle('hidden');
}

function onMouseOverRectangle() {
    rectangle.classList.add('important')
}
function onMouseOutRectangle() {
    rectangle.classList.remove('important')
}

function onDblclickRectangle() {
    rectangle.classList.add('good')
}

// 3. Associer l'action à l'élm du DOM
toggleRectangle.addEventListener('click', onClickToggleRectangle);
rectangle.addEventListener('mouseover', onMouseOverRectangle);
rectangle.addEventListener('mouseout', onMouseOutRectangle);
rectangle.addEventListener('dblclick', onDblclickRectangle);


/*
 document.getElementById()
 document.querySelector()
 document.querySelectorAll()
 */