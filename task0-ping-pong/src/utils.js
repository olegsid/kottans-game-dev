export { colorRect, colorCircle, drawEndGameScreen };

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

function drawEndGameScreen(ctx, winner,) {
  ctx.font = "20px Georgia";
  ctx.fillStyle = "white";
  ctx.fillText("Click to Continue", 200, 200);
  ctx.fillText(`Congratulations, player ${winner} win!`, 200, 400);
}