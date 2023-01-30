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
    FPS: 60,
    playerPosition: {
        x: 200,
        y: 600
    },
    playerSize: {
        w: 50,
        h: 50
    },
    obstacles: [],
    keys: {
        TOP: 'Space',
    },
    framesCounter: 0,
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

        this.interval = setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()
            this.drawAll()

            this.generateObstacles()
            this.clearObstacles()

        }, 1000 / this.FPS)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h,)
        this.players.push(
            new Player(this.ctx, this.canvasSize, 50, 50, this.keys)
        )
        this.obstacles = []

    },

    drawAll() {
        this.background.drawBackground()
        this.players.forEach(elm => elm.drawSkater())
        this.obstacles.forEach(obs => obs.drawImage())
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacles() {
        if (this.framesCounter % 60 === 0) {
            this.obstacles.push(
                new Obstacle(this.ctx, this.canvasSize.w)
            )
        }

    },

    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.posX >= 0)
    },

}





