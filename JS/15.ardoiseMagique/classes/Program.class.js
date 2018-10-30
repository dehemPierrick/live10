"use strict";

var Program = function () {
    this.pen = new Pen();
    this.slate = new Canvas(this.pen);
    this.colorPicker = new ColorPicker();
};

Program.prototype.onClickColorPicker_btn = function () {
    $(this.colorPicker.colorPickerDOM).fadeIn();
};

Program.prototype.onChangeColor = function (event, color) {
    // conversion de la couleur au format RGB
    var rgb = this.pen.colorToRGB(color);

    // changement de couleur pour le crayon
    this.pen.setColor(rgb);

    // enfin on masque la palette de couleur
    $(this.colorPicker.colorPickerDOM).fadeOut();
};

var onClickChangeSize = function (event) {
    // équivalent : jQuery $(event.currentTarget).data('size');
    // on ne peux plus utiliser "this" car on l'a lié à
    // l'instance du Program avec onClickChangeSize.bind(this)
    // mais en temps normal this = event.currentTarget

    var newSize = event.currentTarget.dataset.size;

    this.pen.setSize(newSize);
};

var onClickChangeColor = function (event) {

    // équivalent : jQuery $(event.currentTarget).data('color');
    // on ne peux plus utiliser "this" car on l'a lié à
    // l'instance du Program avec onClickChangeColor.bind(this)
    // mais en temps normal this = event.currentTarget
    var newColor = event.currentTarget.dataset.color;

    this.pen.setColor(newColor);
};

var onClickClearSlate = function () {
    this.slate.clearAll();
};

var onClickEraser = function () {
    this.pen.setSize(20);
    this.pen.setColor('white');
};

Program.prototype.init = function () {
    $('#clear_slate').click(onClickClearSlate.bind(this));
    $('#eraser').click(onClickEraser.bind(this));
    $('[data-size]').click(onClickChangeSize.bind(this));
    $('[data-color]').click(onClickChangeColor.bind(this));

    // écouteurs liés à la pipette
    $('#colorPicker_btn').click(this.onClickColorPicker_btn.bind(this));
    $(document).on('ArdoiseMagique:onChangeColor', this.onChangeColor.bind(this));

};


// Program.prototype.init = function(){
//     document.getElementById("clear_slate").addEventListener('click', onClickClearSlate);
//     document.getElementById("eraser").addEventListener('click', onClickEraser);
//
//     var changeSizes = document.querySelectorAll('[data-size]');
//     for(var index = 0; index < changeSizes.length; index++){
//         changeSizes[index].addEventListener('click', onClickChangeSize)
//     }
//
//     var changeColors = document.querySelectorAll('[data-color]');
//     for(index = 0; index < changeColors.length; index++){
//         changeColors[index].addEventListener('click', onClickChangeColor)
//     }
// };