import * as GameState from './gamestate';
import StartView from './startview';

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
        const MIN_FIELD_HEIGHT = 480;

        /**
         * @type {!number}
         * @private
         */
        this._fieldHeight = Math.floor(window.innerHeight / 3) * 3;
        this._fieldHeight = Math.max(this._fieldHeight, MIN_FIELD_HEIGHT);

        /**
         * @type {!number}
         * @private
         */
        this._fieldWidth = this._fieldHeight / 3 * 2;

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
        // TODO:
        //
        // Models:
        //  - player;
        //  - labyrinth.
        //
        // Views:
        //  - start screen;
        //  - game screen;
        //  - finish level screen;
        //  - final screen;
        //

        /**
         * @type {!StartView}
         * @private
         */
        this._startScreen = new StartView(this._gameElem);
        this._startScreen.onStartButtonClick = this.onStartButtonClickCallback.bind(this);

        // TODO: handleKeyBoard
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
		
		// TODO: generate labyrinth and view and render.
		
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
	
};
