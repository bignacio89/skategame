const skateGame = {
    name: 'skate Game',
    description: 'skate game app',
    version: '1.0.0',
    license: undefined,
    author: 'Bernardo Vera, Diego Rodriguez',
    canvasTag: undefined,
    ctx: undefined,
    playerInstance: undefined,
    canvasSize: { w: undefined, h: undefined },
    playerPosition: {
        x: 200,
        y: 600
    },
    playerSize: {
        w: 50,
        h: 50
    },

    keys: {
        TOP: 'Space',
    },

    framesIndex: 0,
    background: undefined,
    players: [],



    init() {
        this.setContext()
        this.setDimensions()
        this.start()

    },


    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
        console.log("hola")
    },

    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }

        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)

    },

    start() {
        this.reset()

        setInterval(() => {
            this.clearAll()
            this.drawAll()

        }, 10)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h,)
        this.players.push(
            new Player(this.ctx, this.canvasSize, 50, 50, this.keys)
        )

    },

    drawAll() {
        this.background.drawBackground()
        this.players.forEach(elm => elm.drawSkater())
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    // generateObstacles() {
    //     if (this.framesCounter % 20 === 0) {
    //         this.obstacles.push(new Obstacle(this.ctx, this.width, this.player.posY0, this.player.height))
    //     }
    // },

    // clearObstacles() {
    //     this.obstacles = this.obstacles.filter(obs => obs.posX >= 0)
    // },

    // isCollision() {
    //     return this.obstacles.some(obs => {
    //         return (
    //             this.player.posX + this.player.width >= obs.posX &&
    //             this.player.posY + this.player.height >= obs.posY &&
    //             this.player.posX <= obs.posX + obs.width
    //         )
    //     })
    // },



}





