import * as PointType from './pointtype';

export default class Labyrinth {
	
    constructor() {		
		/**
		 * @type {!number}
		 * @private
		 */
		this._width = 0;

		/**
		 * @type {!number}
		 * @private
		 */
		this._height = 0;

		/**
		 * @type {!Array<!string>}
		 * @private
		 */
		this._legend = [
			PointType.FREESPACE,
			PointType.WALL
		];

		let x = 0;
		let y = 0;

		/**
		 * @type {{ x:!number, y:!number }}
		 * @private
		 */
		this._startPoint = { x, y };

		/**
		 * @type {{ x:!number, y:!number }}
		 * @private
		 */
		this._endPoint = { x, y };

		/**
		 * This is data representing labyrinth.
		 * It contains 2d matrix.
		 *
		 * @type {!Array<!Array<!number>>}
		 * @private
		 */
		this._data = [];
    }

	/**
	 * @return {!number}
	 * @public
	 */
	get height() {
		return this._height;
	}

	/**
	 * @return {!number}
	 * @public
	 */
	get width() {
		return this._width;
	}

	/**
	 * @return {{ x:!number, y:!number }}
	 * @public
	 */
	get startPoint() {
		return this._startPoint;
	}

	/**
	 * @return {{ x:!number, y:!number }}
	 * @public
	 */
	get endPoint() {
		return this._endPoint;
	}

	/**
	 * @param {{ x:!number, y:!number }} point
	 * @return {!string}
	 * @public
	 */
	getPointType(point) {
		return this._legend[this._data[point.y][point.x]];
	}

	/**
	 * @return {!boolean}
	 * @public
	 */
	isFreeSpace(point) {
	   	/**
	   	 * @type {!boolean}
	   	 */
		let retValue = false;

		if (point.x >= 0 && point.y >= 0 && point.x < this._width && point.y < this._height) {
	   	   	/**
	   	   	 * @type {!string}
	   	   	 */
			let pointType = this.getPointType(point);
		
			if (pointType === PointType.FREESPACE) {
				retValue = true;
			}
		}

		return retValue;
	}

	/**
	 * @return {!boolean}
	 * @public
	 */
	isWall(point) {
	   	/**
	   	 * @type {!boolean}
	   	 */
		let retValue = false;

		if (point.x >= 0 && point.y >= 0 && point.x < this._width && point.y < this._height) {
	   	   	/**
	   	   	 * @type {!string}
	   	   	 */
			let pointType = this.getPointType(point);
	
			if (pointType === PointType.WALL) {
				retValue = true;
			}
		}

		return retValue;
	}
	
	/**
	 * The method generates labyrinth.
	 * It is heart of the model.
	 * 
	 * NOTE! Call this method after the object has been instantiated.
	 *
	 * @param {{ width:!number, height:!number }} size
	 * @public
	 */
	generate(size) {
		const MIN_WIDTH = 5;
		const MIN_HEIGHT = 5;
		const MAX_WIDTH = 25;
		const MAX_HEIGHT = 25;
		
		if (size.width < MIN_WIDTH || size.width > MAX_WIDTH || size.height < MIN_HEIGHT || size.height > MAX_HEIGHT) {
			console.error('Cannot generate labyrinth due to incorrect dimensions');
		} else {
			const WALL = 1;
			
			let x;
			let y;
			 
			//
			// Init width and height
			//
			this._width = size.width;
			this._height = size.height;
			
			//
			// Init width and height
			//
			for (y = 0; y < this._height; y++) {
				this._data[y] = [];
				for (x = 0; x < this._width; x++) {
					this._data[y][x] = WALL;
				}
			}
			
			this._startPoint = this._generateStartPoint();
			
			x = this._startPoint.x;
			y = this._startPoint.y - 1;
			
			this._generateLabyrinthAtPoint({ x, y });
			
			this._endPoint = this._generateEndPoint();
		}
	}
	
	/**
	 * @return {{ x:!number, y:!number }}
	 * @private
	 */
	_generateStartPoint() {
		const FREESPACE = 0;
		
		let x = 0;
		let y = this._height - 1;
		
		while (x <= 0 || x >= this._width - 1) {
			x = Math.floor(Math.random() * this._width);
		}
		
		this._data[y][x] = FREESPACE;
		
		return { x, y };
	}
	
	/**
	 * This is recursive function. The essencial of algorythm.
	 *
	 * @param {{ x:!number, y:!number }} point
	 * @private
	 */
	_generateLabyrinthAtPoint(point) {
		/**
		 * @const {!number}
         */
		const FREESPACE = 0;
		
		this._data[point.y][point.x] = FREESPACE;
		
		let x;
		let y;
		let left;
		let right;
		let up;
		let down;
		let directions;
		
		x = point.x - 1;
		y = point.y;
		left = { x, y };
		
		x = point.x + 1;
		y = point.y;
		right = { x, y };
		
		x = point.x;
		y = point.y - 1;
		up = { x, y };
		
		x = point.x;
		y = point.y + 1;
		down = { x, y };
		
		do {
			directions = [];
			
			if (this._isPossibleToGenerateLabyrinthAtPoint(left, point)) {
				directions.push(left);
			}
			if (this._isPossibleToGenerateLabyrinthAtPoint(right, point)) {
				directions.push(right);
			}
			if (this._isPossibleToGenerateLabyrinthAtPoint(up, point)) {
				directions.push(up);
			}
			if (this._isPossibleToGenerateLabyrinthAtPoint(down, point)) {
				directions.push(down);
			}
			
			if (directions.length) {
				
				let direction = Math.floor(Math.random() * directions.length);
				this._generateLabyrinthAtPoint(directions[direction]);
			}
		} while (directions.length);
	}

	/**
	 * This is recursive function. The essencial of algorythm.
	 *
	 * @param {{ x:!number, y:!number }} point
     * @param {{ x:!number, y:!number }} exclude
	 * @private
	 */
	_isPossibleToGenerateLabyrinthAtPoint(point, exclude) {
  	   	/**
  	   	 * @type {!boolean}
  	   	 */
		let retValue = true;
		
		if (this.isWall(point)) {
			let x;
			let y;
			
			let left;
			let right;
			let up;
			let down;
			
			x = point.x - 1;
			y = point.y;
			left = { x, y };
			
			x = point.x + 1;
			y = point.y;
			right = { x, y };
			
			x = point.x;
			y = point.y - 1;
			up = { x, y };
			
			x = point.x;
			y = point.y + 1;
			down = { x, y };
			
			if (JSON.stringify(left) !== JSON.stringify(exclude)) {
				retValue = this.isWall(left);
			} 
			
			if (retValue === true && JSON.stringify(right) !== JSON.stringify(exclude)) {
				retValue = this.isWall(right);
			}

			if (retValue === true && JSON.stringify(up) !== JSON.stringify(exclude)) {
				retValue = this.isWall(up);
			}

			if (retValue === true && JSON.stringify(down) !== JSON.stringify(exclude)) {
				retValue = this.isWall(down);
			}
			
		} else {
			retValue = false;
		}
			
		return retValue;
	}

	/**
	 * @return {{ x:!number, y:!number }}
	 * @private
	 */
	_generateEndPoint() {
		const FREESPACE = 0;
	
		let x;
		let y = 1;

		do {
			x = Math.floor(Math.random() * this._width);
		} while (x <= 0 || x >= this._width - 1 || !this.isFreeSpace({ x, y }));
	
		y = 0;
		
		this._data[y][x] = FREESPACE;
		
		return { x, y };
	}
};
