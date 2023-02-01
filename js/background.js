class Background {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.image = new Image()
        this.image.src = "./img/city.png"
        this.imageB = new Image()
        this.imageB.src = "./img/road.png"

        this.positionX = 0
        this.positionY = 0

        this.velocity = 2
    }

    drawBackground() {
        this.ctx.drawImage(this.image, this.positionX, this.positionY, this.canvasSize.w, this.canvasSize.h)
        this.ctx.drawImage(this.image, this.positionX + this.canvasSize.w, this.positionY, this.canvasSize.w, this.canvasSize.h)

        this.move()
    }
    move() {
        if (this.positionX <= -this.canvasSize.w) {
            this.positionX = 0;
        }
        this.positionX -= this.velocity
    }
}