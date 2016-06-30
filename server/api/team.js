import resource from 'resource-router-middleware';
import {all, find, findByDivivion} from '../models/team';

export default resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'team',

	load(req, id, callback) {
		console.log('url = ' + req.url);
		console.log('params = ' + JSON.stringify(req.params));
		let team = find(id);
		let	err = team ? null : 'Not found';
		callback(err, team);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(all());
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = team.length.toString(36);
		team.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ div }, res) {
		res.json(div);
	},

	/** PUT /:id - Update a given entity */
	update({ div, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				div[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ div }, res) {
		team.splice(team.indexOf(div), 1);
		res.sendStatus(204);
	}
});
