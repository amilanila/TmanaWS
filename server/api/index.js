import { Router } from 'express';
import division from './division';
// import team from './team';
import { all, find, findByDivivion } from '../models/team';

export default function() {
	var api = Router();

	// mount resources
	api.use('/division', division);

	// team routing
	api.get('/team', (req, res) => {
		res.json(all());
	});

	api.get('/team/div/:divId', (req, res) => {
		res.json(findByDivivion('d2'));
	});
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});	

	return api;
}
