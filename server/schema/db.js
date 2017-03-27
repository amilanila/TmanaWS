import { DB_URL } from '../constant';

let mongoose = require('mongoose');

const connect = () => {
	mongoose.Promise = global.Promise;
	mongoose.connect(DB_URL);

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));

	console.log('Connected to database');
}

const disconnect = () => {
	mongoose.disconnect(function() {
		console.log('Disconnected from database');
	});
};

const reconnect = () => {
	mongoose.disconnect(function() {
		console.log('reconnect to database');
	});

	console.log('now I am in master');
};
export { connect, disconnect, mongoose };