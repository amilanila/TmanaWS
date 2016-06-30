export const teams =  [
	{'id': 'tm1', 'name': 'team1', 'title': 'Team 1', 'divId': 'd1'},
	{'id': 'tm2', 'name': 'team2', 'title': 'Team 2', 'divId': 'd2'},
	{'id': 'tm3', 'name': 'team3', 'title': 'Team 3', 'divId': 'd1'},
	{'id': 'tm4', 'name': 'team4', 'title': 'Team 4', 'divId': 'd3'}
];

export const teamAll = () => {
	let response = {
	'success': true,
	    'data': {
		    'teams': teams 
	    }
	};
	return response;    
};

export const teamFindById = id => {
	let team = teams.find( team => team.id === id );
	let response = {
		'success' : team && !!team.id,
		'data': {
			'team': team
		}
	};
	return response;
};

export const teamFindByDivivion = divId => {
	let team = teams.find(team => team.divId === divId);
	console.log('team by divition = '+ team);
	let response = {
		'success': team && !!team.id,
		'data': {
			'team': team
		}
	};
	return response;
};

