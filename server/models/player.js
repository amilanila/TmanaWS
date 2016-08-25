export const players =  [
	{'id': 'p1', 'fname': 'Thisal', 'lname': 'Wijekoon', 'category': 'J'},
	{'id': 'p2', 'fname': 'Hiruki', 'lname': 'Wijekoon', 'category': 'J'},
	{'id': 'p3', 'fname': 'Ryan', 'lname': 'Premarathna', 'category': 'J'},
	{'id': 'p4', 'fname': 'Enuri', 'lname': 'Weerarathna', 'category': 'J'},
	{'id': 'p5', 'fname': 'Amila', 'lname': 'Nilantha', 'category': 'S'},
	{'id': 'p6', 'fname': 'Nishantha', 'lname': 'Premarathna', 'category': 'S'},
	{'id': 'p7', 'fname': 'Ranjith', 'lname': 'Wanasinghe', 'category': 'S'}
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

