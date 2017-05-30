/**
 * Class representing an App.
 */
class App {

    /**
     * Call this method once after object has being instantiated.
     *
     * @public
     */
    run() {
        /**
         * @type {!Element}
         */
        let appElem = document.createElement('div');

        appElem.classList.add('app-container');
        appElem.classList.add('app-container-background');
        appElem.id = 'app';

        document.body.appendChild(appElem);

        // TODO: create game
    }

}


/**
 * Creating the object does nothing.
 * All the initialization is put into run() method and
 * is called after window has been loaded.
 *
 * @type {!App}
 */
let app = new App();

window.onload = () => {
    app.run();
};
