const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
	id: String,
	title: String
});

mongoose.model('games', gameSchema);

// review this video - .save()
// https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/t/lecture/7603034?start=0