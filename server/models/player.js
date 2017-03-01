import { connect, disconnect, mongoose } from '../schema/db';
import { PlayerSchema } from '../schema/schema';

let playerInitialised = false;
let Player = null;

export const init = () => {
	connect();
	playerInit();
	playerInitialised = true;	
}

export const playerInit = () => {
	if (Player == null) {
		Player = mongoose.model('Player', PlayerSchema);
	}
	console.log('Player model initialised');
}

export const playerCreate = (req, res) => {
	console.log('Saving player: ' + JSON.stringify(req.body));

	let response = {};
	if (!playerInitialised) {
		init();
	}

	const player = new Player (req.body);

	player.save((err) => {
		if (err) {
			console.log('Error while saving player: ' + err);
			response = {
				'success': false
			};
		} else {
			console.log('Player saved successfully');
			response = {
				'success': true
			};
		}
		res.json(response);
	});
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

export const playerByName = (req, res) => {
	let name = req.params.name;
	let response = {};

	if (!playerInitialised) {
		init();
	}

	Player.find({'name': name}).exec((err, player) => {
		if (err) {
			console.log('Error loading player with name: ' + name);

			response = {
				'success': false,
				'data': {
					'player': {}
				}
			};
		} else {
			console.log('Player loaded successfully for name: ' + name);

			response = {
				'success': true,
				'data': {
					'player': player
				}
			};	
		}
		
		res.json(response);
	});
};

export const playerById = (req, res) => {
	let id = req.params.id;
	let response = {};

	if (!playerInitialised) {
		init();
	}

	Player.find({'id': id}).exec((err, plyrs) => {
		if (err) {
			console.log('Error loading player with id: ' + id);

			response = {
				'success': false,
				'data': {
					'player': {}
				}
			};
		} else {
			console.log('Player loaded successfully for id: ' + id);

			let players = [];

			plyrs.forEach(function(player) {
				// console.log('player = ', player);
				players.push(player);
			});

			response = {
				'success': true,
				'data': {
					'player': players 
				}
			};	
		}
		
		res.json(response);
	});
};

export const playerDeleteById = (req, res) => {
	let id = req.params.id;
	let response = {};

	if (!playerInitialised) {
		init();
	}


	Player.find({'id': id}).exec((err, plyrs) => {
		if (err) {
			console.log('Error loading players to be removed for id: ' + id);

			response = {
				'success': false
			};
		} else {
			console.log('Players loaded successfully to be removed for id: ' + id);

			plyrs.forEach(function(player) {
				const id = player.id;
				player.remove((err) => {
					if (err) {
						console.log('Error while removing player: ' + id);
						response = {
							'success': false
						};
						
					} else {
						console.log('Player removed successfully: ' + id);
					}
				});
			});
			response = {
				'success': true
			};
			res.json(response);
		}
	});
};
