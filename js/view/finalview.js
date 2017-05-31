import View from './view';

/**
 * Class representing a final screen of the game.
 */
export default class FinalView extends View {

    /**
     * @param {!Element} parentElement
     */
    constructor(parentElement) {
        super(parentElement);
        this.addClassName('final-view-container');

        /**
         * @type {undefined|!Function}
         * @public
         */
        this.onPlayAgainButtonClick = undefined;

        this._createContent();
    }


    /**
     * @private
     */
    _createContent() {
        /**
         * @type {!Element}
         */
        let titleElem = this._createTitle();
		
		/**
		 * @type {!Element}
		 */
		let imageElem = this._createImage();

        /**
         * @type {!Element}
         */
        let descriptionElem = this._createDescription();

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
    _createTitle() {
        /**
         * @type {!Element}
         */
        let titleElem = document.createElement('h1');

        titleElem.classList.add('final-view-container__title');
        titleElem.innerHTML = 'You win!';

        return titleElem;
    }


	/**
	 * @return {!Element}
	 * @private
	 */
	_createImage() {
		/**
		 * @type {!Element}
		 */
		let imageElem = document.createElement('img');

		imageElem.classList.add('final-view-container__img');

		return imageElem;
	}


    /**
     * @return {!Element}
     * @private
     */
    _createDescription() {
        /**
         * @type {!Element}
         */
        let descriptionElem = document.createElement('h2');

        descriptionElem.classList.add('final-view-container__description');
        descriptionElem.innerHTML = 'Lenni is completely happy.';

        return descriptionElem;
    }


    /**
     * @return {!Element}
     * @private
     */
    _createPlayAgainButton() {
        /**
         * @type {!Element}
         */
        let playAgainButtonElem = document.createElement('div');

        playAgainButtonElem.classList.add('final-view-container__play-again-button');
        playAgainButtonElem.innerHTML = 'Play again';
        playAgainButtonElem.onclick = this.onPlayAgainButtonClickCallback.bind(this);

        return playAgainButtonElem;
    }


    /**
     * @public
     */
    onPlayAgainButtonClickCallback() {
        if (this.onPlayAgainButtonClick) {
            this.onPlayAgainButtonClick();
        }
    }
	
	
    /**
     * @public
     */
	showPressButtonEffect() {
		
		/**
		 * @const {!number}
		 */
		const DELAY = 100;
		
		this._playAgainButtonElem.classList.add('final-view-container__play-again-button_focus');
		setTimeout(this.hidePressButtonEffectCallback.bind(this), DELAY);
	
	}
	
	
    /**
     * @public
     */
	hidePressButtonEffectCallback() {
		this._playAgainButtonElem.classList.remove('final-view-container__play-again-button_focus');
	}
}
