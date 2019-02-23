import { colorRect } from "./utils";
import { CanvasObject } from "./CanvasObject";

const getPaddleDefaults = () => ({
	size: {
		width: 10,
		height: 70
	}
});

export class Paddle extends CanvasObject {
	constructor(params) {
		const { size, ...paramsCanvasObject } = { ...getPaddleDefaults(), ...params }
		super(paramsCanvasObject);
		this.size = size;
	}
	draw(context) {
		colorRect(
			context,
			this.position.x,
			this.position.y,
			this.size.width,
			this.size.height,
			this.color
		);
	}
}
