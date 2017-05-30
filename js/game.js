/**
 * Class representing game controller.
 */
export default class Game {

	/**
	 * @param {!number} fieldWidth
	 * @param {!number} fieldHeight
     */
    constructor(fieldWidth, fieldHeight) {

        /**
         * @type {!number}
         * @protected
         */
        this.fieldWidth = fieldWidth;

        /**
         * @type {!number}
         * @protected
         */
        this.fieldHeight = fieldHeight;

    }

    /**
     * @param {!Element} element
     * @public
     */
    render(element) {
        /**
         * @type {!Element}
         */
        let gameElem = document.createElement('div');

        gameElem.classList.add('game-container');
        gameElem.classList.add('game-container-background');
        gameElem.id = 'game';
        gameElem.style.width = this.fieldWidth + 'px';
        gameElem.style.height = this.fieldHeight + 'px';

        element.appendChild(gameElem);
    }
	
};
