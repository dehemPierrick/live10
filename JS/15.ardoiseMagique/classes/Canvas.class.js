"use strict";


var Canvas = function (pen) {
    this.DOMcanvas = document.getElementById('canvas');
    this.ctx = this.DOMcanvas.getContext('2d');
    this.position = {x: 0, y: 0};

    // on fait de pen une composition de la classe Canvas
    this.pen = pen;

    this.ctx.lineCap = 'round';

    this.DOMcanvas.addEventListener('mousedown', this.onMouseDownCanvas.bind(this));
    this.DOMcanvas.addEventListener('mousemove', this.onMouseMoveCanvas.bind(this));
    document.addEventListener('mouseup', this.onMouseUpCanvas.bind(this));
};

Canvas.prototype.onMouseDownCanvas = function (event) {
    this.pen.isDrawing = true;

    // initialisation du début du dessin
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;

    // on applique le style du crayon au tracé
    this.ctx.strokeStyle = this.pen.getColor();
    this.ctx.lineWidth = this.pen.getSize();
    this.ctx.beginPath();
};

Canvas.prototype.onMouseMoveCanvas = function (event) {
    if (this.pen.isDrawing) {
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(event.offsetX, event.offsetY);
        this.ctx.stroke();
    }
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;
};

Canvas.prototype.onMouseUpCanvas = function () {
    this.pen.isDrawing = false;
};

Canvas.prototype.clearAll = function () {
    this.ctx.clearRect(0, 0, this.DOMcanvas.width, this.DOMcanvas.height);
};
