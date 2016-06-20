import resource from 'resource-router-middleware';
import division from '../models/division';

export default resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'division',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		var div = division.find( div => div.id===id ),
			err = div ? null : 'Not found';
		callback(err, div);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(division);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = division.length.toString(36);
		division.push(body);
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
		division.splice(division.indexOf(div), 1);
		res.sendStatus(204);
	}
});
