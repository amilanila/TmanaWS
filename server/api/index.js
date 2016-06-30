import { Router } from 'express';
import division from './division';
// import team from './team';
import { teamAll, teamFindById, teamFindByDivivion } from '../models/team';

export default function() {
	var api = Router();

	// mount resources
	api.use('/division', division);

	// team routing
	api.get('/team', (req, res) => {
		res.json(teamAll());
	});

	api.get('/team/:id', (req, res) => {
		res.json(teamFindById('tm1'));
	});

	api.get('/team/div/:divId', (req, res) => {
		res.json(teamFindByDivivion('d2'));
	});
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});	

	return api;
}
