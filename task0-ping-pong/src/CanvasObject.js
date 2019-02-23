const getDefaults = () => ({
	position: {
		x: 0,
		y: 0
	},
	color: "white"
});

export class CanvasObject {
	constructor(params) {
    const { position, color, } = { ...getDefaults(), ...params}
		this.position = position;
		this.color = color;
	}

	draw() {}
}
