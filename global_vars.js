const imgCanvas = document.getElementById('draw-canvas');
const imgCtx = imgCanvas.getContext("2d");

let num = 0;
let isDraw = false;

// configs
let drawSize = 5;

// smooth drawing
const clickX = new Array();
const clickY = new Array();
const clickDrag = new Array();