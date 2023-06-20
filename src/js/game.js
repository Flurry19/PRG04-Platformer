import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { level1 } from './level1'
import { Startscreen } from './startscreen'
import { Gameoverscreen } from './gameoverscreen'
import { Score } from './score'

export class Game extends ex.Engine {

    score

    constructor() {
        super({
            width: 854, //Screen width
            height: 600, //Screen height
            displayMode: ex.DisplayMode.FitScreenAndFill,
            maxFps: 60
        });
        this.start(ResourceLoader).then(() => this.startGame()); //Loading the game
        // this.showDebug(true);
        ex.Physics.acc = new ex.vec(0, 300);
        this.score = new Score()

    }

    startGame() {
        const levelone = new level1(this.score)
        this.addScene("level1", levelone) //Adding level one

        const gameoverscreen = new Gameoverscreen(this.score)
        this.addScene("Gameoverscreen", gameoverscreen) //Adding Game over screen

        const startscreen = new Startscreen()
        this.addScene('Startscreen', startscreen) //Adding startscreen
        this.goToScene('Startscreen') //Going to start screen
    }
}

new Game();





