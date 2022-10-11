'use strict';


const mongoose = require('mongoose');

const { Schema } = mongoose;

const flightSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
    departure: { type: Date, required: false },
    arrival: { type: Date, required: false },
    price: { type: Number, required: true },
    airline: { type: String, required: false },
    flightNumber: { type: Number, required: false },
    seats: { type: Number, required: false },
    flightClass: { type: String, required: false },
  status: { type: Boolean, required: false },
});

const flightModel = mongoose.model('flight', flightSchema);

module.exports = flightModel;