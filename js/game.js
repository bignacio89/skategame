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
        TOP: 38,
    },

    framesIndex: 0,
    players: [],



    init() {
        this.setContext()
        this.setDimensions()
        this.createPlayer()
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
        setInterval(() => {
            this.clearAll()
            this.drawAll()

        }, 10)
    },

    createPlayer() {
        this.players.push(
            new Player(this.ctx, this.canvasSize, 50, 50, this.keys)
        )

    },

    drawAll() {
        this.players.forEach(elm => elm.drawSkater())
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },





}





