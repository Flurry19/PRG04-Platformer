import * as ex from "excalibur";
import { Resources, ResourceLoader } from "./resources";
import { platform } from "./platform";
import { Startscreen } from "./startscreen.js";
import { Portal } from "./portal";
import { Enemy } from "./enemy";

export class Maincharacter extends ex.Actor {
    health
    speed
    jumped = false
    onGround = true
    facing = "R"
    x
    y
    playerAnimations = {}
    game
    score

    constructor(score) {
        super({
            collisionType: ex.CollisionType.Active,
            collider: ex.Shape.Box(250, 350, ex.Vector.Half, ex.vec(0, 0)),
            displayMode: ex.DisplayMode.FitScreen,
        });
        this.graphics.use(Resources.Dino.toSprite());
        this.health = 3;
        this.scale = new ex.Vector(0.25, 0.25)
        this.speed = 300;
        this.pos = new ex.Vector(50, 500);
        this.pointer.useGraphicsBounds = true;
        this.enableCapturePointer = true;
        this.body.gravity = true;
        this.score = score

    }

    onInitialize(engine) {
        this.game = engine
        engine.input.keyboard.enabled = true;

        const keys = ex.Input.Keys;

        engine.input.keyboard.on("hold", (evt) => {
            if (evt.key === keys.A || evt.key === keys.Left) {
                this.vel.x = -this.speed;
            } else if (evt.key === keys.D || evt.key === keys.Right) {
                this.vel.x = this.speed;
            } else if (evt.key === keys.S || evt.key === keys.Down) {
                // Handle S key press
            }
        });

        engine.input.keyboard.on("release", (evt) => {
            if (evt.key === keys.A || evt.key === keys.D || evt.key === keys.Left || evt.key === keys.Right) {
                this.vel.x = 0;
            } else if (evt.key === keys.S || evt.key === keys.Down) {
                // Handle S key release
            }
        });

        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.W || evt.key === keys.Up) {
                if (this.onGround == true) {
                    this.vel.y = -250
                    this.onGround = false
                    this.jumped = true
                }
            }
        })
        this.on('collisionstart', (evt) => this.onCollisionStart(evt))

    }


    update(engine) {
        if (this.vel.x > 0) {
            this.vel.x -= 10;
        } else if (this.vel.x < 0) {
            this.vel.x += 10;
        }

        if (this.vel.y === 0) {
            this.onGround = true;
            this.jumped = false;
        } else {
            this.onGround = false;
        }
        engine.currentScene.camera.x = this.pos.x + 80
    }



    onCollisionStart(evt) {
        if (evt.other instanceof Portal) {
            this.game.goToScene('Startscreen')
        }
        if (evt.other instanceof Enemy) {
            this.game.goToScene('Gameoverscreen')
            // this.score.incrementScore()
        }
    }
}