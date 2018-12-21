const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
	id: String,
	title: String
});

mongoose.model('games', gameSchema);

