class Line {
  constructor() {
    this.r = drawColorR;
    this.g = drawColorG;
    this.b = drawColorB;
    this.hex = drawColorHex;
    this.size = drawSize;
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
  }

  reDraw() {
    // imgCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height); // Clears the canvas

    // imgCtx.strokeStyle = "#000";
    // imgCtx.strokeStyle = `rgb(${this.r},${this.g},${this.b})`;
    imgCtx.strokeStyle = this.hex;
    imgCtx.lineJoin = 'round';
    imgCtx.lineWidth = this.size;

    for (let i = 0; i < this.clickX.length; i++) {
      imgCtx.beginPath();
      if (this.clickDrag[i] && i) {
        imgCtx.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
      } else {
        imgCtx.moveTo(this.clickX[i] - 1, this.clickY[i]);
      }
      imgCtx.lineTo(this.clickX[i], this.clickY[i]);
      imgCtx.closePath();
      imgCtx.stroke();
    }
  }

  drawDefault(x, y, dragging) {
    // original drawDefault and reDraw by williammalone:
    // http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);
    this.reDraw();
  }

  drawNumber(x, y) {
    num += 1;
    imgCtx.font = 'bold ' + this.size + 'px sans-serif';
    imgCtx.textAlign = 'center';
    imgCtx.fillText(num, x, y);
  }

  drawDotted(x, y) {
    imgCtx.fillStyle = this.hex;
    imgCtx.fillRect(x, y, this.size, this.size);
  }
}
