import View from './view';

/**
 * Class representing a starting screen of the game.
 */
export default class StartView extends View {

    /**
     * @param {!Element} parentElement
     */
    constructor(parentElement) {
        super(parentElement);
        this.addClassName('start-view-container');

        /**
         * @type {undefined|!Function}
         * @public
         */
        this.onStartButtonClick = undefined;

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
        let descriptionElem = this._createDescription();

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
    _createTitle() {
        /**
         * @type {!Element}
         */
        let titleElem = document.createElement('h1');

        titleElem.classList.add('start-view-container__title');
        titleElem.innerHTML = 'Лабиринт';

        return titleElem;
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

        descriptionElem.classList.add('start-view-container__description');
        descriptionElem.innerHTML = 'Ленни свободен от забот и ищет выход из лабиринта';

        return descriptionElem;
    }


    /**
     * @return {!Element}
     * @private
     */
    _createStartButton() {
        /**
         * @type {!Element}
         */
        let startButtonElem = document.createElement('div');

        startButtonElem.classList.add('start-view-container__start-button');
        startButtonElem.innerHTML = 'Поехали!';
        startButtonElem.onclick = this.onStartButtonClickCallback.bind(this);

        return startButtonElem;
    }


    /**
     * @public
     */
    onStartButtonClickCallback() {
        if (this.onStartButtonClick) {
            this.onStartButtonClick();
        }
    }
	
	
    /**
     * @public
     */
	showPressButtonEffect() {
		
		/**
		 * @const {!number}
		 */
		const DELAY = 200;
		
		this._startButtonElem.classList.add('start-view-container__start-button_focus');
		setTimeout(this.hidePressButtonEffectCallback.bind(this), DELAY);
	
	}
	
	
    /**
     * @public
     */
	hidePressButtonEffectCallback() {
		this._startButtonElem.classList.remove('start-view-container__start-button_focus');
	}
}
