import { connect, disconnect, mongoose } from '../schema/db';
import { MemberSchema } from '../schema/schema';

let memberInitialised = false;
let Member = null;

export const init = () => {
	connect();
	memberInit();
	memberInitialised = true;	
}

export const memberInit = () => {
	if (Member == null) {
		Member = mongoose.model('Member', MemberSchema);
	}
	console.log('Member model initialised');
}

export const memberCreate = (req, res) => {
	console.log('Saving member: ' + JSON.stringify(req.body));

	let response = {};
	if (!memberInitialised) {
		init();
	}

	const member = new Member (req.body);

	member.save((err) => {
		if (err) {
			console.log('Error while saving member: ' + err);
			response = {
				'success': false
			};
		} else {
			console.log('Member saved successfully');
			response = {
				'success': true
			};
		}
		res.json(response);
	});
}

export const memberAll = (req, res) => {
	let members = [];
	let response = {};

	if (!memberInitialised) {
		init();
	}

	Member.find({}).exec((err, mbrs) => {
		if (err) {
			console.log('Error loading members');

			response = {
				'success': false,
				'data': {
					'members': []
				}
			};
		} else {
			console.log('Members loaded successfully');

			mbrs.forEach(function(member) {
				members.push(member);
			});

			response = {
				'success': true,
				'data': {
					'members': members 
				}
			};	
		}
		
		res.json(response);
	});
};

export const memberByName = (req, res) => {
	let name = req.params.name;
	let response = {};

	if (!memberInitialised) {
		init();
	}

	Member.find({'name': name}).exec((err, member) => {
		if (err) {
			console.log('Error loading member with name: ' + name);

			response = {
				'success': false,
				'data': {
					'member': {}
				}
			};
		} else {
			console.log('Member loaded successfully for name: ' + name);

			response = {
				'success': true,
				'data': {
					'member': member
				}
			};	
		}
		
		res.json(response);
	});
};

export const memberById = (req, res) => {
	let id = req.params.id;
	let response = {};

	if (!memberInitialised) {
		init();
	}

	Member.find({'id': id}).exec((err, member) => {
		if (err) {
			console.log('Error loading member with id: ' + id);

			response = {
				'success': false,
				'data': {
					'member': {}
				}
			};
		} else {
			console.log('Member loaded successfully for id: ' + id);

			response = {
				'success': true,
				'data': {
					'member': member
				}
			};	
		}
		
		res.json(response);
	});
};

export const memberDeleteById = (req, res) => {
	let id = req.params.id;
	let response = {};

	if (!memberInitialised) {
		init();
	}


	Member.find({'id': id}).exec((err, mbrs) => {
		if (err) {
			console.log('Error loading members to be removed for id: ' + id);

			response = {
				'success': false
			};
		} else {
			console.log('Members loaded successfully to be removed for id: ' + id);

			mbrs.forEach(function(member) {
				const id = member.id;
				member.remove((err) => {
					if (err) {
						console.log('Error while removing member: ' + id);
						response = {
							'success': false
						};
						
					} else {
						console.log('Member removed successfully: ' + id);
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
