class Line {
    constructor() {
        this.r = drawColorR;
        this.g = drawColorG;
        this.b = drawColorB;
        this.size = drawSize;
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();
    }

    reDraw() {
        // imgCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height); // Clears the canvas

        // imgCtx.strokeStyle = "#000";
        imgCtx.strokeStyle = `rgb(${this.r},${this.g},${this.b})`;
        imgCtx.lineJoin = "round";
        imgCtx.lineWidth = this.size;

        for(var i=0; i < this.clickX.length; i++) {
            imgCtx.beginPath();
            if (this.clickDrag[i] && i) {
            imgCtx.moveTo(this.clickX[i-1], this.clickY[i-1]);
            } else {
                imgCtx.moveTo(this.clickX[i]-1, this.clickY[i]);
            }
            imgCtx.lineTo(this.clickX[i], this.clickY[i]);
            imgCtx.closePath();
            imgCtx.stroke();
        }
    }

    drawDefault(x, y, dragging) {
        // full credits for drawDefault and reDraw go to:
        // http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
        this.reDraw();
    }
}