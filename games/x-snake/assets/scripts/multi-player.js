var GAME_SPEED = document.getElementById("speed").value; 
const CANVAS_BORDER_COLOUR = 'red';
const CANVAS_BACKGROUND_COLOUR = "grey";
var SNAKE_COLOUR = document.getElementById("snake").value;
var SNAKE2_COLOUR = document.getElementById("snake2").value;
const SNAKE_BORDER_COLOUR = 'black';
const FOOD_COLOUR = 'red';
const FOOD_BORDER_COLOUR = 'black';

let snake = [
	{x: 50, y: 150},
	{x: 40, y: 150},
	{x: 30, y: 150},
	{x: 20, y: 150},
	{x: 10, y: 150}
]

let snake2 = [
	{x: 50, y: 160},
	{x: 40, y: 160},
	{x: 30, y: 160},
	{x: 20, y: 160},
	{x: 10, y: 160}
]

let score = 0;
let score2 = 0;

let changingDirection = false;
let changingDirection2 = false;

let foodX;

let foodY;

let dx = 10;

let dy = 0;

const gameCanvas = document.getElementById("gameCanvas");

const ctx = gameCanvas.getContext("2d");

main();

createFood();
createFood2();

document.addEventListener("keydown", changeDirection);
document.addEventListener("keydown", changeDirection2);

function main() {
	if (didGameEnd()) return;
	setTimeout(function onTick() {
		changingDirection = false;
		changingDirection2 = false;
		clearCanvas();
		drawFood();
		drawFood2();
		advanceSnake();
		advanceSnake2();
		drawSnake();
		drawSnake2();
		main();
	}, GAME_SPEED)
}

function clearCanvas() {
	ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
	ctx.strokestyle = CANVAS_BORDER_COLOUR;
	ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
	ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawFood() {
	ctx.fillStyle = FOOD_COLOUR;
	ctx.strokestyle = FOOD_BORDER_COLOUR;
	ctx.fillRect(foodX, foodY, 10, 10);
	ctx.strokeRect(foodX, foodY, 10, 10);
}

function drawFood2() {
	ctx.fillStyle = FOOD_COLOUR;
	ctx.strokestyle = FOOD_BORDER_COLOUR;
	ctx.fillRect(foodX, foodY, 10, 10);
	ctx.strokeRect(foodX, foodY, 10, 10);
}

function advanceSnake() {
	const head = {x: snake[0].x + dx, y: snake[0].y + dy};
	snake.unshift(head);
	const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
	if (didEatFood) {
		score += 10;
		document.getElementById('score').innerHTML = score;
		createFood();
	} else {
		snake.pop();
	}
}

function advanceSnake2() {
	const head = {x: snake2[0].x + dx, y: snake2[0].y + dy};
	snake2.unshift(head);
	const didEatFood2 = snake2[0].x === foodX && snake2[0].y === foodY;
	if (didEatFood2) {
		score2 += 10;
		document.getElementById('score2').innerHTML = score2;
		createFood2();
	} else {
		snake2.pop();
	}
}

function didGameEnd() {
	for (let i = 4; i < snake.length; i++) {
		if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
	}
	const hitLeftWall = snake[0].x < 0;
	const hitRightWall = snake[0].x > gameCanvas.width - 10;
	const hitToptWall = snake[0].y < 0;
	const hitBottomWall = snake[0].y > gameCanvas.height - 10;
	return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

function didGameEnd2() {
	for (let i = 4; i < snake2.length; i++) {
		if (snake2[i].x === snake2[0].x && snake2[i].y === snake2[0].y) return true
	}
	const hitLeftWall2 = snake2[0].x < 0;
	const hitRightWall2 = snake2[0].x > gameCanvas.width - 10;
	const hitToptWall2 = snake2[0].y < 0;
	const hitBottomWall2 = snake2[0].y > gameCanvas.height - 10;
	return hitLeftWall2 || hitRightWall2 || hitToptWall2 || hitBottomWall2
}

function randomTen(min, max) {
	return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function createFood() {
	foodX = randomTen(0, gameCanvas.width - 10);
	foodY = randomTen(0, gameCanvas.height - 10);
	snake.forEach(function isFoodOnSnake(part) {
		const foodIsoNsnake = part.x == foodX && part.y == foodY;
		if (foodIsoNsnake) createFood();
	});
}

function createFood2() {
	foodX = randomTen(0, gameCanvas.width - 10);
	foodY = randomTen(0, gameCanvas.height - 10);
	snake2.forEach(function isFoodOnSnake2(part2) {
		const foodIsoNsnake2 = part2.x == foodX && part2.y == foodY;
		if (foodIsoNsnake2) createFood2();
	});
}

function drawSnake() {
	snake.forEach(drawSnakePart)
}

function drawSnake2() {
	snake2.forEach(drawSnakePart2)
}

function drawSnakePart(snakePart) {
	ctx.fillStyle = SNAKE_COLOUR;
	ctx.strokestyle = SNAKE_BORDER_COLOUR;
	ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
	ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnakePart2(snakePart2) {
	ctx.fillStyle = SNAKE2_COLOUR;
	ctx.strokestyle = SNAKE_BORDER_COLOUR;
	ctx.fillRect(snakePart2.x, snakePart2.y, 10, 10);
	ctx.strokeRect(snakePart2.x, snakePart2.y, 10, 10);
}

function changeDirection(event) {
	const LEFT_KEY = 37;
	const RIGHT_KEY = 39;
	const UP_KEY = 38;
	const DOWN_KEY = 40;
	
function changeDirection2(event) {
	const A_KEY = 65;
	const D_KEY = 68;
	const W_KEY = 87;
	const S_KEY = 83;
	if (changingDirection) return;
	changingDirection = true;
	const keyPressed = event.keyCode;
	const goingUp = dy === -10;
	const goingDown = dy === 10;
	const goingRight = dx === 10;
	const goingLeft = dx === -10;
	if (keyPressed === LEFT_KEY && !goingRight) {
		dx = -10;
		dy = 0;
	}
	if (keyPressed === UP_KEY && !goingDown) {
		dx = 0;
		dy = -10;
	}
	if (keyPressed === RIGHT_KEY && !goingLeft) {
		dx = 10;
		dy = 0;
    }
	if (keyPressed === DOWN_KEY && !goingUp) {
		dx = 0;
		dy = 10;
	}
}

if (changingDirection2) return;
	changingDirection2 = true;
	const keyPressed2 = event.keyCode;
	const goingUp2 = dy === -10;
	const goingDown2 = dy === 10;
	const goingRight2 = dx === 10;
	const goingLeft2 = dx === -10;
	if (keyPressed2 === A_KEY && !goingRight2) {
		dx = -10;
		dy = 0;
	}
	if (keyPressed2 === W_KEY && !goingDown2) {
		dx = 0;
		dy = -10;
	}
	if (keyPressed2 === D_KEY && !goingLeft2) {
		dx = 10;
		dy = 0;
    }
	if (keyPressed2 === S_KEY && !goingUp2) {
		dx = 0;
		dy = 10;
	}
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
	++totalSeconds;
	secondsLabel.innerHTML = pad(totalSeconds % 60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
	var valString = val + "";
	if (valString.length < 2) {
		return "0" + valString;
	} else {
		return valString;
	}
}