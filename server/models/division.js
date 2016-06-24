// our example model is just an Array
// let response = {
// 	'success': true,
// 	'data' : { 
// 		'divisions' : [
// 			{'id': 'd1', 'name': 'div1', 'title': 'Division 1'},
// 			{'id': 'd2', 'name': 'div2', 'title': 'Division 2'},
// 			{'id': 'd3', 'name': 'div3', 'title': 'Division 3'},
// 			{'id': 'd4', 'name': 'div4', 'title': 'Division 4'}
// 		]
// 	}
// };

export const divisions = [
	{'id': 'd1', 'name': 'div1', 'title': 'Division 1'},
	{'id': 'd2', 'name': 'div2', 'title': 'Division 2'},
	{'id': 'd3', 'name': 'div3', 'title': 'Division 3'},
	{'id': 'd4', 'name': 'div4', 'title': 'Division 4'}
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
	let response = {
		'success' : true,
		'data': {
			'divisions': divisions
		}
	};
	return response;
};
