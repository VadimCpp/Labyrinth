/**
 * Class representing a View.
 */
export default class View {

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
         * @type {!Element}
         * @private
         */
        this._viewElem = document.createElement('div');
        this._viewElem.classList.add('view-container');
    }

    /**
     * @public
     */
    render() {
        this._parentElement.appendChild(this._viewElem);
    }

    /**
     * @public
     */
    remove() {
        this._parentElement.removeChild(this._viewElem);
    }
}
