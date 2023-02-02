class GraffitiCan {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.graffitiCanSize = {
            w: 27,
            h: 52
        }
        this.graffitiCanPosition = {
            x: this.canvasSize.w,
            y: this.canvasSize.h - 55
        }
    }
    drawGraffitiCan() {
        this.image = new Image
        this.image.src = "./img/canSpray.png"
        this.ctx.drawImage(this.image, this.graffitiCanPosition.x, this.graffitiCanPosition.y, this.graffitiCanSize.w, this.graffitiCanSize.h)
        this.move()
    }
    move() {
        this.graffitiCanPosition.x -= 5
    }
}









