import * as ex from 'excalibur';
import { Resources } from './resources';

export class platform extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            color: ex.Color.Viridian, // Set the color to Green
            anchor: ex.Vector.Zero,
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName('platform'),
        });
        // this.graphics.use(Resources.Platform.toSprite());

    }
}