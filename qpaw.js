// calculate mouse pos depending on where the canvas is
// https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function drawMain(x, y, dragging) {
  if (!dragging) {
    allLines.push(new Line());
  }
  if (drawMode === 'smooth') {
    allLines[allLines.length - 1].drawDefault(x, y, dragging);
  } else if (drawMode === 'number') {
    allLines[allLines.length - 1].drawNumber(x, y);
  } else if (drawMode === 'dotted') {
    allLines[allLines.length - 1].drawDotted(x, y);
  } else {
    alert('unsupproted draw mode: ' + drawMode);
  }
  deletedLines.length = 0;
}

function redrawAllLines() {
  // clear canvas
  imgCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height);

  // re draw all lines
  for (let i = 0; i < allLines.length; i++) {
    allLines[i].reDraw();
  }
}

function updateColor(color) {
  drawColorHex = color;
  updateColorHistory(color);
}

function updateColorHistory(color) {
  if (usedColors[usedColors.length - 1] == color) {
    return;
  }
  usedColors.push(color);
  const htmlAttrs = `onclick="javascript:updateColor('${color}');" style="color: ${color}"`;
  domColors.insertAdjacentHTML('afterbegin', `<button ${htmlAttrs}>${color}</button>`);
}

function undo() {
  // delete last line and save it in undo array
  const line = allLines.pop();
  if (line) {
    deletedLines.push(line);
  }

  redrawAllLines();
}

function redo() {
  // restore last line from undo array
  const line = deletedLines.pop();
  if (line) {
    allLines.push(line);
  }

  redrawAllLines();
}

function newFile() {
  const fileWidth = prompt('width: ');
  const fileHeight = prompt('height: ');
  if (isNaN(fileHeight) || isNaN(fileWidth)) {
    alert('ERROR: width and height have to be numbers');
    return;
  }
  imgCanvas.height = fileHeight;
  imgCanvas.width = fileWidth;
}
