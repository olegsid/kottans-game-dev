/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasObject */ "./src/CanvasObject.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



const getBallDefaults = () => ({
  speed: {
    x: 10,
    y: 10
  },
  radius: 10
});

class Ball extends _CanvasObject__WEBPACK_IMPORTED_MODULE_0__["CanvasObject"] {
  constructor(params) {
    const {
      speed,
      radius,
      ...canvasObjectParams
    } = { ...getBallDefaults(),
      ...params
    };
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
    this.setPosition({
      x,
      y
    });
  }

  draw(context) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["colorCircle"])(context, this.position.x, this.position.y, this.radius, this.color);
  }

}

/***/ }),

/***/ "./src/CanvasObject.js":
/*!*****************************!*\
  !*** ./src/CanvasObject.js ***!
  \*****************************/
/*! exports provided: CanvasObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasObject", function() { return CanvasObject; });
const getDefaults = () => ({
  position: {
    x: 0,
    y: 0
  },
  color: "white"
});

class CanvasObject {
  constructor(params) {
    const {
      position,
      color
    } = { ...getDefaults(),
      ...params
    };
    this.position = position;
    this.color = color;
  }

  draw() {}

}

/***/ }),

/***/ "./src/Paddle.js":
/*!***********************!*\
  !*** ./src/Paddle.js ***!
  \***********************/
/*! exports provided: Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paddle", function() { return Paddle; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasObject */ "./src/CanvasObject.js");



const getPaddleDefaults = () => ({
  size: {
    width: 10,
    height: 70
  }
});

class Paddle extends _CanvasObject__WEBPACK_IMPORTED_MODULE_1__["CanvasObject"] {
  constructor(params) {
    const {
      size,
      ...paramsCanvasObject
    } = { ...getPaddleDefaults(),
      ...params
    };
    super(paramsCanvasObject);
    this.size = size;
  }

  draw(context) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["colorRect"])(context, this.position.x, this.position.y, this.size.width, this.size.height, this.color);
  }

}

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasObject */ "./src/CanvasObject.js");
/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddle */ "./src/Paddle.js");


class Player {
  constructor(params) {
    this.score = 0;
    this.paddle = new _Paddle__WEBPACK_IMPORTED_MODULE_1__["Paddle"](params);
  }

  resetScore() {
    this.score = 0;
  }

  increaseScore() {
    this.score += 1;
  }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ "./src/Ball.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
const ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__["Ball"]();
const player1 = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
const player2 = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"]({
  position: {
    x: canvas.width - 10,
    y: 0
  }
});
let player1Score = 0;
let player2Score = 0;
const WINNING_SCORE = 2;
let showWinScreen = false;

function main() {
  const framePerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything(canvas, canvasContext);
  }, 1000 / framePerSecond);
  canvas.addEventListener("mousemove", function (event) {
    let mousePos = calculateMousePos(event);
    player1.paddle.position.y = mousePos.y - player1.paddle.size.height / 2;
  });
}

function computerMovement() {
  let posY = player2.paddle.position.y + player2.paddle.size.height / 2;
  let deltaY = Math.abs(ball.speed.y) > 8 ? 8 : Math.abs(ball.speed.y);

  if (posY < ball.position.y) {
    player2.paddle.position.y = player2.paddle.position.y + deltaY;
  } else if (posY > ball.position.y) {
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
    if (ball.position.y > player1.paddle.position.y && ball.position.y < player1.paddle.position.y + player1.paddle.size.height) {
      ball.speed.x = -ball.speed.x;
      const deltaY = ball.position.y - (player1.paddle.position.y + player1.paddle.size.height / 2);
      ball.speed.y = deltaY * 0.35;
    } else {
      ballReset();
      player2Score++;
    }
  }

  if (ball.position.x > canvas.width) {
    if (ball.position.y > player2.paddle.position.y && ball.position.y < player2.paddle.position.y + player2.paddle.size.height) {
      ball.speed.x = -ball.speed.x;
      const deltaY = ball.position.y - (player2.paddle.position.y + player2.paddle.size.height / 2);
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
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["drawEndGameScreen"])(canvasContext, winner);
    canvas.addEventListener("click", handleMouseClick);
    return;
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["colorRect"])(canvasContext, 0, 0, canvas.width, canvas.height, "black");
  player1.paddle.draw(canvasContext);
  player2.paddle.draw(canvasContext);
  canvasContext.fillText(player1Score, 100, 100);
  canvasContext.fillText(player2Score, canvas.width - 100, 100);
  ball.draw(canvasContext);
}

function calculateMousePos({
  clientX,
  clientY
}) {
  const rect = canvas.getBoundingClientRect();
  const root = document.documentElement;
  const mouseX = clientX - rect.left - root.scrollLeft;
  const mouseY = clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
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

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: colorRect, colorCircle, drawEndGameScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRect", function() { return colorRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorCircle", function() { return colorCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawEndGameScreen", function() { return drawEndGameScreen; });


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

function drawEndGameScreen(ctx, winner) {
  ctx.font = "20px Georgia";
  ctx.fillStyle = "white";
  ctx.fillText("Click to Continue", 200, 200);
  ctx.fillText(`Congratulations, player ${winner} win!`, 200, 400);
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map