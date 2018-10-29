"use strict";

var Program = function () {
    this.pen = new Pen();
    this.slate = new Canvas(this.pen);
    this.colorPicker = new ColorPicker();
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

    $(document).on('slate:onChangeColor', this.onChangeColor);

};

Program.prototype.onChangeColor = function () {
    console.log('test')
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