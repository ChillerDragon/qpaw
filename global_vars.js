const imgCanvas = document.getElementById('draw-canvas');
const imgCtx = imgCanvas.getContext("2d");

let num = 0;
let isDraw = false;

// configs
let drawSize = 5;
let drawColorR = 0;
let drawColorG = 0;
let drawColorB = 0;

// smooth drawing
const allLines = new Array(); // holds the line objects

