// calculate mouse pos depending on where the canvas is
// https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function drawNumber(x, y) {
    num += 1;
    imgCtx.font = "bold 42px sans-serif";
    imgCtx.textAlign = "center";
    imgCtx.fillText(num, x, y);
}
