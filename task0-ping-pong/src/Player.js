import { CanvasObject } from "./CanvasObject";
import { Paddle } from "./Paddle";

export class Player {
	constructor(params) {
		this.score = 0;
		this.paddle = new Paddle(params);
	}

	resetScore() {
		this.score = 0;
	}

	increaseScore() {
		this.score += 1;
	}
}
