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
        this.playerPositionJump = this.playerPosition.y
        this.velocity = 1
        this.gravity = 0.4


        this.keys = keys

        this.init()
        this.setListeners()
    }

    init() {
        this.playerInstance = new Image()
        this.playerInstance.src = './img/skater.png'
    }

    drawSkater() {
        this.move()
        this.ctx.drawImage(this.playerInstance, this.playerPosition.x, this.playerPosition.y, this.playerSize.w, this.playerSize.h)
    }
    move() {
        if (this.playerPosition.y < this.playerPositionJump) {
            this.playerPosition.y += this.velocity;
            this.velocity += this.gravity;
        } else {
            this.playerPosition.y = this.playerPositionJump;
            this.velocity = 1;
        }
    }

    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.code) {
                case this.keys.TOP:
                    if (this.playerPosition.y >= this.playerPositionJump) {
                        this.jump()
                    }
                    break
            }
        })
    }

    jump() {
        this.playerPosition.y -= 100;
        this.velocity -= 8;
    }


}

