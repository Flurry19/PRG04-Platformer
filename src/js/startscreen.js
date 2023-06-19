import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Maincharacter } from './character'
import { platform } from './platform.js'
import { Background } from './background.js'
import { Portal } from './portal'
import { Button } from './button'
import { level1 } from './level1'

export class Startscreen extends ex.Scene {
    game
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startScene()
    }
    startScene() {
        let startbutton = new Button(300, 250)
        startbutton.on('pointerup', () => {
            this.game.goToScene('level1')
        })
        this.add(startbutton)


        // let level1 = new level1()

        // this.add(level1)


    }

    // onInitialize(evt, engine) {
    //     const startbutton = new Button(300, 250);
    //     this.add(startbutton);
    //     fish.pointer.useGraphicsBounds = true;
    //     startbutton.enableCapturePointer = true;
    //     startbutton.on("pointerup", (evt) => {
    //         engine.goToScene('level1')
    //         console.log('click')
    //     })
    // }

    // update(engine, evt) {

    // if (this.clicked) {
    //     engine.goToScene('level1')
    //     console.log('click')

    //     }
    // }

}