class Obstacle {
    constructor(ctx, gameWidth) {
        this.ctx = ctx
        this.width = 50
        this.heigth = 60
        // this.image = new Image;
        // this.image.src = "./img/trashcan.png";

        this.obstaclesPosition = {
            x: gameWidth,
            y: 600
        }

        this.velocity = 10
    }

    drawImage() {
        this.move()
        // this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth)
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.obstaclesPosition.x, this.obstaclesPosition.y, this.width, this.heigth)
    }

    move() {
        this.obstaclesPosition.x -= this.velocity;
    }
}


