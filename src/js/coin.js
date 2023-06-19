import * as ex from 'excalibur';
import { Resources } from './resources';
import { Maincharacter } from './character';

export class Coin extends ex.Actor {
    score
    constructor(x, y, width, height, score) {
        super({
            pos: new ex.Vector(x, y),
            width,
            height,
            anchor: ex.Vector.Zero,
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName('coin'),
        });
        this.graphics.use(Resources.Coin.toSprite());
        this.scale = new ex.Vector(0.03, 0.03)
        this.score = score

    }

    onInitialize() {
        this.on('collisionstart', (evt) => this.onCollisionStart(evt))
    }

    onCollisionStart(evt) {
        if (evt.other instanceof Maincharacter) {
            this.score.incrementScore()
            this.kill()
        }

    }
}