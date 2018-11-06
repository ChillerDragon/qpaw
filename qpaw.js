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
    drawDefault(x, y, dragging);
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

function drawDefault(x, y, dragging) {
    // full credits for drawDefault and reDraw go to:
    // http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    reDraw();
}

function reDraw() {
    imgCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height); // Clears the canvas

    imgCtx.strokeStyle = "#000";
    imgCtx.lineJoin = "round";
    imgCtx.lineWidth = drawSize;

    for(var i=0; i < clickX.length; i++) {
      imgCtx.beginPath();
      if(clickDrag[i] && i){
        imgCtx.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         imgCtx.moveTo(clickX[i]-1, clickY[i]);
       }
       imgCtx.lineTo(clickX[i], clickY[i]);
       imgCtx.closePath();
       imgCtx.stroke();
    }
}