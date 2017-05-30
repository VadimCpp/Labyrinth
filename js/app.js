import Game from './game';

/**
 * Class representing an App.
 */
class App {

    constructor() {
        /**
         * @const {!number}
         */
        const MIN_FIELD_HEIGHT = 480;

        /**
         * @type {!number}
         */
        let fieldHeight = Math.floor(window.innerHeight / 3) * 3;

        fieldHeight = Math.max(fieldHeight, MIN_FIELD_HEIGHT);

        /**
         * @type {!number}
         */
        let fieldWidth = fieldHeight / 3 * 2;

        /**
         * @type {!Game}
         * @protected
         */
        this.game = new Game(fieldWidth, fieldHeight);
    }

    /**
     * @public
     */
    render() {
        /**
         * @type {!Element}
         */
        let appElem = document.createElement('div');

        appElem.classList.add('app-container');
        appElem.classList.add('app-container-background');
        appElem.id = 'app';

        document.body.appendChild(appElem);

        this.game.render(appElem);
    }
}


window.onload = () => {
    /**
     * @type {!App}
     */
    let app = new App();

    app.render();
};
