class GraffitiCan {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.graffitiCanSize = {
            w: 25,
            h: 25
        }
        this.graffitiCanPosition = {
            x: this.canvasSize.w,
            y: this.canvasSize.h - 20
        }
    }
    drawGraffitiCan() {

        this.ctx.fillStyle = "Black"
        this.ctx.fillRect(this.graffitiCanPosition.x, this.graffitiCanPosition.y, this.graffitiCanSize.w, this.graffitiCanSize.h)
        this.move()
    }
    move() {
        this.graffitiCanPosition.x -= 6
    }
}









