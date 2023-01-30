class Obstacle {
    constructor(ctx, gameWidth) {
        this.ctx = ctx;
        this.width = 50;
        this.heigth = 100;
        this.image = new Image;
        this.image.src = "./img/trashcan.png"

        this.posX = gameWidth;
        this.posY = 600

        this.velX = 10;
    }

    drawImage() {
        this.move()
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth)
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.posX, this.posY, 200, 200)

        console.log("hola!")
    }

    move() {
        this.posX -= this.velX;
    }
}

// class Obstacle {
//     constructor(ctx, gameWidth, playerPosY0, playerHeight) {

//         this.ctx = ctx;
//         this.width = 14;
//         this.height = this.width * 5;

//         this.posX = gameWidth;
//         this.posY = playerPosY0 + playerHeight - this.height;

//         this.velX = 10;
//     }

//     draw() {
//         this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
//         this.move()
//     }

//     move() {
//         this.posX -= this.velX;
//     }
// }