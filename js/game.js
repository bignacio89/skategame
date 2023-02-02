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
    buildingsGraffiti: [],
    platforms: [],
    zombies: [],
    keys: {
        TOP: 'ArrowUp',
        PAINT: 'Space'
    },
    framesCounter: 0,
    framesIndex: 0,
    background: [],
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
    canCounter: 0,



    init() {
        this.setContext()
        this.setDimensions()
        this.start()
        this.backgroundTrack.play()
        this.backgroundTrack.loop = true
        this.backgroundTrack.volume = .50
    },


    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },

    setDimensions() {
        this.canvasSize = {
            w: 1161,
            h: 653
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

            this.generateBuildingGraffiti()
            this.clearBuildingsGraffiti()

            this.generatePlatform()
            this.clearPlatform()

            this.generateGraffitiCans()
            this.clearGraffitiCans()

            this.generateZombies()
            this.clearZombies()

            this.checkCollisionCoin()
            this.checkCollisionGraffitiCan()

            this.checkCollisionBuildings()
            this.checkCollisionPlatforms()
            console.log(this.framesCounter)



            this.hasCrashed() && this.gameOver()
            this.hasFight() && this.gameOver()
            this.winGame()


        }, 1000 / this.FPS)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize)
        this.player = new Player(this.ctx, this.canvasSize, 98, 104, this.keys)
        this.obstacles = []
        this.coins = []
        this.buildings = []
        this.buildingsGraffiti = []
        this.zombies = []
        this.graffitiCans = []
        this.platforms = []



    },

    drawAll() {
        this.background.drawBackground()
        this.obstacles.forEach(obs => obs.drawImage())
        this.buildings.forEach(elm => elm.drawBuilding())
        this.buildingsGraffiti.forEach(place => place.drawBuildingGraffiti())
        this.coins.forEach(coin => coin.drawCoin())
        this.zombies.forEach(zombies => zombies.drawZombie(this.framesCounter))
        this.platforms.forEach(plat => plat.drawPlatform())
        this.player.drawSkater(this.framesCounter)
        this.graffitiCans.forEach(can => can.drawGraffitiCan())
        this.drawCollectedCoins()
        this.drawCanCounter()
        this.drawScore()

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateCoins() {

        if (this.framesCounter <= 160 && this.framesCounter % 15 === 0) {
            const coinMaxY = this.canvasSize.h - 20
            const coinMinY = this.canvasSize.h - 140

            let positionCoinY = Math.floor(Math.random() * (coinMaxY - coinMinY + 1)) + coinMinY;
            this.coins.push(new Coins(this.ctx, this.canvasSize.w, positionCoinY))

        }

        if (this.framesCounter > 900 && this.framesCounter % 15 === 0 && this.framesCounter < 1000) {
            const coinMaxY = this.canvasSize.h - 30
            const coinMinY = this.canvasSize.h - 170

            let positionCoinY = Math.floor(Math.random() * (coinMaxY - coinMinY + 1)) + coinMinY;
            this.coins.push(new Coins(this.ctx, this.canvasSize.w, positionCoinY))

        }

        if (this.framesCounter > 1100 && this.framesCounter % 15 === 0 && this.framesCounter < 1200) {
            const coinMaxY = this.canvasSize.h - 30
            const coinMinY = this.canvasSize.h - 170

            let positionCoinY = Math.floor(Math.random() * (coinMaxY - coinMinY + 1)) + coinMinY;
            this.coins.push(new Coins(this.ctx, this.canvasSize.w, positionCoinY))

        }

    },

    generateObstacles() {
        if (this.framesCounter < 170) {
            if (this.framesCounter % 80 === 0) {
                this.obstacles.push(
                    new Obstacle(this.ctx, this.canvasSize)
                )
            }
        }




        if (this.framesCounter === 880) {

            this.obstacles.push(
                new Obstacle(this.ctx, this.canvasSize))

        }

    },

    generateBuilding() {
        if (this.framesCounter === 715) {
            this.buildings.push(
                new Building(this.ctx, this.canvasSize, 1, 430, 160)
            )
        }

        if (this.framesCounter === 670) {
            this.buildings.push(
                new Building(this.ctx, this.canvasSize, 2, 118, 61)
            )
        }

        if (this.framesCounter === 830) {
            this.buildings.push(
                new Building(this.ctx, this.canvasSize, 2, 118, 61)
            )
        }

        if (this.framesCounter === 900) {
            this.buildings.push(
                new Building(this.ctx, this.canvasSize, 2, 118, 61)
            )
        }

        if (this.framesCounter === 1300) {
            this.buildings.push(
                new Building(this.ctx, this.canvasSize, 3, 150, 150)
            )
        }


    },

    generateBuildingGraffiti() {
        if (this.framesCounter === 430) {
            this.buildingsGraffiti.push(
                new BuildingGraffiti(this.ctx, this.canvasSize, 1, 934, 418)
            )
        }

        if (this.framesCounter === 1000) {
            this.buildingsGraffiti.push(
                new BuildingGraffiti(this.ctx, this.canvasSize, 2, 1324, 500)
            )
        }



    },

    generateZombies() {
        if (this.framesCounter === 2000) {
            this.zombies.push(
                new Zombies(this.ctx, this.canvasSize)
            )
        }
        if (this.framesCounter === 2200) {
            this.zombies.push(
                new Zombies(this.ctx, this.canvasSize)
            )
        }
    },

    generatePlatform() {
        if (this.framesCounter == 250) {
            this.platforms.push(
                new Platform(this.ctx, this.canvasSize, 0, 100, 1, 100, 100),
                new Platform(this.ctx, this.canvasSize, 100, 100, 1, 100, 100),
                new Platform(this.ctx, this.canvasSize, 200, 100, 1, 100, 100),
                new Platform(this.ctx, this.canvasSize, 300, 100, 1, 100, 100),
                new Platform(this.ctx, this.canvasSize, 400, 100, 1, 100, 100),
                new Platform(this.ctx, this.canvasSize, 500, 100, 1, 100, 100),
                new Platform(this.ctx, this.canvasSize, 200, 150, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 250, 150, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 300, 150, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 350, 150, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 400, 150, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 450, 150, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 500, 150, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 400, 200, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 450, 200, 1, 50, 50),
                new Platform(this.ctx, this.canvasSize, 500, 200, 1, 50, 50),

            )
        }
    },

    generateGraffitiCans() {
        if (this.framesCounter == 2) {

            this.graffitiCans.push(
                new GraffitiCan(this.ctx, this.canvasSize))
        }

        if (this.framesCounter == 420) {

            this.graffitiCans.push(
                new GraffitiCan(this.ctx, this.canvasSize))
        }

        if (this.framesCounter == 940) {

            this.graffitiCans.push(
                new GraffitiCan(this.ctx, this.canvasSize))
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

    clearZombies() {
        this.zombies = this.zombies.filter(hero => hero.zombiePosition.x + hero.width >= 0)
    },

    clearBuildings() {
        this.buildings = this.buildings.filter(hero => hero.buildingPosition.x + hero.width >= 0)
    },

    clearBuildingsGraffiti() {
        this.buildingsGraffiti = this.buildingsGraffiti.filter(hero => hero.buildingPosition.x + hero.width >= 0)
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

    hasFight() {
        return this.zombies.some(obs => {
            return (
                this.player.playerPosition.x + this.player.playerSize.w >= obs.zombiePosition.x &&
                this.player.playerPosition.y + this.player.playerSize.h >= obs.zombiePosition.y &&
                this.player.playerPosition.x <= obs.zombiePosition.x + obs.width

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
            this.score += 4
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
                this.player.canCounter++;
                this.score += 20
            }
        }
    },




    drawCollectedCoins() {
        this.ctx.fillStyle = 'black'
        this.ctx.font = '25px "Sans"'
        this.ctx.fillText(`Coins: ${this.collectedCoins}`, this.canvasSize.w - 200, 50)
    },

    drawScore() {
        this.ctx.fillStyle = 'black'
        this.ctx.font = '25px "Sans"'
        this.ctx.fillText(`Score: ${this.score}`, this.canvasSize.w - 500, 50)
    },

    drawCanCounter() {
        this.ctx.fillStyle = 'black'
        this.ctx.font = '25px "Sans"'
        this.ctx.fillText(`Cans: ${this.player.canCounter}`, this.canvasSize.w - 300, 50)
    },

    winGame() {
        if (this.framesCounter == 1500) {
            clearInterval(1)
            this.backgroundTrack.pause()
            document.querySelector('#win-game').style.display = 'block'
            this.backgroundTrack.pause()

        }
    },


    gameOver() {
        clearInterval(this.interval)

        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.backgroundTrack.pause()

        // this.ctx.fillStyle = 'black'
        // this.ctx.font = '200px "Sans"'
        // this.ctx.fillText(`GAME OVER`, this.canvasSize.w / 4, this.canvasSize / 2)



        // this.ctx.rect(0, 0, this.canvasSize.w, this.canvasSize.h)
        // this.ctx.fillStyle("white")
        // this.backgroundTrack.pause()
    },

}


