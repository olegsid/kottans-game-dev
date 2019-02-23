import { Ball } from "./Ball";
import { Player } from "./Player";
import { colorRect, drawEndGameScreen } from "./utils";

const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");

const ball = new Ball();
const player1 = new Player();
const player2 = new Player({ position: { x: canvas.width-10, y:0 } });

let player1Score = 0;
let player2Score = 0;
const WINNING_SCORE = 2;

let showWinScreen = false;

function main() {
	const framePerSecond = 30;
	setInterval(function() {
		moveEverything();
		drawEverything(canvas, canvasContext);
	}, 1000 / framePerSecond);

	canvas.addEventListener("mousemove", function(event) {
		let mousePos = calculateMousePos(event);
		player1.paddle.position.y = mousePos.y - player1.paddle.size.height / 2;
	});
}

function computerMovement() {
	let posY = player2.paddle.position.y + player2.paddle.size.height / 2;
	let deltaY = Math.abs(ball.speed.y) > 8 ? 8 : Math.abs(ball.speed.y);

	if (posY < ball.position.y ) {
		player2.paddle.position.y = player2.paddle.position.y + deltaY;
	} else if (posY > ball.position.y ) {
		player2.paddle.position.y = player2.paddle.position.y - deltaY;
	}
}

function moveEverything() {
	if (showWinScreen) {
		return;
	}
	computerMovement();
	ball.move();

	if (ball.position.x < 0) {
		if (
			ball.position.y > player1.paddle.position.y &&
			ball.position.y < player1.paddle.position.y + player1.paddle.size.height
		) {
			ball.speed.x = -ball.speed.x;

			const deltaY =
				ball.position.y -
				(player1.paddle.position.y + player1.paddle.size.height / 2);
			ball.speed.y = deltaY * 0.35;
		} else {
			ballReset();
			player2Score++;
		}
	}
	if (ball.position.x > canvas.width) {
		if (
			ball.position.y > player2.paddle.position.y &&
			ball.position.y < player2.paddle.position.y + player2.paddle.size.height
		) {
			ball.speed.x = -ball.speed.x;

			const deltaY =
				ball.position.y -
				(player2.paddle.position.y + player2.paddle.size.height / 2);
			ball.speed.y = deltaY * 0.35;
		} else {
			ballReset();
			player1Score++;
		}
	}
	if (ball.position.y < 0) {
		ball.speed.y = -ball.speed.y;
	}
	if (ball.position.y > canvas.height) {
		ball.speed.y = -ball.speed.y;
	}
}

function drawEverything(canvas, canvasContext) {
	if (showWinScreen) {
		let winner = player1Score > player2Score ? "1" : "2";
		drawEndGameScreen(canvasContext, winner);
		canvas.addEventListener("click", handleMouseClick);
		return;
	}

	colorRect(canvasContext, 0, 0, canvas.width, canvas.height, "black");

	player1.paddle.draw(canvasContext);
	player2.paddle.draw(canvasContext);

	canvasContext.fillText(player1Score, 100, 100);
	canvasContext.fillText(player2Score, canvas.width - 100, 100);

	ball.draw(canvasContext);
}

function calculateMousePos({ clientX, clientY }) {
	const rect = canvas.getBoundingClientRect();
	const root = document.documentElement;

	const mouseX = clientX - rect.left - root.scrollLeft;
	const mouseY = clientY - rect.top - root.scrollTop;
	return { x: mouseX, y: mouseY };
}

function ballReset() {
	if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
		player1Score = 0;
		player2Score = 0;
		showWinScreen = true;
	}
	ball.setPosition({
		x: canvas.width / 2,
		y: canvas.height / 2
	});

	ball.speed.x = -ball.speed.x;
}

function handleMouseClick(evt) {
	if (showWinScreen) {
		player1Score = 0;
		player2Score = 0;
		showWinScreen = false;
	}
	canvas.removeEventListener("click", handleMouseClick);
}
document.addEventListener("DOMContentLoaded", main);
