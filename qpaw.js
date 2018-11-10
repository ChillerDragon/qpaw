// calculate mouse pos depending on where the canvas is
// https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function drawMain(x, y, dragging) {
  if (!dragging) {
    allLines.push(new Line())
  }
  allLines[allLines.length - 1].drawDefault(x, y, dragging)
}

function drawNumber(x, y) {
  num += 1;
  imgCtx.font = "bold 42px sans-serif";
  imgCtx.textAlign = "center";
  imgCtx.fillText(num, x, y);
}

function drawDotted(x, y) {
  imgCtx.fillStyle = "black";
  imgCtx.fillRect(x, y, 5, 5);
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
