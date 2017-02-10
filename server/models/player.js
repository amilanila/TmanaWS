import { connect, disconnect, mongoose } from '../schema/db';
import { PlayerSchema } from '../schema/schema';

let playerInitialised = false;
let Player = null;

export const init = () => {
	connect();
	initPlayer();
	playerInitialised = true;	
}

export const initPlayer = () => {
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

