class Coins {
    constructor(ctx, gameWidth, positionY) {
        this.ctx = ctx
        this.coinSize = 30
        // this.image = new Image;
        // this.image.src = "./img/trashcan.png";

        this.coinPosition = {
            x: gameWidth,
            y: positionY
        }

        this.velocity = 10
    }

    drawCoin() {
        this.move()
        // this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth)
        this.ctx.fillStyle = "yellow"
        this.ctx.fillRect(this.coinPosition.x, this.coinPosition.y, this.coinSize, this.coinSize)
    }

    move() {
        this.coinPosition.x -= this.velocity;
    }
}

