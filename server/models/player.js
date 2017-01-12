let playerInitialised = false;
let db = null;
let mongoose = null;
let PlayerSchema = null;
let Player = null;

export const init = () => {
	connect();
	initPlayer();
	playerInitialised = true;	
}

export const connect = () => {
	mongoose = require('mongoose');
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/test');

	db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));

	console.log('Connected to database');
}

export const disconnect = () => {
	mongoose.disconnect(function() {
		console.log('Disconnected from database');
	});
};

export const initPlayer = () => {
	// schema
	PlayerSchema = mongoose.Schema({
		id: String,
		fname: String,
		lname: String,
		category: String
	});

	// model
	Player = null;
	if (Player == null) {
		Player = mongoose.model('Player', PlayerSchema);
	}

	console.log('Player model initialised');
}

export const playerAll = (req, res) => {
	let players = [];
	let response = {};

	if (!playerInitialised) {
		init();
	}

	Player.find({}).exec((err, plyrs) => {
		if (err) {
			console.log('Error loading players');

			response = {
				'success': false,
				'data': {
					'players': []
				}
			};
		} else {
			console.log('Players loaded successfully');

			plyrs.forEach(function(player) {
				// console.log('player = ', player);
				players.push(player);
			});

			response = {
				'success': true,
				'data': {
					'players': players 
				}
			};	
		}
		
		res.json(response);
	});
};

export const playerFindById = id => {
	let player = players.find( player => player.id === id );
	let response = {
		'success' : player && !!player.id,
		'data': {
			'player': player
		}
	};
	return response;
};

export const playerFindByCategory = cat => {
	let pla = players.filter(player => player.category === cat);
	let response = {
		'success': pla && !!pla.length,
		'data': {
			'players': pla
		}
	};
	return response;
};

