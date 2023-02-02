class Background {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.image = new Image()
        this.image.src = "./img/city.png"
        this.imageB = new Image()
        this.imageB.src = "./img/roadcopia.png"
        this.imageBW = 864
        this.imageBH = 50

        this.positionX = 0
        this.positionY = 0

        this.velocity = 2
    }

    drawBackground() {
        this.ctx.drawImage(this.image, this.positionX, this.positionY, this.canvasSize.w, this.canvasSize.h)
        this.ctx.drawImage(this.image, this.positionX + this.canvasSize.w, this.positionY, this.canvasSize.w, this.canvasSize.h)

        this.move()
    }

    drawRoad() {
        this.ctx.drawImage(this.imageB, this.positionX, this.canvasSize.y - this.imageBH, this.imageBW, this.imageBH)
        this.ctx.drawImage(this.imageB, this.positionX + this.imageBW, this.canvasSize.y - this.imageBH, this.imageBW, this.imageBH)
        this.move()

    }
    move() {
        if (this.positionX <= -this.canvasSize.w) {
            this.positionX = 0;
        }
        this.positionX -= this.velocity
    }
}