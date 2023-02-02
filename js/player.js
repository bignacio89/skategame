class Player {
    constructor(ctx, canvasSize, playerWidth, playerHeight, keys) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.canCounter = 0
        this.playerSize = {
            w: playerWidth,
            h: playerHeight
        }
        this.playerPosition = {
            x: 300,
            y: this.canvasSize.h
        }
        this.velocity = 0
        this.gravity = 0.4
        this.canJump = true
        this.floor = this.canvasSize.h - this.playerSize.h
        this.graffitis = []
        this.graffitisCounter = 0

        this.image = new Image()
        this.image.src = "./img/bartcopia.png"
        this.image.frames = 5
        this.image.framesIndex = 0



        this.keys = keys


        this.setListeners()
    }


    drawSkater(framesCounter) {

        this.ctx.drawImage(
            this.image,
            this.image.width / this.image.frames * this.image.framesIndex,
            0,
            this.image.width / this.image.frames,
            this.image.height,
            this.playerPosition.x,
            this.playerPosition.y,
            this.playerSize.w,
            this.playerSize.h
        )

        this.animate(framesCounter)

        this.move()
        this.graffitis.forEach(paint => paint.drawGraffiti())

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
            this.playerPosition.y -= 100
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
                case this.keys.PAINT:
                    if (this.canCounter > 0) { this.paintGraffiti() }

                    break
            }
        })
    }

    paintGraffiti() {
        this.graffitis.push(new Graffiti(this.ctx, this.canvasSize, this.playerPosition, this.playerSize))
        this.graffitisCounter++
        if (this.graffitisCounter % 2 === 0) {
            this.canCounter--
        }
    }
    clearGraffiti() {
        this.graffitis = this.graffitis.filter(graffiti => graffiti.graffitiPosition.x + graffiti.graffitiSize.w >= 0)
    }
}







