import { CanvasObject } from "./CanvasObject";
import { colorRect, colorCircle } from "./utils";

const getBallDefaults = () => ({
	speed: {
		x: 10,
		y: 10
	},
	radius: 10
});

export class Ball extends CanvasObject {
	constructor(params) {
    const { speed, radius, ...canvasObjectParams } = { ...getBallDefaults(), ...params }
    super(canvasObjectParams);
		this.speed = speed;
		this.radius = radius;
	}

	setPosition(newPosition) {
		Object.assign(this.position, newPosition);
	}

	setSpeed(newSpeed) {
		Object.assign(this.speed, newSpeed);
	}

	move() {
		const x = this.position.x + this.speed.x;
		const y = this.position.y + this.speed.y;
		this.setPosition({ x, y });
	}

	draw(context) {
		colorCircle(
			context,
			this.position.x,
			this.position.y,
			this.radius,
			this.color
		);
	}
}
