class Building {
    constructor(ctx, canvasSize, width, height) {
        this.ctx = ctx
        this.width = width
        this.heigth = height
        this.canvasSize = canvasSize

        // this.image = new Image;
        // this.image.src = "./img/trashcan.png";

        this.buildingPosition = {
            x: this.canvasSize.w,
            y: this.canvasSize.h - 120
        }

        this.velocity = 6
    }

    drawBuilding() {
        this.move()
        // this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth)
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.buildingPosition.x, this.buildingPosition.y, this.width, this.heigth)
    }

    move() {
        this.buildingPosition.x -= this.velocity;
    }
}