import * as PointType from './../model/pointtype';
import Labyrinth from './../model/labyrinth';
import Player from './../model/player';
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
		 * @type {!number}
		 * @private
		 */
		this._fieldWidth = fieldWidth;

		/**
		 * @type {!number}
		 * @private
		 */
		this._fieldHeight = fieldHeight;

		/**
		 * @type {!number}
		 * @private
		 */
		this._cellWidth = 0;

		/**
		 * @type {!number}
		 * @private
		 */
		this._cellHeight = 0;

        /**
         * @type {!Player|undefined}
         * @private
         */
        this._playerElem = undefined;

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
	
	
    /**
	 * @param {!string} key
     * @public
     */
	showPressButtonEffect(key) {
		
		/**
		 * @const {!number}
		 */
		const DELAY = 100;
		
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
	hidePressButtonEffectCallback(button) {
		button.classList.remove('labyrinth-view-container__navigation-btn_focus');
	}


    /**
	 * @param {!Labyrinth} labyrinth
     * @public
     */
	renderLabyrinth(labyrinth) {
		
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
		let labyrinthElemSize = this._fieldWidth;
			
        this._cellWidth = Math.floor(labyrinthElemSize / labyrinth.width);
        this._cellHeight = Math.floor(labyrinthElemSize / labyrinth.height);
		
		let x;
		let y;
		let width = labyrinth.width;
		let height = labyrinth.height;
		
		for (y = 0; y < height; y++) {
			for (x = 0; x < width; x++) {
				
				/**
				 * @type {!Element}
				 */
				let cell = document.createElement('div');
				
				cell.classList.add('labyrinth-view-container__labyrinth-cell');
				
				/**
				 * @type {!string}
				 */
				let pointType = labyrinth.getPointType({x, y});
				
				if (pointType === PointType.WALL && Math.floor(Math.random() * 20) === 1) {
					cell.setAttribute('data-legend', 'wall-gdg');
				} else {
					cell.setAttribute('data-legend', pointType);
				}
				cell.style.width = this._cellWidth + 'px';
				cell.style.height = this._cellHeight + 'px';
				cell.style.left = (x * this._cellWidth) + 'px';
				cell.style.top = (y * this._cellHeight) + 'px';
				
				this._labyrinthElem.appendChild(cell);
			}
		}
	}


    /**
     * @param {!Player} player
     * @public
     */
	renderPlayer(player) {
        if (!this._playerElem) {
            this._playerElem = document.createElement('div');
            this._playerElem.classList.add('labyrinth-view-container__labyrinth-player');
            this._playerElem.style.width = this._cellWidth + 'px';
            this._playerElem.style.height = this._cellHeight + 'px';

            this._labyrinthElem.appendChild(this._playerElem);
        }

        this._playerElem.style.left = (player.position.x * this._cellWidth) + 'px';
        this._playerElem.style.top = (player.position.y * this._cellHeight) + 'px';
	}
}
