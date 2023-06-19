import * as ex from 'excalibur';
import { Resources } from './resources';

export class Portal extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: 800,
            height: 800,
            color: ex.Color.Viridian, // Set the color to Green
            anchor: ex.Vector.Zero,
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName('portal'),
        });
        this.graphics.use(Resources.Portal.toSprite());
        this.scale = new ex.Vector(0.1, 0.1)

    }
}