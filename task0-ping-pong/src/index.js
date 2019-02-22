const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 10;

let paddle1Y = 250;
let paddle2Y = 250;

const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;

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
		paddle1Y = mousePos.y - PADDLE_HEIGHT / 2;
	});
}

function computerMovement() {
	let paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;
	let paddle2deltaY =
		Math.abs(ballSpeedY) > 6 ? 6 : Math.abs(ballSpeedY * 0.99);
	if (paddle2YCenter < ballY - 35) {
		paddle2Y = paddle2Y + paddle2deltaY;
	} else if (paddle2YCenter > ballY - 35) {
		paddle2Y = paddle2Y - paddle2deltaY;
	}
}

function moveEverything() {
	if (showWinScreen) {
		return;
	}
	computerMovement();
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;

	if (ballX < 0) {
		if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
			ballSpeedX = -ballSpeedX;

			const deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35;
		} else {
			ballReset();
			player2Score++;
		}
	}
	if (ballX > canvas.width) {
		if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
			ballSpeedX = -ballSpeedX;

			const deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35;
		} else {
			ballReset();
			player1Score++;
		}
	}
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
	if (ballY > canvas.height) {
		ballSpeedY = -ballSpeedY;
	}
}

function drawEverything(canvas, canvasContext) {
	if (showWinScreen) {
		canvasContext.font = "20px Georgia";
		canvasContext.fillStyle = "white";
		canvasContext.fillText("Click to Continue", 200, 200);
		let winner = player1Score > player2Score ? "1" : "2";
		canvasContext.fillText(`Congtatulations, player ${winner} win!`, 200, 400);

		canvas.addEventListener("click", handleMouseClick);
		return;
	}
	colorRect(canvasContext, 0, 0, canvas.width, canvas.height, "black");

	colorRect(canvasContext, 0, paddle1Y, PADDLE_THICKNESS, 100, "white");
	colorRect(
		canvasContext,
		canvas.width - PADDLE_THICKNESS,
		paddle2Y,
		PADDLE_THICKNESS,
		100,
		"white"
	);
	canvasContext.fillText(player1Score, 100, 100);
	canvasContext.fillText(player2Score, canvas.width - 100, 100);

	colorCircle(canvasContext, ballX, ballY, 10, "white");
}

function colorRect(ctx, leftX, topY, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(leftX, topY, width, height);
}

function colorCircle(ctx, centerX, centerY, radius, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
	ctx.fill();
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
	ballX = canvas.width / 2;
	ballY = canvas.height / 2;
	ballSpeedX = -ballSpeedX;
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
