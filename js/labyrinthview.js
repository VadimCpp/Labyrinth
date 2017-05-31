import View from './view';

/**
 * Class representing a Labyrinth of the game.
 */
export default class LabyrinthView extends View {

    /**
     * @param {!Element} parentElement
     * @param {!number} fieldWidth
     * @param {!number} fieldHeight
     */
    constructor(parentElement, fieldWidth, fieldHeight) {
        super(parentElement);
        this.addClassName('labyrinth-view-container');

		/**
		 * @type {!Element}
		 * @private
		 */
		this._fieldWidth = fieldWidth;

		/**
		 * @type {!Element}
		 * @private
		 */
		this._fieldHeight = fieldHeight;
		
		/**
		 * @type {undefined|!Function}
		 * @public
		 */
		this.onKeyPressed = undefined;
		
		this._createContent();
    }


    /**
     * @private
     */
    _createContent() {
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
    _createLabyrinth() {
        /**
         * @type {!Element}
         */
        let labyrinthElem = document.createElement('div');

        labyrinthElem.classList.add('labyrinth-view-container__labyrinth');

        return labyrinthElem;
    }


    /**
     * @return {!Element}
     * @private
     */
    _createNavigation() {
		/**
		 * @type {!Element}
		 */
		let navigationElem = document.createElement('div');

		navigationElem.classList.add('labyrinth-view-container__navigation');

		/**
		 * @type {!number}
		 */
   	 	let btnSize = Math.floor(this._fieldHeight / 6 - 5);
		
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
	onKeyPressedCallback(key) {
		if (this.onKeyPressed) {
			this.onKeyPressed(key);
		}
	}
}
