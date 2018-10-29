"use strict";

var ColorPicker = function () {
    this.colorPickerDOM = document.getElementById('colorPicker');
    this.ctx = this.colorPickerDOM.getContext('2d');

    this.colorPickerDOM.addEventListener('click', this.onClickColorPicker.bind(this));

    // tracage des dégradés
    this.drawColorPicker();

};

ColorPicker.prototype.drawColorPicker = function () {
    var gradient = this.ctx.createLinearGradient(0, 0, this.colorPickerDOM.width, 0);

    gradient.addColorStop(0, "red");
    gradient.addColorStop(1 / 6, "rgb(255, 0, 255");
    gradient.addColorStop(2 / 6, "rgb(0, 0, 255");
    gradient.addColorStop(3 / 6, "rgb(0, 255, 255");
    gradient.addColorStop(4 / 6, "rgb(0, 255, 0");
    gradient.addColorStop(5 / 6, "rgb(255, 255, 0");
    gradient.addColorStop(1, "red");

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.colorPickerDOM.width, this.colorPickerDOM.height);

    gradient = this.ctx.createLinearGradient(0, 0, 0, this.colorPickerDOM.height);

    gradient.addColorStop(0, "rgba(255,255,255,1");
    gradient.addColorStop(1 / 2, "rgba(255,255,255,0");
    gradient.addColorStop(1 / 2, "rgba(0,0,0,0");
    gradient.addColorStop(1, "rgba(0,0,0,1");

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.colorPickerDOM.width, this.colorPickerDOM.height);

};

ColorPicker.prototype.onClickColorPicker = function (event) {

    var data = this.ctx.getImageData(event.offsetX, event.offsetY, 1, 1);

    console.log(data.data[0], data.data[1], data.data[2]);

    $.event.trigger('slate:onChangeColor');
};