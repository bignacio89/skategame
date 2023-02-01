class Coins {
    constructor(ctx, gameWidth, positionY) {
        this.ctx = ctx
        this.coinSize = 20
        this.image = new Image;
        this.image.src = "./img/coin.png";

        this.coinPosition = {
            x: gameWidth,
            y: positionY
        }

        this.velocity = 4
    }

    drawCoin() {
        this.move()
        this.ctx.drawImage(this.image, this.coinPosition.x, this.coinPosition.y, this.coinSize, this.coinSize)
    }

    move() {
        this.coinPosition.x -= this.velocity;
    }
}

