## Labyrinth ##

Игра лабиринт:
http://labi.vadimcpp.ru/

Скрин:
TODO

### Getting started ###

<pre>
	npm install
	npm run webpack
	npm run start
</pre>

### Labyrinth structure ###

<pre>
{
	"startPoint": {
		"x": 1,
		"y": 0
	},
	"endPoint": {
		"x": 2,
		"y": 4
	},
	"height": 5,
	"width": 5,
	"data": [
		[1, 0, 1, 1, 1],
		[1, 0, 0, 0, 1],
		[1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 1, 0, 1, 1]
	],
	"legend": [
		"free space",
		"wall"
	]
}
</pre>
