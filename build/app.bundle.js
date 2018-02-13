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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a View.
 */
var View = function () {

  /**
   * @param {!Element} parentElement
   */
  function View(parentElement) {
    _classCallCheck(this, View);

    /**
     * @type {!Element}
     * @private
     */
    this._parentElement = parentElement;

    /**
     * @type {!Element}
     * @private
     */
    this._viewElem = document.createElement('div');

    this.addClassName('view-container');
  }

  /**
   * @public
   */


  _createClass(View, [{
    key: 'render',
    value: function render() {
      this._parentElement.appendChild(this._viewElem);
    }

    /**
     * @public
     */

  }, {
    key: 'remove',
    value: function remove() {
      this._parentElement.removeChild(this._viewElem);
    }

    /**
     * @param {!string} className
     * @public
     */

  }, {
    key: 'addClassName',
    value: function addClassName(className) {
      this._viewElem.classList.add(className);
    }

    /**
     * @param {!string} className
     * @public
     */

  }, {
    key: 'removeClassName',
    value: function removeClassName(className) {
      this._viewElem.classList.remove(className);
    }

    /**
     * @param {!Element} element
     * @protected
     */

  }, {
    key: 'appendChild',
    value: function appendChild(element) {
      this._viewElem.appendChild(element);
    }
  }]);

  return View;
}();

exports.default = View;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pointtype = __webpack_require__(3);

var PointType = _interopRequireWildcard(_pointtype);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Labyrinth = function () {
	function Labyrinth() {
		_classCallCheck(this, Labyrinth);

		/**
   * @type {!number}
   * @private
   */
		this._width = 0;

		/**
   * @type {!number}
   * @private
   */
		this._height = 0;

		/**
   * @type {!Array<!string>}
   * @private
   */
		this._legend = [PointType.FREESPACE, PointType.WALL];

		var x = 0;
		var y = 0;

		/**
   * @type {{ x:!number, y:!number }}
   * @private
   */
		this._startPoint = { x: x, y: y };

		/**
   * @type {{ x:!number, y:!number }}
   * @private
   */
		this._endPoint = { x: x, y: y };

		/**
   * This is data representing labyrinth.
   * It contains 2d matrix.
   *
   * @type {!Array<!Array<!number>>}
   * @private
   */
		this._data = [];
	}

	/**
  * @return {!number}
  * @public
  */


	_createClass(Labyrinth, [{
		key: 'getPointType',


		/**
   * @param {{ x:!number, y:!number }} point
   * @return {!string}
   * @public
   */
		value: function getPointType(point) {
			return this._legend[this._data[point.y][point.x]];
		}

		/**
   * @return {!boolean}
   * @public
   */

	}, {
		key: 'isFreeSpace',
		value: function isFreeSpace(point) {
			/**
    * @type {!boolean}
    */
			var retValue = false;

			if (point.x >= 0 && point.y >= 0 && point.x < this._width && point.y < this._height) {
				/**
     * @type {!string}
     */
				var pointType = this.getPointType(point);

				if (pointType === PointType.FREESPACE) {
					retValue = true;
				}
			}

			return retValue;
		}

		/**
   * @return {!boolean}
   * @public
   */

	}, {
		key: 'isWall',
		value: function isWall(point) {
			/**
    * @type {!boolean}
    */
			var retValue = false;

			if (point.x >= 0 && point.y >= 0 && point.x < this._width && point.y < this._height) {
				/**
     * @type {!string}
     */
				var pointType = this.getPointType(point);

				if (pointType === PointType.WALL) {
					retValue = true;
				}
			}

			return retValue;
		}

		/**
   * The method generates labyrinth.
   * It is heart of the model.
   * 
   * NOTE! Call this method after the object has been instantiated.
   *
   * @param {{ width:!number, height:!number }} size
   * @public
   */

	}, {
		key: 'generate',
		value: function generate(size) {
			var MIN_WIDTH = 5;
			var MIN_HEIGHT = 5;
			var MAX_WIDTH = 25;
			var MAX_HEIGHT = 25;

			if (size.width < MIN_WIDTH || size.width > MAX_WIDTH || size.height < MIN_HEIGHT || size.height > MAX_HEIGHT) {
				console.error('Cannot generate labyrinth due to incorrect dimensions');
			} else {
				var WALL = 1;

				var x = void 0;
				var y = void 0;

				//
				// Init width and height
				//
				this._width = size.width;
				this._height = size.height;

				//
				// Init width and height
				//
				for (y = 0; y < this._height; y++) {
					this._data[y] = [];
					for (x = 0; x < this._width; x++) {
						this._data[y][x] = WALL;
					}
				}

				this._startPoint = this._generateStartPoint();

				x = this._startPoint.x;
				y = this._startPoint.y - 1;

				this._generateLabyrinthAtPoint({ x: x, y: y });

				this._endPoint = this._generateEndPoint();
			}
		}

		/**
   * @return {{ x:!number, y:!number }}
   * @private
   */

	}, {
		key: '_generateStartPoint',
		value: function _generateStartPoint() {
			var FREESPACE = 0;

			var x = 0;
			var y = this._height - 1;

			while (x <= 0 || x >= this._width - 1) {
				x = Math.floor(Math.random() * this._width);
			}

			this._data[y][x] = FREESPACE;

			return { x: x, y: y };
		}

		/**
   * This is recursive function. The essencial of algorythm.
   *
   * @param {{ x:!number, y:!number }} point
   * @private
   */

	}, {
		key: '_generateLabyrinthAtPoint',
		value: function _generateLabyrinthAtPoint(point) {
			/**
    * @const {!number}
          */
			var FREESPACE = 0;

			this._data[point.y][point.x] = FREESPACE;

			var x = void 0;
			var y = void 0;
			var left = void 0;
			var right = void 0;
			var up = void 0;
			var down = void 0;
			var directions = void 0;

			x = point.x - 1;
			y = point.y;
			left = { x: x, y: y };

			x = point.x + 1;
			y = point.y;
			right = { x: x, y: y };

			x = point.x;
			y = point.y - 1;
			up = { x: x, y: y };

			x = point.x;
			y = point.y + 1;
			down = { x: x, y: y };

			do {
				directions = [];

				if (this._isPossibleToGenerateLabyrinthAtPoint(left, point)) {
					directions.push(left);
				}
				if (this._isPossibleToGenerateLabyrinthAtPoint(right, point)) {
					directions.push(right);
				}
				if (this._isPossibleToGenerateLabyrinthAtPoint(up, point)) {
					directions.push(up);
				}
				if (this._isPossibleToGenerateLabyrinthAtPoint(down, point)) {
					directions.push(down);
				}

				if (directions.length) {

					var direction = Math.floor(Math.random() * directions.length);
					this._generateLabyrinthAtPoint(directions[direction]);
				}
			} while (directions.length);
		}

		/**
   * This is recursive function. The essencial of algorythm.
   *
   * @param {{ x:!number, y:!number }} point
      * @param {{ x:!number, y:!number }} exclude
   * @private
   */

	}, {
		key: '_isPossibleToGenerateLabyrinthAtPoint',
		value: function _isPossibleToGenerateLabyrinthAtPoint(point, exclude) {
			/**
    * @type {!boolean}
    */
			var retValue = true;

			if (this.isWall(point)) {
				var x = void 0;
				var y = void 0;

				var left = void 0;
				var right = void 0;
				var up = void 0;
				var down = void 0;

				x = point.x - 1;
				y = point.y;
				left = { x: x, y: y };

				x = point.x + 1;
				y = point.y;
				right = { x: x, y: y };

				x = point.x;
				y = point.y - 1;
				up = { x: x, y: y };

				x = point.x;
				y = point.y + 1;
				down = { x: x, y: y };

				if (JSON.stringify(left) !== JSON.stringify(exclude)) {
					retValue = this.isWall(left);
				}

				if (retValue === true && JSON.stringify(right) !== JSON.stringify(exclude)) {
					retValue = this.isWall(right);
				}

				if (retValue === true && JSON.stringify(up) !== JSON.stringify(exclude)) {
					retValue = this.isWall(up);
				}

				if (retValue === true && JSON.stringify(down) !== JSON.stringify(exclude)) {
					retValue = this.isWall(down);
				}
			} else {
				retValue = false;
			}

			return retValue;
		}

		/**
   * @return {{ x:!number, y:!number }}
   * @private
   */

	}, {
		key: '_generateEndPoint',
		value: function _generateEndPoint() {
			var FREESPACE = 0;

			var x = void 0;
			var y = 1;

			do {
				x = Math.floor(Math.random() * this._width);
			} while (x <= 0 || x >= this._width - 1 || !this.isFreeSpace({ x: x, y: y }));

			y = 0;

			this._data[y][x] = FREESPACE;

			return { x: x, y: y };
		}
	}, {
		key: 'height',
		get: function get() {
			return this._height;
		}

		/**
   * @return {!number}
   * @public
   */

	}, {
		key: 'width',
		get: function get() {
			return this._width;
		}

		/**
   * @return {{ x:!number, y:!number }}
   * @public
   */

	}, {
		key: 'startPoint',
		get: function get() {
			return this._startPoint;
		}

		/**
   * @return {{ x:!number, y:!number }}
   * @public
   */

	}, {
		key: 'endPoint',
		get: function get() {
			return this._endPoint;
		}
	}]);

	return Labyrinth;
}();

exports.default = Labyrinth;
;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing Player model.
 *
 * Player possibilities: 
 *  - move UP / DOWN / LEFT / RIGHT keys.
 */
var Player = function () {
	function Player() {
		_classCallCheck(this, Player);

		this.x = 0;
		this.y = 0;
	}

	/**
  * @param {{ x: !number, y: !number }} position
  * @public
  */


	_createClass(Player, [{
		key: "position",
		set: function set(position) {
			this.x = position.x;
			this.y = position.y;
		}

		/**
   * @return {{ x: !number, y: !number }}
   * @public
   */
		,
		get: function get() {
			var x = this.x;
			var y = this.y;
			return { x: x, y: y };
		}
	}]);

	return Player;
}();

exports.default = Player;
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FREESPACE = exports.FREESPACE = "free-space";
var WALL = exports.WALL = "wall";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameconfig = __webpack_require__(6);

var GameConfig = _interopRequireWildcard(_gameconfig);

var _direction = __webpack_require__(7);

var Direction = _interopRequireWildcard(_direction);

var _gamestate = __webpack_require__(8);

var GameState = _interopRequireWildcard(_gamestate);

var _labyrinthview = __webpack_require__(10);

var _labyrinthview2 = _interopRequireDefault(_labyrinthview);

var _labyrinth = __webpack_require__(1);

var _labyrinth2 = _interopRequireDefault(_labyrinth);

var _player = __webpack_require__(2);

var _player2 = _interopRequireDefault(_player);

var _startview = __webpack_require__(12);

var _startview2 = _interopRequireDefault(_startview);

var _finalview = __webpack_require__(9);

var _finalview2 = _interopRequireDefault(_finalview);

var _levelcompleteview = __webpack_require__(11);

var _levelcompleteview2 = _interopRequireDefault(_levelcompleteview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing game controller.
 */
var Game = function () {

  /**
      * @param {!Element} parentElement
      */
  function Game(parentElement) {
    _classCallCheck(this, Game);

    /**
     * @type {!Element}
     * @private
     */
    this._parentElement = parentElement;

    /**
     * @const {!number}
     */
    var MIN_BASE_SIZE = 160;

    /**
     * @type {!number}
     */
    var baseSize = Math.min(Math.floor(window.innerHeight / 3), Math.floor(window.innerWidth / 2));

    baseSize = Math.max(baseSize, MIN_BASE_SIZE);

    /**
     * @type {!number}
     * @private
     */
    this._fieldHeight = baseSize * 3;

    /**
     * @type {!number}
     * @private
     */
    this._fieldWidth = baseSize * 2;

    /**
     * @type {!Element}
     * @private
     */
    this._gameElem = document.createElement('div');
    this._gameElem.classList.add('game-container');
    this._gameElem.classList.add('game-container-background');
    this._gameElem.style.width = this._fieldWidth + 'px';
    this._gameElem.style.height = this._fieldHeight + 'px';

    /**
     * @type {!number}
     * @private
     */
    this._gameState = GameState.NOT_STARTED;

    /**
     * Game starts at level 1
     *
    	 * @type {!number}
     * @private
     */
    this._level = 1;

    /**
     * Initial labyrints size is 5 x 5
     *
     * @type {!number}
     * @private
     */
    this._labyrinthSize = 5;

    // 
    // Models:
    //  - player;
    //  - labyrinth.
    //

    /**
     * @type {!Player}
     * @private
     */
    this._player = new _player2.default();

    /**
     * @type {!Labyrinth}
     * @private
     */
    this._labyrinth = new _labyrinth2.default();

    // 
    // Views:
    //  - start screen;
    //  - labyrinth view;
    //  - level complete screen;
    //  - final screen.
    //

    /**
     * @type {!StartView}
     * @private
     */
    this._startScreen = new _startview2.default(this._gameElem);
    this._startScreen.onStartButtonClick = this.onStartButtonClickCallback.bind(this);

    /**
     * @type {!LabyrinthView}
     * @private
     */
    this._labyrinthView = new _labyrinthview2.default(this._gameElem, this._fieldWidth, this._fieldHeight);
    this._labyrinthView.onKeyPressed = this.onKeyPressedCallback.bind(this);

    /**
     * @type {!LevelCompleteView}
     * @private
     */
    this._levelCompleteView = new _levelcompleteview2.default(this._gameElem);

    /**
     * @type {!FinalView}
     * @private
     */
    this._finalScreen = new _finalview2.default(this._gameElem);
    this._finalScreen.onPlayAgainButtonClick = this.onPlayAgainButtonClickCallback.bind(this);

    document.onkeydown = this.onKeyboardCallback.bind(this);
  }

  /**
   * Game is rendered only once at the beginning.
   * @public
   */


  _createClass(Game, [{
    key: 'render',
    value: function render() {
      this._parentElement.appendChild(this._gameElem);

      /**
       * @type {!number}
       * @private
       */
      this._gameState = GameState.START_SCREEN;
      this._startScreen.render();
    }

    /**
     * The callback is fired if user tap start button,
     * or press OK or SPACE on keyboard.
     *
     * @public
     */

  }, {
    key: 'onStartButtonClickCallback',
    value: function onStartButtonClickCallback() {
      if (this._gameState === GameState.START_SCREEN) {

        this._gameState = GameState.REMOVING_START_SCREEN;

        /**
         * @type {!number}
         * @private
         */
        var DELAY = 1000;

        this._startScreen.showPressButtonEffect();
        this._addNewLabyrintToBack();
        this._removeStartScreenAnimated(DELAY);
        this._startGameplayAfterDelay(DELAY);
      }
    }

    /**
     * Create new labyrinth and render it to the game field.
     * @private
     */

  }, {
    key: '_addNewLabyrintToBack',
    value: function _addNewLabyrintToBack() {

      this._labyrinthView.render();

      /**
       * @type {!number}
       */
      var width = this._labyrinthSize;

      /**
       * @type {!number}
       */
      var height = this._labyrinthSize;

      this._labyrinth.generate({ width: width, height: height });
      this._labyrinthView.renderLabyrinth(this._labyrinth);

      this._player.position = this._labyrinth.startPoint;
      this._labyrinthView.renderPlayer(this._player);
    }

    /**
     * Remove start screen animated.
    *
    * @param {!number} delay
     * @private
     */

  }, {
    key: '_removeStartScreenAnimated',
    value: function _removeStartScreenAnimated(delay) {
      setTimeout(this.removeStartScreenCallback.bind(this), delay);
      this._startScreen.addClassName('view-container_hide-animated');
    }

    /**
     * @public
     */

  }, {
    key: 'removeStartScreenCallback',
    value: function removeStartScreenCallback() {
      this._startScreen.remove();
    }

    /**
     * Need to allow user to play only after animation has finished.
    * So set small timeout.
    *
    * @param {!number} delay
     * @private
     */

  }, {
    key: '_startGameplayAfterDelay',
    value: function _startGameplayAfterDelay(delay) {
      setTimeout(this.startGameplayCallback.bind(this), delay);
    }

    /**
     * @public
     */

  }, {
    key: 'startGameplayCallback',
    value: function startGameplayCallback() {
      if (this._gameState === GameState.REMOVING_START_SCREEN) {
        this._gameState = GameState.LEVEL_GAMEPLAY;
      } else if (this._gameState === GameState.REMOVING_LEVEL_COMPLETE_SCREEN) {
        this._gameState = GameState.LEVEL_GAMEPLAY;
      } else if (this._gameState === GameState.REMOVING_FINAL_SCREEN) {
        this._gameState = GameState.LEVEL_GAMEPLAY;
      }
    }

    /**
     * @public
     */

  }, {
    key: 'onKeyboardCallback',
    value: function onKeyboardCallback(evt) {
      var RIGHT_CODE = 39;
      var DOWN_CODE = 40;
      var LEFT_CODE = 37;
      var UP_CODE = 38;
      var ENTER_CODE = 13;
      var SPACE_CODE = 32;

      evt = evt || window.event;

      switch (evt.keyCode) {
        case RIGHT_CODE:
          if (this._gameState === GameState.LEVEL_GAMEPLAY) {
            this.onKeyPressedCallback('right');
          }
          break;
        case LEFT_CODE:
          if (this._gameState === GameState.LEVEL_GAMEPLAY) {
            this.onKeyPressedCallback('left');
          }
          break;
        case UP_CODE:
          if (this._gameState === GameState.LEVEL_GAMEPLAY) {
            this.onKeyPressedCallback('up');
          }
          break;
        case DOWN_CODE:
          if (this._gameState === GameState.LEVEL_GAMEPLAY) {
            this.onKeyPressedCallback('down');
          }
          break;
        case ENTER_CODE:
        case SPACE_CODE:
          if (this._gameState === GameState.START_SCREEN) {
            this.onStartButtonClickCallback();
          } else if (this._gameState === GameState.FINAL_LEVEL_COMPLETE) {
            this.onPlayAgainButtonClickCallback();
          }
          break;
        default:
          break;
      }
    }

    /**
     * @param {!string} direction
     * @public
     */

  }, {
    key: 'onKeyPressedCallback',
    value: function onKeyPressedCallback(direction) {
      if (this._gameState === GameState.LEVEL_GAMEPLAY) {

        this._labyrinthView.showPressButtonEffect(direction);

        if (this._isPossibleToMove(direction)) {
          this._doMove(direction);
        }
      }
    }

    /**
     * @param {!string} direction
     * @return {!boolean}
     * @private
     */

  }, {
    key: '_isPossibleToMove',
    value: function _isPossibleToMove(direction) {

      /**
       * @type {!number}
       */
      var x = this._player.position.x;

      /**
       * @type {!number}
       */
      var y = this._player.position.y;

      if (direction === Direction.UP) {
        y -= 1;
      } else if (direction === Direction.DOWN) {
        y += 1;
      } else if (direction === Direction.LEFT) {
        x -= 1;
      } else if (direction === Direction.RIGHT) {
        x += 1;
      }

      return this._labyrinth.isFreeSpace({ x: x, y: y });
    }

    /**
     * @param {!string} direction
     * @private
     */

  }, {
    key: '_doMove',
    value: function _doMove(direction) {
      if (this._gameState === GameState.LEVEL_GAMEPLAY) {

        this._gameState = GameState.PLAYER_IS_MOVING;

        /**
         * @type {!number}
         */
        var x = this._player.position.x;

        /**
         * @type {!number}
         */
        var y = this._player.position.y;

        if (direction === Direction.UP) {
          y -= 1;
        } else if (direction === Direction.DOWN) {
          y += 1;
        } else if (direction === Direction.LEFT) {
          x -= 1;
        } else if (direction === Direction.RIGHT) {
          x += 1;
        }

        this._player.position = { x: x, y: y };
        this._labyrinthView.renderPlayer(this._player);

        /**
         * @type {!number}
         */
        var DELAY = 100;

        setTimeout(this.moveFinishedCallback.bind(this), DELAY);
      }
    }

    /**
     * @public
     */

  }, {
    key: 'moveFinishedCallback',
    value: function moveFinishedCallback() {
      if (this._gameState === GameState.PLAYER_IS_MOVING) {

        if (JSON.stringify(this._player.position) === JSON.stringify(this._labyrinth.endPoint)) {

          if (this._level >= GameConfig.LEVELS_COUNT) {
            this._gameState = GameState.FINAL_LEVEL_COMPLETE;
            this._showFinalScreen();
          } else {
            /**
             * @const {!number}
             */
            var DELAY = 1000;

            this._gameState = GameState.LEVEL_COMPLETE;
            this._level += 1;

            this._showLevelCompleteViewAnimated(DELAY);
          }
        } else {

          // continue game play
          this._gameState = GameState.LEVEL_GAMEPLAY;
        }
      }
    }

    /**
     * @private
     */

  }, {
    key: '_showFinalScreen',
    value: function _showFinalScreen() {
      /**
       * @const {!number}
       */
      var PAUSE_DELAY = 1000;

      this._finalScreen.render();
      this._finalScreen.addClassName('view-container_show-animated');

      setTimeout(this.finalScreenIsShownCallback.bind(this), PAUSE_DELAY);
    }

    /**
     * @public
     */

  }, {
    key: 'finalScreenIsShownCallback',
    value: function finalScreenIsShownCallback() {
      this._finalScreen.removeClassName('view-container_show-animated');
    }

    /**
     * Show level complete screen animated.
     *
     * @param {!number} delay
     * @private
     */

  }, {
    key: '_showLevelCompleteViewAnimated',
    value: function _showLevelCompleteViewAnimated(delay) {

      this._levelCompleteView.render(this._level);
      this._levelCompleteView.addClassName('view-container_show-animated');

      setTimeout(this.levelCompleteIsShownCallback.bind(this), delay);
    }

    /**
     * @public
     */

  }, {
    key: 'levelCompleteIsShownCallback',
    value: function levelCompleteIsShownCallback() {
      this._levelCompleteView.removeClassName('view-container_show-animated');

      /**
       * @const {!number}
       */
      var PAUSE_DELAY = 2000;

      this._labyrinthSize += 1;

      /**
       * @type {!number}
       */
      var width = this._labyrinthSize;

      /**
       * @type {!number}
       */
      var height = this._labyrinthSize;

      this._labyrinth.generate({ width: width, height: height });
      this._labyrinthView.renderLabyrinth(this._labyrinth);

      this._player.position = this._labyrinth.startPoint;
      this._labyrinthView.renderPlayer(this._player);

      setTimeout(this.newLevelPreparedCallback.bind(this), PAUSE_DELAY);
    }

    /**
     * @public
     */

  }, {
    key: 'newLevelPreparedCallback',
    value: function newLevelPreparedCallback() {
      /**
       * @const {!number}
       */
      var DELAY = 1000;

      this._gameState = GameState.REMOVING_LEVEL_COMPLETE_SCREEN;

      this._removeLevelCompleteViewAnimated(DELAY);
      this._startGameplayAfterDelay(DELAY);
    }

    /**
     * Remove start screen animated.
     *
     * @param {!number} delay
     * @private
     */

  }, {
    key: '_removeLevelCompleteViewAnimated',
    value: function _removeLevelCompleteViewAnimated(delay) {
      setTimeout(this.removeLevelCompleteViewCallback.bind(this), delay);
      this._levelCompleteView.addClassName('view-container_hide-animated');
    }

    /**
     * @public
     */

  }, {
    key: 'removeLevelCompleteViewCallback',
    value: function removeLevelCompleteViewCallback() {
      this._levelCompleteView.removeClassName('view-container_hide-animated');
      this._levelCompleteView.remove();
    }

    /**
     * @public
     */

  }, {
    key: 'onPlayAgainButtonClickCallback',
    value: function onPlayAgainButtonClickCallback() {
      if (this._gameState === GameState.FINAL_LEVEL_COMPLETE) {

        this._gameState = GameState.REMOVING_FINAL_SCREEN;

        this._finalScreen.showPressButtonEffect();

        /**
         * @type {!number}
         * @private
         */
        var DELAY = 1000;

        this._level = 1;
        this._labyrinthSize = 5;

        /**
         * @type {!number}
         */
        var width = this._labyrinthSize;

        /**
         * @type {!number}
         */
        var height = this._labyrinthSize;

        this._labyrinth.generate({ width: width, height: height });
        this._labyrinthView.renderLabyrinth(this._labyrinth);

        this._player.position = this._labyrinth.startPoint;
        this._labyrinthView.renderPlayer(this._player);

        this._removeFinalScreenAnimated(DELAY);
        this._startGameplayAfterDelay(DELAY);
      }
    }

    /**
     * Remove start screen animated.
     *
     * @param {!number} delay
     * @private
     */

  }, {
    key: '_removeFinalScreenAnimated',
    value: function _removeFinalScreenAnimated(delay) {
      setTimeout(this.removeFinalScreenCallback.bind(this), delay);
      this._finalScreen.addClassName('view-container_hide-animated');
    }

    /**
     * @public
     */

  }, {
    key: 'removeFinalScreenCallback',
    value: function removeFinalScreenCallback() {
      this._finalScreen.removeClassName('view-container_hide-animated');
      this._finalScreen.remove();
    }
  }]);

  return Game;
}();

exports.default = Game;
;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing an App.
 */
var App = function () {
  function App() {
    _classCallCheck(this, App);

    /**
     * @type {!Element}
     * @private
     */
    this._appElem = document.createElement('div');
    this._appElem.classList.add('app-container');
    this._appElem.classList.add('app-container-background');
  }

  /**
   * @public
   */


  _createClass(App, [{
    key: 'render',
    value: function render() {

      document.body.appendChild(this._appElem);

      /**
       * @type {!Game}
       * @protected
       */
      this.game = new _game2.default(this._appElem);
      this.game.render();
    }
  }]);

  return App;
}();

/**
 * @type {!App}
 */


var app = new App();

window.onload = function () {
  app.render();
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Change this parameter to increase or decrease levels quantity.
 * Now the 10th level is final.
 *
 * Possible values are for 1 to 25.
 *
 * @type {!number}
 */
var LEVELS_COUNT = exports.LEVELS_COUNT = 10;

//
// TODO: add more parameters to config
//

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var UP = exports.UP = "up";
var DOWN = exports.DOWN = "down";
var LEFT = exports.LEFT = "left";
var RIGHT = exports.RIGHT = "right";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NOT_STARTED = exports.NOT_STARTED = 0;
var START_SCREEN = exports.START_SCREEN = 1;
var REMOVING_START_SCREEN = exports.REMOVING_START_SCREEN = 2;
var LEVEL_GAMEPLAY = exports.LEVEL_GAMEPLAY = 3;
var PLAYER_IS_MOVING = exports.PLAYER_IS_MOVING = 4;
var LEVEL_COMPLETE = exports.LEVEL_COMPLETE = 5;
var REMOVING_LEVEL_COMPLETE_SCREEN = exports.REMOVING_LEVEL_COMPLETE_SCREEN = 6;
var FINAL_LEVEL_COMPLETE = exports.FINAL_LEVEL_COMPLETE = 7;
var REMOVING_FINAL_SCREEN = exports.REMOVING_FINAL_SCREEN = 8;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = __webpack_require__(0);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a final screen of the game.
 */
var FinalView = function (_View) {
  _inherits(FinalView, _View);

  /**
   * @param {!Element} parentElement
   */
  function FinalView(parentElement) {
    _classCallCheck(this, FinalView);

    var _this = _possibleConstructorReturn(this, (FinalView.__proto__ || Object.getPrototypeOf(FinalView)).call(this, parentElement));

    _this.addClassName('final-view-container');

    /**
     * @type {undefined|!Function}
     * @public
     */
    _this.onPlayAgainButtonClick = undefined;

    _this._createContent();
    return _this;
  }

  /**
   * @private
   */


  _createClass(FinalView, [{
    key: '_createContent',
    value: function _createContent() {
      /**
       * @type {!Element}
       */
      var titleElem = this._createTitle();

      /**
       * @type {!Element}
       */
      var imageElem = this._createImage();

      /**
       * @type {!Element}
       */
      var descriptionElem = this._createDescription();

      /**
       * @type {!Element}
      * @private
       */
      this._playAgainButtonElem = this._createPlayAgainButton();

      this.appendChild(titleElem);
      this.appendChild(imageElem);
      this.appendChild(descriptionElem);
      this.appendChild(this._playAgainButtonElem);
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createTitle',
    value: function _createTitle() {
      /**
       * @type {!Element}
       */
      var titleElem = document.createElement('h1');

      titleElem.classList.add('final-view-container__title');
      titleElem.innerHTML = 'You win!';

      return titleElem;
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createImage',
    value: function _createImage() {
      /**
       * @type {!Element}
       */
      var imageElem = document.createElement('img');

      imageElem.classList.add('final-view-container__img');

      return imageElem;
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createDescription',
    value: function _createDescription() {
      /**
       * @type {!Element}
       */
      var descriptionElem = document.createElement('h2');

      descriptionElem.classList.add('final-view-container__description');
      descriptionElem.innerHTML = 'Lenni is completely happy.';

      return descriptionElem;
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createPlayAgainButton',
    value: function _createPlayAgainButton() {
      /**
       * @type {!Element}
       */
      var playAgainButtonElem = document.createElement('div');

      playAgainButtonElem.classList.add('final-view-container__play-again-button');
      playAgainButtonElem.innerHTML = 'Play again';
      playAgainButtonElem.onclick = this.onPlayAgainButtonClickCallback.bind(this);

      return playAgainButtonElem;
    }

    /**
     * @public
     */

  }, {
    key: 'onPlayAgainButtonClickCallback',
    value: function onPlayAgainButtonClickCallback() {
      if (this.onPlayAgainButtonClick) {
        this.onPlayAgainButtonClick();
      }
    }

    /**
     * @public
     */

  }, {
    key: 'showPressButtonEffect',
    value: function showPressButtonEffect() {

      /**
       * @const {!number}
       */
      var DELAY = 100;

      this._playAgainButtonElem.classList.add('final-view-container__play-again-button_focus');
      setTimeout(this.hidePressButtonEffectCallback.bind(this), DELAY);
    }

    /**
     * @public
     */

  }, {
    key: 'hidePressButtonEffectCallback',
    value: function hidePressButtonEffectCallback() {
      this._playAgainButtonElem.classList.remove('final-view-container__play-again-button_focus');
    }
  }]);

  return FinalView;
}(_view2.default);

exports.default = FinalView;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pointtype = __webpack_require__(3);

var PointType = _interopRequireWildcard(_pointtype);

var _labyrinth = __webpack_require__(1);

var _labyrinth2 = _interopRequireDefault(_labyrinth);

var _player = __webpack_require__(2);

var _player2 = _interopRequireDefault(_player);

var _view = __webpack_require__(0);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Labyrinth of the game.
 */
var LabyrinthView = function (_View) {
	_inherits(LabyrinthView, _View);

	/**
  * @param {!Element} parentElement
  * @param {!number} fieldWidth
  * @param {!number} fieldHeight
  */
	function LabyrinthView(parentElement, fieldWidth, fieldHeight) {
		_classCallCheck(this, LabyrinthView);

		var _this = _possibleConstructorReturn(this, (LabyrinthView.__proto__ || Object.getPrototypeOf(LabyrinthView)).call(this, parentElement));

		_this.addClassName('labyrinth-view-container');

		/**
   * @type {!number}
   * @private
   */
		_this._fieldWidth = fieldWidth;

		/**
   * @type {!number}
   * @private
   */
		_this._fieldHeight = fieldHeight;

		/**
   * @type {!number}
   * @private
   */
		_this._cellWidth = 0;

		/**
   * @type {!number}
   * @private
   */
		_this._cellHeight = 0;

		/**
   * @type {!Player|undefined}
   * @private
   */
		_this._playerElem = undefined;

		/**
   * @type {undefined|!Function}
   * @public
   */
		_this.onKeyPressed = undefined;

		_this._createContent();
		return _this;
	}

	/**
  * @private
  */


	_createClass(LabyrinthView, [{
		key: '_createContent',
		value: function _createContent() {
			/**
    * @type {!Element}
   * @private
    */
			this._labyrinthElem = this._createLabyrinth();

			/**
    * @type {!Element}
   * @private
    */
			this._navigationElem = this._createNavigation();

			this.appendChild(this._labyrinthElem);
			this.appendChild(this._navigationElem);
		}

		/**
   * @return {!Element}
   * @private
   */

	}, {
		key: '_createLabyrinth',
		value: function _createLabyrinth() {
			/**
    * @type {!Element}
    */
			var labyrinthElem = document.createElement('div');

			labyrinthElem.classList.add('labyrinth-view-container__labyrinth');

			return labyrinthElem;
		}

		/**
   * @return {!Element}
   * @private
   */

	}, {
		key: '_createNavigation',
		value: function _createNavigation() {
			/**
    * @type {!Element}
    */
			var navigationElem = document.createElement('div');

			navigationElem.classList.add('labyrinth-view-container__navigation');

			/**
    * @type {!number}
    */
			var btnSize = Math.floor(this._fieldHeight / 6 - 5);

			/**
    * @type {!Element}
    * @private
    */
			this._upButtonElem = document.createElement('div');
			this._upButtonElem.classList.add('labyrinth-view-container__navigation-btn');
			this._upButtonElem.classList.add('labyrinth-view-container__navigation-btn_up');
			this._upButtonElem.onclick = this.onKeyPressedCallback.bind(this, 'up');
			this._upButtonElem.style.width = btnSize + 'px';
			this._upButtonElem.style.height = btnSize + 'px';
			this._upButtonElem.style.top = '0';
			this._upButtonElem.style.left = Math.floor(this._fieldWidth / 2 - btnSize / 2) + 'px';

			/**
    * @type {!Element}
    * @private
    */
			this._downButtonElem = document.createElement('div');
			this._downButtonElem.classList.add('labyrinth-view-container__navigation-btn');
			this._downButtonElem.classList.add('labyrinth-view-container__navigation-btn_down');
			this._downButtonElem.onclick = this.onKeyPressedCallback.bind(this, 'down');
			this._downButtonElem.style.width = btnSize + 'px';
			this._downButtonElem.style.height = btnSize + 'px';
			this._downButtonElem.style.top = btnSize + 'px';
			this._downButtonElem.style.left = Math.floor(this._fieldWidth / 2 - btnSize / 2) + 'px';

			/**
    * @type {!Element}
    * @private
    */
			this._leftButtonElem = document.createElement('div');
			this._leftButtonElem.classList.add('labyrinth-view-container__navigation-btn');
			this._leftButtonElem.classList.add('labyrinth-view-container__navigation-btn_left');
			this._leftButtonElem.onclick = this.onKeyPressedCallback.bind(this, 'left');
			this._leftButtonElem.style.width = btnSize + 'px';
			this._leftButtonElem.style.height = btnSize + 'px';
			this._leftButtonElem.style.top = btnSize + 'px';
			this._leftButtonElem.style.top = btnSize + 'px';
			this._leftButtonElem.style.left = Math.floor(this._fieldWidth / 2 - btnSize * 3 / 2) + 'px';

			/**
    * @type {!Element}
    * @private
    */
			this._rightButtonElem = document.createElement('div');
			this._rightButtonElem.classList.add('labyrinth-view-container__navigation-btn');
			this._rightButtonElem.classList.add('labyrinth-view-container__navigation-btn_right');
			this._rightButtonElem.onclick = this.onKeyPressedCallback.bind(this, 'right');
			this._rightButtonElem.style.width = btnSize + 'px';
			this._rightButtonElem.style.height = btnSize + 'px';
			this._rightButtonElem.style.top = btnSize + 'px';
			this._rightButtonElem.style.top = btnSize + 'px';
			this._rightButtonElem.style.left = Math.floor(this._fieldWidth / 2 + btnSize / 2) + 'px';

			navigationElem.appendChild(this._upButtonElem);
			navigationElem.appendChild(this._downButtonElem);
			navigationElem.appendChild(this._leftButtonElem);
			navigationElem.appendChild(this._rightButtonElem);

			return navigationElem;
		}

		/**
   * @param {!string} key
   * @public
   */

	}, {
		key: 'onKeyPressedCallback',
		value: function onKeyPressedCallback(key) {
			if (this.onKeyPressed) {
				this.onKeyPressed(key);
			}
		}

		/**
  * @param {!string} key
   * @public
   */

	}, {
		key: 'showPressButtonEffect',
		value: function showPressButtonEffect(key) {

			/**
    * @const {!number}
    */
			var DELAY = 100;

			switch (key) {
				case 'up':
					this._upButtonElem.classList.add('labyrinth-view-container__navigation-btn_focus');
					setTimeout(this.hidePressButtonEffectCallback.bind(this, this._upButtonElem), DELAY);
					break;
				case 'down':
					this._downButtonElem.classList.add('labyrinth-view-container__navigation-btn_focus');
					setTimeout(this.hidePressButtonEffectCallback.bind(this, this._downButtonElem), DELAY);
					break;
				case 'left':
					this._leftButtonElem.classList.add('labyrinth-view-container__navigation-btn_focus');
					setTimeout(this.hidePressButtonEffectCallback.bind(this, this._leftButtonElem), DELAY);
					break;
				case 'right':
					this._rightButtonElem.classList.add('labyrinth-view-container__navigation-btn_focus');
					setTimeout(this.hidePressButtonEffectCallback.bind(this, this._rightButtonElem), DELAY);
					break;
				default:
					break;
			}
		}

		/**
  * @param {!Element} button
   * @public
   */

	}, {
		key: 'hidePressButtonEffectCallback',
		value: function hidePressButtonEffectCallback(button) {
			button.classList.remove('labyrinth-view-container__navigation-btn_focus');
		}

		/**
  * @param {!Labyrinth} labyrinth
   * @public
   */

	}, {
		key: 'renderLabyrinth',
		value: function renderLabyrinth(labyrinth) {

			//
			// clear everything from _labyrinthElem
			//
			while (this._labyrinthElem.hasChildNodes()) {
				this._labyrinthElem.removeChild(this._labyrinthElem.lastChild);
				this._playerElem = undefined;
			}

			/**
    * @type {!number}
    */
			var labyrinthElemSize = this._fieldWidth;

			this._cellWidth = Math.floor(labyrinthElemSize / labyrinth.width);
			this._cellHeight = Math.floor(labyrinthElemSize / labyrinth.height);

			var x = void 0;
			var y = void 0;
			var width = labyrinth.width;
			var height = labyrinth.height;

			for (y = 0; y < height; y++) {
				for (x = 0; x < width; x++) {

					/**
      * @type {!Element}
      */
					var cell = document.createElement('div');

					cell.classList.add('labyrinth-view-container__labyrinth-cell');

					/**
      * @type {!string}
      */
					var pointType = labyrinth.getPointType({ x: x, y: y });

					if (pointType === PointType.WALL && Math.floor(Math.random() * 20) === 1) {
						cell.setAttribute('data-legend', 'wall-gdg');
					} else {
						cell.setAttribute('data-legend', pointType);
					}
					cell.style.width = this._cellWidth + 'px';
					cell.style.height = this._cellHeight + 'px';
					cell.style.left = x * this._cellWidth + 'px';
					cell.style.top = y * this._cellHeight + 'px';

					this._labyrinthElem.appendChild(cell);
				}
			}
		}

		/**
   * @param {!Player} player
   * @public
   */

	}, {
		key: 'renderPlayer',
		value: function renderPlayer(player) {
			if (!this._playerElem) {
				this._playerElem = document.createElement('div');
				this._playerElem.classList.add('labyrinth-view-container__labyrinth-player');
				this._playerElem.style.width = this._cellWidth + 'px';
				this._playerElem.style.height = this._cellHeight + 'px';

				this._labyrinthElem.appendChild(this._playerElem);
			}

			this._playerElem.style.left = player.position.x * this._cellWidth + 'px';
			this._playerElem.style.top = player.position.y * this._cellHeight + 'px';
		}
	}]);

	return LabyrinthView;
}(_view2.default);

exports.default = LabyrinthView;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _view = __webpack_require__(0);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a level complete screen of the game.
 */
var LevelCompleteView = function (_View) {
  _inherits(LevelCompleteView, _View);

  /**
   * @param {!Element} parentElement
   */
  function LevelCompleteView(parentElement) {
    _classCallCheck(this, LevelCompleteView);

    var _this = _possibleConstructorReturn(this, (LevelCompleteView.__proto__ || Object.getPrototypeOf(LevelCompleteView)).call(this, parentElement));

    _this.addClassName('level-complete-view-container');

    _this._createContent();
    return _this;
  }

  /**
   * @private
   */


  _createClass(LevelCompleteView, [{
    key: '_createContent',
    value: function _createContent() {
      /**
       * @type {!Element}
       * @private
       */
      this._titleElem = this._createTitle();

      /**
       * @type {!Element}
       * @private
       */
      this._imageElem = this._createImage();

      /**
       * @type {!Element}
       */
      var loading = this._createLoading();

      this.appendChild(this._titleElem);
      this.appendChild(this._imageElem);
      this.appendChild(loading);
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createTitle',
    value: function _createTitle() {
      /**
       * @type {!Element}
       */
      var titleElem = document.createElement('h1');

      titleElem.classList.add('level-complete-view-container__title');
      titleElem.innerHTML = 'Level 1 in 10';

      return titleElem;
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createImage',
    value: function _createImage() {
      /**
       * @type {!Element}
       */
      var imageElem = document.createElement('img');

      imageElem.classList.add('level-complete-view-container__img');

      return imageElem;
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createLoading',
    value: function _createLoading() {
      /**
       * @type {!Element}
       */
      var loadingElem = document.createElement('h2');

      loadingElem.classList.add('level-complete-view-container__loading');
      loadingElem.innerHTML = 'Loading...';

      return loadingElem;
    }

    /**
     * @param {!number} nextLevel
     * @public
     */

  }, {
    key: 'render',
    value: function render(nextLevel) {
      this._titleElem.innerHTML = 'Level ' + nextLevel + ' in 10';
      this._imageElem.src = window.location.origin + window.location.pathname + '/img/level/l' + nextLevel + '.jpg';
      console.log(this._imageElem.src);
      _get(LevelCompleteView.prototype.__proto__ || Object.getPrototypeOf(LevelCompleteView.prototype), 'render', this).call(this);
    }
  }]);

  return LevelCompleteView;
}(_view2.default);

exports.default = LevelCompleteView;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = __webpack_require__(0);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a starting screen of the game.
 */
var StartView = function (_View) {
  _inherits(StartView, _View);

  /**
   * @param {!Element} parentElement
   */
  function StartView(parentElement) {
    _classCallCheck(this, StartView);

    var _this = _possibleConstructorReturn(this, (StartView.__proto__ || Object.getPrototypeOf(StartView)).call(this, parentElement));

    _this.addClassName('start-view-container');

    /**
     * @type {undefined|!Function}
     * @public
     */
    _this.onStartButtonClick = undefined;

    _this._createContent();
    return _this;
  }

  /**
   * @private
   */


  _createClass(StartView, [{
    key: '_createContent',
    value: function _createContent() {
      /**
       * @type {!Element}
       */
      var titleElem = this._createTitle();

      /**
       * @type {!Element}
       */
      var descriptionElem = this._createDescription();

      /**
       * @type {!Element}
      * @private
       */
      this._startButtonElem = this._createStartButton();

      this.appendChild(titleElem);
      this.appendChild(descriptionElem);
      this.appendChild(this._startButtonElem);
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createTitle',
    value: function _createTitle() {
      /**
       * @type {!Element}
       */
      var titleElem = document.createElement('h1');

      titleElem.classList.add('start-view-container__title');
      titleElem.innerHTML = 'Labyrinth';

      return titleElem;
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createDescription',
    value: function _createDescription() {
      /**
       * @type {!Element}
       */
      var descriptionElem = document.createElement('h2');

      descriptionElem.classList.add('start-view-container__description');
      descriptionElem.innerHTML = 'Help Lenni to find a way...';

      return descriptionElem;
    }

    /**
     * @return {!Element}
     * @private
     */

  }, {
    key: '_createStartButton',
    value: function _createStartButton() {
      /**
       * @type {!Element}
       */
      var startButtonElem = document.createElement('div');

      startButtonElem.classList.add('start-view-container__start-button');
      startButtonElem.innerHTML = 'GO!';
      startButtonElem.onclick = this.onStartButtonClickCallback.bind(this);

      return startButtonElem;
    }

    /**
     * @public
     */

  }, {
    key: 'onStartButtonClickCallback',
    value: function onStartButtonClickCallback() {
      if (this.onStartButtonClick) {
        this.onStartButtonClick();
      }
    }

    /**
     * @public
     */

  }, {
    key: 'showPressButtonEffect',
    value: function showPressButtonEffect() {

      /**
       * @const {!number}
       */
      var DELAY = 100;

      this._startButtonElem.classList.add('start-view-container__start-button_focus');
      setTimeout(this.hidePressButtonEffectCallback.bind(this), DELAY);
    }

    /**
     * @public
     */

  }, {
    key: 'hidePressButtonEffectCallback',
    value: function hidePressButtonEffectCallback() {
      this._startButtonElem.classList.remove('start-view-container__start-button_focus');
    }
  }]);

  return StartView;
}(_view2.default);

exports.default = StartView;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map