class Building {
    constructor(ctx, canvasSize, type, width, height) {
        this.ctx = ctx
        this.width = width
        this.heigth = height
        this.canvasSize = canvasSize
        this.type = type


        this.buildingPosition = {
            x: this.canvasSize.w,
            y: this.canvasSize.h - this.heigth
        }

        this.velocity = 4
    }

    drawBuilding() {
        if (this.type == 1) {
            this.move()
            this.image = new Image
            this.image.src = "./img/bus1.png"
            this.ctx.drawImage(this.image, this.buildingPosition.x, this.buildingPosition.y, this.width, this.heigth)

        }

        if (this.type == 2) {
            this.move()
            this.image = new Image
            this.image.src = "./img/bench.png"
            this.ctx.drawImage(this.image, this.buildingPosition.x, this.buildingPosition.y, this.width, this.heigth)

        }
    }


    move() {
        this.buildingPosition.x -= this.velocity;
    }
}