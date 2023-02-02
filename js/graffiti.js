class Graffiti {
    constructor(ctx, canvasSize, playerPosition, playerSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.graffitiSize = {
            w: 150,
            h: 150
        }
        this.graffitiPosition = {
            x: playerPosition.x + 100,
            y: playerPosition.y - 100
        }
    }
    drawGraffiti() {
        this.image = new Image
        this.image.src = "./img/pngegg.png"
        this.ctx.drawImage(this.image, this.graffitiPosition.x, this.graffitiPosition.y, this.graffitiSize.w, this.graffitiSize.h)


        this.move()
    }
    move() {
        this.graffitiPosition.x -= 5
    }
}









