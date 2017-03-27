let mongoose = require('mongoose');

// Member
export const MemberSchema = mongoose.Schema({
	id: Number,
	name: String,
	photo: String,
	season: [String]
});

// Player
export const PlayerSchema = mongoose.Schema({
	id: Number,
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

export const TestSchema = mongoose.Schema({
	id: Number,
	name: String	
});