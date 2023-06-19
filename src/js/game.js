import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Maincharacter } from './character'
import { platform } from './platform.js'
import { Background } from './background.js'
import { level1 } from './level1'
import { Startscreen } from './startscreen'
import { Gameoverscreen } from './gameoverscreen'
import { Timescores } from './score'

export class Game extends ex.Engine {

    score

    constructor() {
        super({
            width: 854,
            height: 600,
            displayMode: ex.DisplayMode.FitScreenAndFill,
            maxFps: 60
        });
        this.start(ResourceLoader).then(() => this.startGame());
        this.showDebug(true);
        // ex.Physics.useRealisticPhysics();
        ex.Physics.acc = new ex.vec(0, 300);
        this.score = new Timescores()

    }

    startGame() {
        console.log("start the game!");

        const levelone = new level1(this.score)
        this.addScene("level1", levelone)

        const gameoverscreen = new Gameoverscreen(this.score)
        this.addScene("Gameoverscreen", gameoverscreen)

        const startscreen = new Startscreen()
        this.addScene('Startscreen', startscreen)
        this.goToScene('Startscreen')


    }
}

new Game();





