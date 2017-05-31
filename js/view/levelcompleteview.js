import View from './view';

/**
 * Class representing a level complete screen of the game.
 */
export default class LevelCompleteView extends View {

    /**
     * @param {!Element} parentElement
     */
    constructor(parentElement) {
        super(parentElement);
        this.addClassName('level-complete-view-container');

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
        this._titleElem = this._createTitle();

        /**
         * @type {!Element}
         * @private
         */
        this._image = this._createImage();

        /**
         * @type {!Element}
         */
        let loading = this._createLoading();

        this.appendChild(this._titleElem);
        this.appendChild(this._image);
        this.appendChild(loading);
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

        titleElem.classList.add('level-complete-view-container__title');
        titleElem.innerHTML = 'Уровень 1';

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

        imageElem.classList.add('level-complete-view-container__img');

        return imageElem;
    }

    /**
     * @return {!Element}
     * @private
     */
    _createLoading() {
        /**
         * @type {!Element}
         */
        let loadingElem = document.createElement('h2');

        loadingElem.classList.add('level-complete-view-container__loading');
        loadingElem.innerHTML = 'Загрузка...';

        return loadingElem;
    }

    /**
     * @param {!number} nextLevel
     * @public
     */
    render(nextLevel) {
        this._titleElem.innerHTML = 'Уровень ' + nextLevel;
        super.render();
    }
}
