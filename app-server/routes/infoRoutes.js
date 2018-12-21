// const Path = require('path-parser');
// const { URL } = require('url');
const mongoose = require('mongoose');

const Game = mongoose.model('games'); 

module.exports = app => {

	// Display ALL data
	app.get('/api/games', async (req, res) => {

		const games = await Game.find({});

		res.send(games);
	});


	// Saving data
	app.post('/api/games', async (req, res) => {

		// console.log("saving", req );
		
		const { title } = req.body;

		const game = new Game({ title });

		try {
			await game.save();

		} catch (err) {

			res.status(422).send(err);

		}
	});


	// Display single data
	app.get('/api/games/:_id', async (req, res) => {

		const gameID = await Game.findById({ _id: new mongoose.Types.ObjectId(req.params._id) }, (err, info) => {
			res.json({ info });
		});
	});


	// Deleting data
	app.delete('/api/games/:_id', async (req, res) => {

		const gameID = await Game.deleteOne({ _id: new mongoose.Types.ObjectId(req.params._id) }, (err, info) => {
			res.json({ info });
		});
	});


	// Updating data
	app.put('/api/games/:_id', async (req, res) => {

		const { title } = req.body.data; // .data is from /actions updateInfo

		console.log("SERVER REQUEST:", req.body.data);
		// console.log("SERVER RESPONSE:", res );
		// console.log("title:", title );

		const gameData = await Game.findOneAndUpdate(
		    { 
		    	_id: new mongoose.Types.ObjectId(req.params._id)
		    }, 
			{ $set: { title } }, 
			{ upsert: true }, 
			(err, info) => {
				res.send({ info });
			}
		);

		// console.log(".PUT API:", gameData );

		// res.send('Updated!');

	});


	// app.use((req, res) => {
	// 	res.status(404).json({
	// 	  errors: {
	// 	    global: "Still working on it. Please try again later when we implement it"
	// 	  }
	// 	});
	// });

};

