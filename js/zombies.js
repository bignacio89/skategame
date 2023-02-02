class Zombies {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.width = 119
        this.heigth = 50
        this.canvasSize = canvasSize


        this.zombiePosition = {
            x: this.canvasSize.w,
            y: this.canvasSize.h - this.heigth
        }

        this.velocity = 5

        this.image = new Image()
        this.image.src = "./img/zombies2.png"
        this.image.frames = 2
        this.image.framesIndex = 0
    }

    drawZombie(framesCounter) {

        this.ctx.drawImage(
            this.image,
            this.image.width / this.image.frames * this.image.framesIndex,
            0,
            this.image.width / this.image.frames,
            this.image.height,
            this.zombiePosition.x,
            this.zombiePosition.y,
            this.width,
            this.heigth
        )

        this.animate(framesCounter)

        this.move()


    }

    animate(framesCounter) {
        if (framesCounter % 4 == 0) {
            this.image.framesIndex++
        }

        if (this.image.framesIndex >= this.image.frames) {
            this.image.framesIndex = 0
        }
    }

    move() {
        this.zombiePosition.x -= this.velocity;
    }
}
