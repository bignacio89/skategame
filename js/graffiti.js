class Graffiti {
    constructor(ctx, canvasSize, playerPosition, playerSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.graffitiSize = {
            w: 50,
            h: 50
        }
        this.graffitiPosition = {
            x: playerPosition.x + 100,
            y: playerPosition.y - 100
        }
    }
    drawGraffiti() {
        console.log("COMPRUEBO QUE ES DESDE EL GRAFITI")
        this.ctx.fillStyle = "red",
            this.ctx.fillRect(this.graffitiPosition.x, this.graffitiPosition.y, this.graffitiSize.w, this.graffitiSize.h)
        this.move()
    }
    move() {
        this.graffitiPosition.x -= 2
    }
}









