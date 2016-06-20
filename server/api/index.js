import { Router } from 'express';
import division from './division';

export default function() {
	var api = Router();

	// mount the division resource
	api.use('/division', division);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	return api;
}
