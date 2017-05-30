import StartView from './startView';

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
        this._startScreen.render();
    }

    /**
     * The callback is fired if user tap start button,
     * or press OK or SPACE on keyboard.
     *
     * @public
     */
    onStartButtonClickCallback() {
        console.log('onStartButtonClickCallback');
    }
};
