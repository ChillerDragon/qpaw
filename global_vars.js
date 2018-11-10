/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const imgCanvas = document.getElementById('draw-canvas');
const imgCtx = imgCanvas.getContext('2d');

let num = 0;
let isDraw = false;

// configs
let drawSize = 5;
let drawColorR = 0;
let drawColorG = 0;
let drawColorB = 0;
let drawColorHex = '#000';

// smooth drawing
const allLines = []; // holds the line objects
const deletedLines = []; // holds undo line objects
