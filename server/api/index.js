import { Router } from 'express';
import division from './division';
import team from './team';

export default function() {
	var api = Router();

	// mount resources
	api.use('/division', division);
	api.use('/team', team);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});	

	return api;
}
