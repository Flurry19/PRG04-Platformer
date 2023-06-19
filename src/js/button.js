import * as ex from 'excalibur'
import { Resources } from './resources'

export class Button extends ex.ScreenElement {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: 800,
            height: 800,
            anchor: ex.Vector.Zero,
        });
        this.graphics.use(Resources.Startbutton.toSprite());
        this.scale = new ex.Vector(0.5, 0.5)

    }


    // isClicked() {
    //     return this.clicked
    // }
    // setClicked() {
    //     this.clicked = false
    // }
}

// export class Retrybutton extends Button {
//     constructor(x, y, width, height) {
//         super({
//         });
//         this.graphics.use(Resources.Retrybutton.toSprite())

//     }
// }