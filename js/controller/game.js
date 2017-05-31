import * as GameState from './../model/gamestate';
import * as Direction from './../model/direction';
import LabyrinthView from './../view/labyrinthview';
import Labyrinth from './../model/labyrinth';
import Player from './../model/player';
import StartView from './../view/startview';

/**
 * Class representing game controller.
 */
export default class Game {

	/**
     * @param {!Element} parentElement
     */
    constructor(parentElement) {

        /**
         * @type {!Element}
         * @private
         */
        this._parentElement = parentElement;

        /**
         * @const {!number}
         */
        const MIN_BASE_SIZE = 160;

        /**
         * @type {!number}
         */
		let baseSize = Math.min(Math.floor(window.innerHeight / 3), Math.floor(window.innerWidth / 2));

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
		this._player = new Player();
		
		/**
		 * @type {!Labyrinth}
		 * @private
		 */
		this._labyrinth = new Labyrinth();
		
		// 
		// Views:
		//  - start screen;
		//  - labyrinth view;
		//  - TODO:level complete screen;
		//  - TODO:final screen.
		//
		
        /**
         * @type {!StartView}
         * @private
         */
        this._startScreen = new StartView(this._gameElem);
        this._startScreen.onStartButtonClick = this.onStartButtonClickCallback.bind(this);
		

		/**
		 * @type {!LabyrinthView}
		 * @private
		 */
		this._labyrinthView = new LabyrinthView(this._gameElem, this._fieldWidth, this._fieldHeight);
		this._labyrinthView.onKeyPressed = this.onKeyPressedCallback.bind(this);

		// TODO:level complete screen;
		// TODO:final screen.
		
		document.onkeydown = this.onKeyboardCallback.bind(this);
    }

    /**
     * Game is rendered only once at the beginning.
     * @public
     */
    render() {
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
    onStartButtonClickCallback() {
		if (this._gameState === GameState.START_SCREEN) {
			
			this._gameState = GameState.REMOVING_START_SCREEN;
			
	   		/**
	   		 * @type {!number}
	   		 * @private
	   		 */
			const DELAY = 1000;
			
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
	_addNewLabyrintToBack() {
		
		this._labyrinthView.render();
		
		/**
		 * @type {!number}
		 */
		let width = this._labyrinthSize;
	
		/**
		 * @type {!number}
		 */
		let height = this._labyrinthSize;
		
		this._labyrinth.generate({width, height});
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
	_removeStartScreenAnimated(delay) {
		setTimeout(this.removeStartScreenCallback.bind(this), delay);
		this._startScreen.addClassName('view-container_hide-animated');
	}
	
	/**
	 * @public
	 */
	removeStartScreenCallback() {
		this._startScreen.remove();
	}
	
    /**
     * Need to allow user to play only after animation has finished.
	 * So set small timeout.
	 *
	 * @param {!number} delay
     * @private
     */
	_startGameplayAfterDelay(delay) {
		setTimeout(this.startGameplayCallback.bind(this), delay);
	}
	
	
	/**
	 * @public
	 */
	startGameplayCallback() {
		if (this._gameState === GameState.REMOVING_START_SCREEN) {
			this._gameState = GameState.LEVEL_GAMEPLAY;
		}
	}
	
	
	/**
	 * @public
	 */ 
	onKeyboardCallback(evt) {
		const RIGHT_CODE = 39;
		const DOWN_CODE = 40;
		const LEFT_CODE = 37;
		const UP_CODE = 38;
		const ENTER_CODE = 13;
		const SPACE_CODE = 32;
		
		let skipRendering = false;
		
		evt = evt || window.event;
		
		switch(evt.keyCode) {
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
	onKeyPressedCallback(direction) {
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
    _isPossibleToMove(direction) {

        /**
         * @type {!number}
         */
        let x = this._player.position.x;

        /**
         * @type {!number}
         */
        let y = this._player.position.y;

        if (direction === Direction.UP) {
            y -= 1;
        } else if (direction === Direction.DOWN) {
            y += 1;
        } else if (direction === Direction.LEFT) {
            x -= 1;
        } else if (direction === Direction.RIGHT) {
            x += 1;
        }

        return this._labyrinth.isFreeSpace({x, y});
    }


    /**
     * @param {!string} direction
     * @private
     */
    _doMove(direction) {
        if (this._gameState === GameState.LEVEL_GAMEPLAY) {

            this._gameState = GameState.PLAYER_IS_MOVING;

            /**
             * @type {!number}
             */
            let x = this._player.position.x;

            /**
             * @type {!number}
             */
            let y = this._player.position.y;

            if (direction === Direction.UP) {
                y -= 1;
            } else if (direction === Direction.DOWN) {
                y += 1;
            } else if (direction === Direction.LEFT) {
                x -= 1;
            } else if (direction === Direction.RIGHT) {
                x += 1;
            }

            this._player.position = {x, y};
            this._labyrinthView.renderPlayer(this._player);

            /**
             * @type {!number}
             */
            const DELAY = 100;

            setTimeout(this.moveFinishedCallback.bind(this), DELAY);
        }
    }


    /**
     * @public
     */
    moveFinishedCallback() {
        if (this._gameState === GameState.PLAYER_IS_MOVING) {
            this._gameState = GameState.LEVEL_GAMEPLAY;
        }
    }
};
