imgCanvas.addEventListener("mousemove", (e) => {
    if (!isDraw) {
        return;
    }
    let pos = getMousePos(imgCanvas, e);
    drawNumber(pos.x, pos.y);
});

imgCanvas.addEventListener("mousedown", (e) => {
    isDraw = true;
    let pos = getMousePos(imgCanvas, e);
    drawNumber(pos.x, pos.y);
});

imgCanvas.addEventListener("mouseup", (e) => {
    isDraw = false;
});