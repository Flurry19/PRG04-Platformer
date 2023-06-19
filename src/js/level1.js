import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Maincharacter } from './character'
import { platform } from './platform.js'
import { Background } from './background.js'
import { Portal } from './portal'
import { Enemy } from './enemy'
import { Coin } from './coin'

export class level1 extends ex.Scene {

    score
    constructor(score) {
        super({})
        this.score = score
    }

    onInitialize(Engine) {
        //Background
        const backgroundImage = Resources.Background.toSprite();
        const background = new Background(-350, -200, 10, 100, backgroundImage);
        this.add(background);

        //Score label
        this.scoreLabel = new ex.Label({
            text: `Score: 0`,
            pos: new ex.Vector(100, 100),
            font: new ex.Font({
                unit: ex.FontUnit.Px,
                size: 20,
                color: ex.Color.White
            })
        })
        this.add(this.scoreLabel)

        //Platforms
        const platform1 = new platform(0, 580, 2000, 20, ex.Color.Green);
        this.add(platform1);

        const platform2 = new platform(100, 530, 100, 20);
        this.add(platform2);

        const platform3 = new platform(250, 480, 100, 20);
        this.add(platform3);

        const platform4 = new platform(400, 430, 100, 20);
        this.add(platform4);

        const platform5 = new platform(550, 380, 100, 20);
        this.add(platform5);

        const platform6 = new platform(750, 330, 1000, 20);
        this.add(platform6);

        //Coins
        const coin1 = new Coin(120, 470, 2000, 2000, this.score)
        this.add(coin1)

        const coin2 = new Coin(270, 420, 2000, 2000, this.score)
        this.add(coin2)

        const coin3 = new Coin(420, 370, 2000, 2000, this.score)
        this.add(coin3)

        const coin4 = new Coin(570, 320, 2000, 2000, this.score)
        this.add(coin4)

        //Portal
        const portal = new Portal();
        portal.pos = new ex.Vector(1100, 250)
        this.add(portal);

        //Enemy
        const enemy = new Enemy()
        enemy.pos = new ex.Vector(790, 300)
        enemy.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(800, 300, 100)
            repeatCtx.moveTo(1000, 300, 100)
        })
        this.add(enemy)

        //Player
        const player = new Maincharacter(this.score)
        this.add(player)

        //Borders
        let leftWall = new ex.Actor({
            pos: ex.vec(-1, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })
        let rightWall = new ex.Actor({
            pos: ex.vec(1200, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })
        let foundation = new ex.Actor({
            pos: ex.vec(0, 600),
            width: 10000,
            height: 10,
            collisionType: ex.CollisionType.Fixed
        })

        this.add(foundation)
        this.add(leftWall);
        this.add(rightWall)

    }

    onPreUpdate() {
        //Editing score
        this.scoreLabel.text = `Score: ${this.score.getScore()}`
    }

}
