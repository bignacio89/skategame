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
    obstacles: [],
    buildings: [],
    keys: {
        TOP: 'Space',
    },
    framesCounter: 0,
    framesIndex: 0,
    background: undefined,
    player: undefined,
    coins: [],
    collectedCoins: 0,
    currenteCoins: 0,
    coinBoard: undefined,
    crash: true,




    init() {
        this.setContext()
        this.setDimensions()
        this.start()

    },


    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
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

            this.generateCoins()
            this.clearCoins()

            this.generateBuilding()
            this.clearBuildings()

            this.checkCollisionCoin()

            this.checkCollisionBuildings()

            console.log(this.collectedCoins)

            this.hasCrashed() && this.gameOver()


        }, 1000 / this.FPS)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h,)
        this.player = new Player(this.ctx, this.canvasSize, 50, 50, this.keys)
        this.obstacles = []
        this.coins = []
        this.buildings = []
        // this.coinBoard = new Board(this.ctx, this.collectedCoins, this.canvasSize.w)

    },

    drawAll() {
        this.background.drawBackground()
        this.player.drawSkater()
        this.obstacles.forEach(obs => obs.drawImage())
        this.coins.forEach(coin => coin.drawCoin())
        this.buildings.forEach(place => place.drawBuilding())
        // this.coinBoard.drawBoard()
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateCoins() {

        if (this.framesCounter % 40 === 0) {
            const coinMaxY = 600
            const coinMinY = 500

            let positionCoinY = Math.floor(Math.random() * (coinMaxY - coinMinY + 1)) + coinMinY;
            this.coins.push(new Coins(this.ctx, this.canvasSize.w, positionCoinY))

        }

    },

    generateObstacles() {
        if (this.framesCounter % 60 === 0) {
            this.obstacles.push(
                new Obstacle(this.ctx, this.canvasSize.w)
            )
        }

    },

    generateBuilding() {
        if (this.framesCounter % 80 === 0) {
            this.buildings.push(
                new Building(this.ctx, this.canvasSize.w, 300, 30)
            )

        }
    },

    clearCoins() {
        this.coins = this.coins.filter(coin => coin.coinPosition.x >= 0)
    },

    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.obstaclesPosition.x >= 0)
    },

    clearBuildings() {
        this.buildings = this.buildings.filter(hero => hero.buildingPosition.x + hero.width >= 0)
    },

    hasCrashed() {
        return this.obstacles.some(obs => {
            return (
                this.player.playerPosition.x + this.player.playerSize.w >= obs.obstaclesPosition.x &&
                this.player.playerPosition.y + this.player.playerSize.h >= obs.obstaclesPosition.y &&
                this.player.playerPosition.x <= obs.obstaclesPosition.x + obs.width

            )
        })
    },

    checkCollisionCoin() {
        for (let i = 0; i < this.coins.length; i++) {
            let conditionX = Math.abs(this.player.playerPosition.x - this.coins[i].coinPosition.x - 30 / 2);
            let conditionY = Math.abs(this.player.playerPosition.y - this.coins[i].coinPosition.y - 30 / 2);
            if (conditionX < this.player.playerSize.w / 2 + 30 / 2 && conditionY < this.player.playerSize.h / 2 + 30 / 2) {
                this.collectedCoins++;
                this.coins.splice(i, 1);
                // this.coinBoard.setText(`Points: ${this.collectedCoins}`)
            }
        }
    },

    checkCollisionBuildings() {
        const crashed = this.buildings.some(building => {
            return (
                this.player.playerPosition.y + this.player.playerSize.h + this.player.velocity >= building.buildingPosition.y &&
                this.player.playerPosition.x + this.player.playerSize.w >= building.buildingPosition.x &&
                this.player.playerPosition.x <= building.buildingPosition.x + building.width
            )
        })
        if (crashed) {
            this.player.velocity = 0
        }
        console.log(':gafas_de_sol:')
    },






    gameOver() {
        clearInterval(this.interval)
    },

}





