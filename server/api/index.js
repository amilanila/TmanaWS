import { Router } from 'express';
import player from './player';
import { playerCreate, playerAll, playerById, playerByName, playerDeleteById } from '../models/player';
import { memberCreate, memberAll, memberById, memberByName, memberDeleteById } from '../models/member';


export default function() {

	var api = Router();
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});	

	// ------------------------- Member -------------------------- //
	// Create member
	api.post('/member/create', (req, res) => {
		memberCreate(req, res);
	});

	// Load all members
	api.get('/member', (req, res) => {
		memberAll(req, res);
	});

	// Load member by id
	api.get('/member/:id', (req, res) => {
		memberById(req, res);
	});
	
	// Load member by name
	api.get('/member/:name', (req, res) => {
		memberByName(req, res);
	});

	// Delete member by name
	api.get('/member/delete/:id', (req, res) => {
		memberDeleteById(req, res);
	});

	// ------------------------- Player --------------------------- //
	// Create player
	api.post('/player/create', (req, res) => {
		playerCreate(req, res);
	});

	// Load all players
	api.get('/player', (req, res) => {
		playerAll(req, res);
	});

	// Load player by id
	api.get('/player/:id', (req, res) => {
		playerById(req, res);
	});
	
	// Load player by name
	api.get('/player/:name', (req, res) => {
		playerByName(req, res);
	});

	// Delte player by id
	api.get('/player/delete/:id', (req, res) => {
		playerDeleteById(req, res);
	});
	return api;
}
