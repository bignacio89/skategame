class Obstacles {
    constructor(ctx, gameWidth, playerPosY, playerHeigth) {
        this.ctx = ctx;
        this.width = 14;
        this.heigth = 100;

        this.posX = gameWidth;
        this.posY = 700;

        this.velX = 10;
    }

    draw() {
        this.ctx.fillRect(this.posX, this.posY, this.width, this.heigth);
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