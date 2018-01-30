## Labyrinth ##
<a href="http://opensource.org/licenses/MIT"><img src="https://camo.githubusercontent.com/576f25c78e59902f0c6ccfff81f0448ef660e90d/687474703a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d626c75652e737667" alt="License" data-canonical-src="http://img.shields.io/badge/License-MIT-blue.svg" style="max-width:100%;"></a>
<br><br>
Игра лабиринт:
http://labi.vadimcpp.ru/

![screen](https://github.com/VadimCpp/Labyrinth/blob/master/screen.jpg)

### Getting started ###


``` bash

git clone https://github.com/VadimCpp/Labyrinth.git

cd Labyrinth

npm install

```

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
