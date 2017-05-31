/**
 * Class representing Player model.
 *
 * Player possibilities: 
 *  - move UP / DOWN / LEFT / RIGHT keys.
 */
export default class Player {
	
    constructor() {
		this.x = 0;
		this.y = 0;
    }
	
	/**
	 * @param {{ x: number, y: number }}
	 * @public
	 */
	set position(position) {
		this.x = position.x;
		this.y = position.y;
	}
	
	/**
	 * @return {{ x: number, y: number }}
	 * @public
	 */
	get position() {
		let x = this.x;
		let y = this.y;
		return { x, y };		
	}
		
};
