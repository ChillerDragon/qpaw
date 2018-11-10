imgCanvas.addEventListener('mousemove', (e) => {
  if (!isDraw) {
    return;
  }
  const pos = getMousePos(imgCanvas, e);
  drawMain(pos.x, pos.y, true);
});

imgCanvas.addEventListener('mousedown', (e) => {
  isDraw = true;
  const pos = getMousePos(imgCanvas, e);
  drawMain(pos.x, pos.y);
});

imgCanvas.addEventListener('mouseup', (e) => {
  isDraw = false;
});
