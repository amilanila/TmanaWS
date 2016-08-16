import { Router } from 'express';
import division from './division';
import team from './team';
import { teamAll, teamFindById, teamFindByDivivion } from '../models/team';
import player from './player';
import { playerAll, playerFindById, playerFindByCategory } from '../models/player';

export default function() {
	var api = Router();

	// mount resources
	api.use('/division', division);

	// team routing
	api.get('/team', (req, res) => {
		res.json(teamAll());
	});

	api.get('/team/:id', (req, res) => {
		res.json(teamFindById(req.params.id));
	});

	api.get('/team/div/:divId', (req, res) => {
		res.json(teamFindByDivivion(req.params.divId));
	});
	
	// player routing
	api.get('/player', (req, res) => {
		res.json(playerAll());
	});

	api.get('/player/:id', (req, res) => {
		res.json(playerFindById(req.params.id));
	});

	api.get('/player/cat/:cat', (req, res) => {
		res.json(playerFindByCategory(req.params.cat));
	});

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});	

	return api;
}
