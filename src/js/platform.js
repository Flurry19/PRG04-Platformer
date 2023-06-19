import * as ex from 'excalibur';
import { Resources } from './resources';

export class platform extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y), //Set the position
            width: width, //Set the width
            height: height, //Set the height
            color: ex.Color.Viridian, // Set the color 
            anchor: ex.Vector.Zero,
            collisionType: ex.CollisionType.Fixed, //Gives a collision in which it can't be moved
            collisionGroup: ex.CollisionGroupManager.groupByName('platform'), //Makes a collision group
        });
    }
}