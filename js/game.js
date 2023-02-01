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
    platforms: [],
    keys: {
        TOP: 'ArrowUp',
        PAINT: 'Space'
    },
    framesCounter: 0,
    framesIndex: 0,
    background: undefined,
    player: undefined,
    coins: [],
    collectedCoins: 0,
    currenteCoins: 0,
    score: 0,
    coinBoard: undefined,
    crash: true,
    grounded: undefined,
    backgroundTrack: new Audio("./audio/background.wav"),
    canCounter: 0,
    graffitiCans: [],

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
            w: 1000,
            h: 600
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

            this.generatePlatform()
            this.clearPlatform()

            this.generateGraffitiCans()
            this.clearGraffitiCans()

            this.checkCollisionCoin()
            this.checkCollisionGraffitiCan()
            this.checkCollisionBuildings()
            this.checkCollisionPlatforms()
            this.player.canCounter = this.canCounter


            this.hasCrashed() && this.gameOver()
            this.winGame()


        }, 1000 / this.FPS)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize)
        this.player = new Player(this.ctx, this.canvasSize, 50, 50, this.keys)
        this.obstacles = []
        this.coins = []
        this.buildings = []
        this.graffitiCans = []
        this.platforms = []


    },

    drawAll() {
        this.background.drawBackground()
        this.obstacles.forEach(obs => obs.drawImage())
        this.buildings.forEach(place => place.drawBuilding())
        this.coins.forEach(coin => coin.drawCoin())
        this.platforms.forEach(plat => plat.drawPlatform())
        this.player.drawSkater(this.framesCounter)
        this.graffitiCans.forEach(can => can.drawGraffitiCan())
        this.drawCollectedCoins()
        this.drawScore()

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateCoins() {

        if (this.framesCounter % 40 === 0) {
            const coinMaxY = this.canvasSize.h - 20
            const coinMinY = this.canvasSize.h - 80

            let positionCoinY = Math.floor(Math.random() * (coinMaxY - coinMinY + 1)) + coinMinY;
            this.coins.push(new Coins(this.ctx, this.canvasSize.w, positionCoinY))

        }

    },

    generateObstacles() {
        if (this.framesCounter % 60 === 0) {
            this.obstacles.push(
                new Obstacle(this.ctx, this.canvasSize)
            )
        }

    },

    generateBuilding() {
        if (this.framesCounter === 300) {
            this.buildings.push(
                new Building(this.ctx, this.canvasSize, 1, 430, 160)
            )
        }

        if (this.framesCounter === 50) {
            this.buildings.push(
                new Building(this.ctx, this.canvasSize, 2, 118, 61)
            )
        }


    },

    generatePlatform() {
        if (this.framesCounter % 100 === 0) {
            this.platforms.push(
                new Platform(this.ctx, this.canvasSize, 0, 50, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 50, 50, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 100, 50, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 150, 50, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 200, 50, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 250, 50, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 300, 50, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 150, 100, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 200, 100, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 250, 100, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 300, 100, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 350, 50, 1, 50, 50),)


        }
    },

    generateGraffitiCans() {
        if (this.framesCounter % 50 === 0) {

            this.graffitiCans.push(new GraffitiCan(this.ctx, this.canvasSize))
        }
    },

    clearPlatform() {
        this.platforms = this.platforms.filter(plat => plat.platformPosition.x + plat.width >= 0)
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

    clearGraffitiCans() {
        this.graffitiCans = this.graffitiCans.filter(graffitiCan => graffitiCan.graffitiCanPosition.x >= 0)
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
            if (this.player.playerPosition.x + this.player.playerSize.w >= this.coins[i].coinPosition.x &&
                this.player.playerPosition.x <= this.coins[i].coinPosition.x + this.coins[i].coinSize &&
                this.player.playerPosition.y + this.player.playerSize.h >= this.coins[i].coinPosition.y &&
                this.player.playerPosition.y <= this.coins[i].coinPosition.y + this.coins[i].coinSize) {
                this.collectedCoins++;
                this.score += 5
                this.coins.splice(i, 1);
            }
        }

    },

    checkCollisionPlatforms() {

        const crashedP = this.platforms.some(plat => {
            return (

                this.player.playerPosition.y + this.player.playerSize.h + this.player.velocity >= plat.platformPosition.y &&
                this.player.playerPosition.x + this.player.playerSize.w >= plat.platformPosition.x &&
                this.player.playerPosition.x <= plat.platformPosition.x + plat.width

            )
        })
        if (crashedP) {
            this.player.velocity = 0
            this.player.canJump = true
            this.score += 10
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
            this.player.canJump = true
        }
    },

    checkCollisionGraffitiCan() {
        for (let i = 0; i < this.graffitiCans.length; i++) {
            if (this.player.playerPosition.x + this.player.playerSize.w >= this.graffitiCans[i].graffitiCanPosition.x &&
                this.player.playerPosition.x <= this.graffitiCans[i].graffitiCanPosition.x + this.graffitiCans[i].graffitiCanSize.w &&
                this.player.playerPosition.y + this.player.playerSize.h >= this.graffitiCans[i].graffitiCanPosition.y &&
                this.player.playerPosition.y <= this.graffitiCans[i].graffitiCanPosition.y + this.graffitiCans[i].graffitiCanSize.h) {
                this.graffitiCans.splice(i, 1);
                this.canCounter++;
            }
        }
    },




    drawCollectedCoins() {
        this.ctx.fillStyle = 'black'
        this.ctx.font = '30px "Roboto"'
        this.ctx.fillText(`Coins: ${this.collectedCoins}`, this.canvasSize.w - 200, 50)
    },

    drawScore() {
        this.ctx.fillStyle = 'black'
        this.ctx.font = '30px "Roboto"'
        this.ctx.fillText(`Score: ${this.score}`, this.canvasSize.w - 400, 50)
    },

    winGame() {
        if (this.framesCounter == 1000) {
            clearInterval(1)
            document.querySelector('#win-game').style.display = 'block'
            this.backgroundTrack.pause()

        }
    },





    gameOver() {
        clearInterval(1)
        document.querySelector('#game-over').style.display = 'block'
        this.backgroundTrack.pause()
    },

}


