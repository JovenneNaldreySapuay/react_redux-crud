const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const bodyParser = require('body-parser');

// models
require('./models/Game');

const dbUrl = 'mongodb://localhost';

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, {useNewUrlParser: true});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json()); 

// routes
require('./routes/infoRoutes')(app); 

const PORT = process.env.PORT || 5000;
app.listen(PORT);
process.setMaxListeners(0);
