export const playerProfiles = [
	{'id':'p1', 'fname': 'Thisal', 'lname': 'Wijekoon', 'age':'10', 'handed':'right-handed', 'height':'150cm', 'weight':'28kg', 'club':'grasshoppers' },
	{'id':'p2', 'fname': 'Hiruki', 'lname': 'Wijekoon', 'age':'7', 'handed':'right-handed', 'height':'120cm', 'weight':'22kg', 'club':'grasshoppers' },
	{'id':'p3', 'fname': 'Ryan', 'lname': 'Premarathna', 'age':'13', 'handed':'right-handed', 'height':'180cm', 'weight':'45kg', 'club':'point vook cricket club' },
	{'id':'p4', 'fname': 'Enuri', 'lname': 'Weerarathna', 'age':'11', 'handed':'left-handed', 'height':'165cm', 'weight':'40kg', 'club':'grasshoppers' },
];

export const playerProfileFindById = id => {
	let playerProfile = playerProfiles.find( pp => pp.id === id );
	let response = {
		'success' : playerProfile && !!playerProfile.id,
		'data': {
			'playerProfile': playerProfile
		}
	};
	return response;
};