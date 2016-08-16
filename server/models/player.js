export const players =  [
	{'id': 'p1', 'fname': 'Thisal', 'lname': 'Wijekoon', 'category': 'J'},
	{'id': 'p1', 'fname': 'Hiruki', 'lname': 'Wijekoon', 'category': 'J'},
	{'id': 'p1', 'fname': 'Ryan', 'lname': 'Premarathna', 'category': 'J'},
	{'id': 'p1', 'fname': 'Enuri', 'lname': 'Weerarathna', 'category': 'J'}
];

export const playerAll = () => {
	let response = {
	'success': true,
	    'data': {
		    'players': players 
	    }
	};
	return response;    
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

