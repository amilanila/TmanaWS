Express & ES6 REST API Boilerplate
==================================

[![bitHound Score](https://www.bithound.io/github/developit/express-es6-rest-api/badges/score.svg)](https://www.bithound.io/github/developit/express-es6-rest-api)

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

Getting Started
---------------

```sh
# clone it
git clone git@github.com:developit/express-es6-rest-api.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Run it
PORT=8080 npm start

# With nodemon:
PORT=8080 nodemon
```


License
-------

MIT


URLs:
-----
Get all players: GET -> http://localhost:8080/api/player
Get root: GET -> http://localhost:8080/api/
Create player: POST -> http://localhost:8080/api/player/create
	JSON ->
	{
		"name": "Amila Nilantha",
		"birthday": "August 24",
		"height": "5 8",
		"weight": "61kg",
		"description": "All rounder",
		"battingStyle": "Right handed",
		"bowlingStyle": "Right arm medium pace",
		"team": "Grasshoppers",
		"division": "Divition-3",
		"season": "Autumn-Winter 2017",
		"match": "1",
		"runs": 20,
		"runsConceded": 8,
		"oversBowled": 2,
		"wickets": 1,
		"catches": 1,
		"contribution": 12,
		"outs": 2
	}