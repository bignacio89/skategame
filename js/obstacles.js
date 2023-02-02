class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.width = 50
        this.heigth = 62
        this.canvasSize = canvasSize


        this.obstaclesPosition = {
            x: this.canvasSize.w,
            y: this.canvasSize.h - this.heigth
        }

        this.velocity = 5
    }

    drawImage() {
        this.move()
        this.image = new Image;
        this.image.src = "./img/trashcan.png"
        this.ctx.drawImage(this.image, this.obstaclesPosition.x, this.obstaclesPosition.y, this.width, this.heigth)

    }

    move() {
        this.obstaclesPosition.x -= this.velocity;
    }
}


