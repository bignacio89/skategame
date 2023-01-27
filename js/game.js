const skateGame = {
    name: 'skate Game',
    description: 'skate game app',
    version: '1.0.0',
    license: undefined,
    author: 'Bernardo Vera, Diego Rodriguez',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    framesIndex: 0,

    init() {
        this.setContext()
        this.setDimensions()

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



}





