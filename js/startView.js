import View from './view';

/**
 * Class representing a starting screen of the game.
 */
export default class StartView extends View{

    /**
     * @param {!Element} parentElement
     */
    constructor(parentElement) {
        super(parentElement);

        this.addClassName('start-view-container');
    }

}
