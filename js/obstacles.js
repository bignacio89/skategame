class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.width = 58
        this.heigth = 72
        this.canvasSize = canvasSize
        this.image = new Image;
        this.image.src = "./img/trashcan.png";

        this.obstaclesPosition = {
            x: this.canvasSize.w,
            y: this.canvasSize.h - this.heigth
        }

        this.velocity = 6
    }

    drawImage() {
        this.move()
        this.ctx.drawImage(this.image, this.obstaclesPosition.x, this.obstaclesPosition.y, this.width, this.heigth)
        // this.ctx.fillStyle = "green"
        // this.ctx.fillRect(this.obstaclesPosition.x, this.obstaclesPosition.y, this.width, this.heigth)
    }

    move() {
        this.obstaclesPosition.x -= this.velocity;
    }
}


