let mongoose = require('mongoose');

// Player
export const PlayerSchema = mongoose.Schema({
	name: String,
	birthday: String,
	height: String,
	weight: String,
	description: String,
	battingStyle: String,
	bowlingStyle: String,
	team: String,
	division: String,
	season: String,
	match: String,
	runs: Number,
	runsConceded: Number,
	oversBowled: Number,
	wickets: Number,
	catches: Number,
	contribution: Number,
	outs: Number
});