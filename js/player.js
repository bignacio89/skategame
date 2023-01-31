class Player {
    constructor(ctx, canvasSize, playerWidth, playerHeight, keys) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerSize = {
            w: playerWidth,
            h: playerHeight
        }

        this.playerPosition = {
            x: 400,
            y: this.canvasSize.h
        }
        this.velocity = 0
        this.gravity = 0.4
        this.canJump = true
        this.floor = this.canvasSize.h - this.playerSize.h


        this.keys = keys

        this.setListeners()
    }


    drawSkater() {
        this.move()
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.playerPosition.x, this.playerPosition.y, this.playerSize.w, this.playerSize.h)
    }

    move() {
        if (this.playerPosition.y < this.floor) {
            this.playerPosition.y += this.velocity
            this.velocity += this.gravity
        }

        else {
            this.playerPosition.y = this.floor
            this.velocity = 1
            this.canJump = true
        }

    }

    jump() {
        if (this.canJump) {
            this.playerPosition.y -= 200
            this.velocity -= 8
            this.canJump = false
        }
    }





    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.code) {
                case this.keys.TOP:
                    this.jump()
                    break
            }
        })
    }
}







