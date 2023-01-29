class Player {
    constructor(ctx, canvasSize, playerWidth, playerHeight, keys) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.playerSize = {
            w: playerWidth,
            h: playerHeight
        }

        this.playerPosition = {
            x: 50,
            y: 600
        }
        this.playerPosJump = this.playerPosY


        this.keys = keys

        this.init()

    }

    init() {
        this.playerInstance = new Image()
        this.playerInstance.src = './img/skater.png'
    }




    move() {
        this.playerPosX += 10
    }

    drawSkater() {
        this.move()
        this.ctx.drawImage(this.playerInstance, this.playerPosition.x, this.playerPosition.y, this.playerSize.w, this.playerSize.h)
    }

    // move() {
    //     // if (this.playerPosY < this.playerPosJump) {
    //     //     this.playerPosY += this.velocityY;
    //     //     this.velocityY += this.gravity;
    //     // } else {
    //     //     this.playerPosY = this.playerPosJump;
    //     //     this.velocityY = 1;
    //     // }
    // }

    // setListeners() {

    //     document.addEventListener("keydown", e => {
    //         switch (e) {
    //             case this.keys.TOP;
    //                 if (this.playerPosY >= this.playerPosJump) {
    //                     this.jump()
    //                 }
    //                 break
    //         }
    //     });
    // }

    // jump() {
    //     this.playerPosY -= 40;
    //     this.velocityY -= 8;


    // }

}

