import { Router } from 'express';
import player from './player';
import { playerCreate, playerAll, playerByName, playerDeleteByName } from '../models/player';


export default function() {

	var api = Router();
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});	

	// Create player
	api.post('/player/create', (req, res) => {
		playerCreate(req, res);
	});

	// Load all players
	api.get('/player', (req, res) => {
		playerAll(req, res);
	});

	// Load player by name
	api.get('/player/:name', (req, res) => {
		playerByName(req, res);
	});

	// Load player by name
	api.get('/player/delete/:name', (req, res) => {
		playerDeleteByName(req, res);
	});

	return api;
}
