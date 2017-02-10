let mongoose = require('mongoose');

// Player
export const PlayerSchema = mongoose.Schema({
	id: String,
	firstName: String,
	lastName: String,
	category: String
});