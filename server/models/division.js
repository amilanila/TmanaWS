export const divisions = [
	{
		id: 'd1', 
		name: 'div1', 
		title: 'Division 1',
		teams: [
			{
				id: 'tm1',
				name: 'team1',
				title: 'Team 1',
				players: [
					{
						id: 'p1',
						fname: 'Amila',
						lname: 'Nilantha',
						rank: 1
					},
					{
						id: 'p2',
						fname: 'Nishantha',
						lname: 'Premarathna',
						rank: 2
					},	
					{
						id: 'p3',
						fname: 'Ranjith',
						lname: 'Wanasinghe',
						rank: 3
					}	
	
				]				
			},
			{
				id: 'tm2',
				name: 'team2',
				title: 'Team 2',
				players: [
					{
						id: 'p1',
						fname: 'Amila',
						lname: 'Nilantha',
						rank: 1
					},
					{
						id: 'p5',
						fname: 'Menaka',
						lname: 'Jayaweera',
						rank: 2
					},	
					{
						id: 'p6',
						fname: 'Lasanntha',
						lname: 'Weerarathna',
						rank: 3
					}	
				]				
			}			
		]
	},
	{
		id: 'd2', 
		name: 'div2', 
		title: 'Division 2',
		teams: [
			{
				id: 'tm3',
				name: 'team3',
				title: 'Team 3',
				players: [
					{
						id: 'p1',
						fname: 'Amila',
						lname: 'Nilantha',
						rank: 1
					},
					{
						id: 'p2',
						fname: 'Nishantha',
						lname: 'Premarathna',
						rank: 2
					},	
					{
						id: 'p3',
						fname: 'Ranjith',
						lname: 'Wanasinghe',
						rank: 3
					}	
	
				]				
			},
			{
				id: 'tm4',
				name: 'team4',
				title: 'Team 4',
				players: [
					{
						id: 'p1',
						fname: 'Amila',
						lname: 'Nilantha',
						rank: 1
					},
					{
						id: 'p5',
						fname: 'Menaka',
						lname: 'Jayaweera',
						rank: 2
					},	
					{
						id: 'p6',
						fname: 'Lasanntha',
						lname: 'Weerarathna',
						rank: 3
					}	
				]				
			}			
		]
	}	
];

export const all = () => {
	let response = {
	'success': true,
	    'data': {
		    'divisions': divisions 
	    }
	};
	return response;    
};

export const find = id => {
	var div = divisions.find( div => div.id === id );
	let response = {
		'success' : div && !!div.id,
		'data': {
			'division': div
		}
	};
	return response;
};
