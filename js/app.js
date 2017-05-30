import Game from './game';

/**
 * Class representing an App.
 */
class App {

    constructor() {
        /**
         * @type {!Element}
         * @private
         */
        this._appElem = document.createElement('div');
        this._appElem.classList.add('app-container');
        this._appElem.classList.add('app-container-background');
    }

    /**
     * @public
     */
    render() {

        document.body.appendChild(this._appElem);

        /**
         * @type {!Game}
         * @protected
         */
        this.game = new Game(this._appElem);
        this.game.render();
    }
}


/**
 * @type {!App}
 */
let app = new App();

window.onload = () => {
    app.render();
};
