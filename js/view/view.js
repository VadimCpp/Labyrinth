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

        this.addClassName('view-container');
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

    /**
     * @param {!string} className
     * @public
     */
    addClassName(className) {
        this._viewElem.classList.add(className);
    }

    /**
     * @param {!string} className
     * @public
     */
    removeClassName(className) {
        this._viewElem.classList.remove(className);
    }

    /**
     * @param {!Element} element
     * @protected
     */
    appendChild(element) {
        this._viewElem.appendChild(element);
    }
}
