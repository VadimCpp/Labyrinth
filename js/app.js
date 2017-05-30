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
        // TODO: implement
        console.log('run');
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
