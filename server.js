'use strict';
// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));
db.once('open', function () {
  console.log('Mongoose is connected to mongoose');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


// modules
const getWeather = require('./modules/weather.js');
const flight = require('./modules/flight.js');


// Endpoints
app.get('/weather', getWeather);


