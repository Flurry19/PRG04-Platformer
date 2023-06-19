import * as ex from "excalibur";
import { Resources } from "./resources.js";
import { Gameoverscreen } from "./gameoverscreen.js";

export class Enemy extends ex.Actor {
    x
    y
    speed
    constructor(x, y) {

        super({
            width: 80,
            height: 100,
            pos: new ex.Vector(x, y)
        });
        const angrydino = Resources.Angrydino.toSprite()
        angrydino.width = 120
        angrydino.height = 100
        this.graphics.add(angrydino)
        this.speed = 300
        this.scale = new ex.Vector(0.6, 0.6)

    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.body.collisionType = ex.CollisionType.Active
        // this.on("precollision", (event) => this.onPreCollision(event))

    }
    // onPreCollision(event) {
    //     const side = event.side
    //     const otherActor = event.other

    //     if (side === 'Top') {
    //         console.log('dino collided on top')
    //     } else if (side === 'Right' || side === 'Left') {
    //         console.log('dino collided right or left')
    //     }
    // }
}
