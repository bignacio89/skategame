class Platform {
    constructor(ctx, canvasSize, plusX, plusY, type, width, height) {
        this.ctx = ctx
        this.width = width
        this.heigth = height
        this.canvasSize = canvasSize
        this.image = new Image
        this.image.src = "./img/box.png"
        this.plusX = plusX
        this.plusY = plusY

        this.type = type
        this.platformPosition = {
            x: this.canvasSize.w + plusX,
            y: this.canvasSize.h - plusY
        }

        this.velocity = 5
    }

    drawPlatform() {
        if (this.type = 1)
            this.move()
        this.ctx.drawImage(this.image, this.platformPosition.x, this.platformPosition.y, this.width, this.heigth)

    }

    move() {
        this.platformPosition.x -= this.velocity;
    }
}