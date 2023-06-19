import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Maincharacter } from './character'
import { platform } from './platform.js'
import { Background } from './background.js'
import { Portal } from './portal'
import { Button } from './button'
import { level1 } from './level1'
import { Retrybutton } from './retrybutton'


export class Gameoverscreen extends ex.Scene {
    game
    score
    gameover
    scoreLabel

    constructor(score) {
        super();
        this.score = score
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        this.scoreLabel = new ex.Label({
            text: `Score: 0`,
            pos: new ex.Vector(100, 100),
            font: new ex.Font({
                unit: ex.FontUnit.Px,
                size: 20,
            })
        })
        this.add(this.scoreLabel)

        let restartbutton = new Retrybutton(100, 100, 20, 20)
        restartbutton.on('pointerup', () => {
            this.game.goToScene('level1')
        })
        this.add(restartbutton)
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startScene()
    }

    onPreUpdate() {
        this.scoreLabel.text = `Score: ${this.score.getScore()}`

    }

    startScene() {


        this.gameover = new ex.Label({
            text: `GAME OVER`,
            pos: new ex.Vector(200, 100),
            font: new ex.Font({
                family: 'impact',
                size: 100,
                unit: ex.FontUnit.Px
            })
        })
        this.add(this.gameover)



    }


}
