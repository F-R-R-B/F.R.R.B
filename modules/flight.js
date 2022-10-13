'use strict';


const mongoose = require('mongoose');

const { Schema } = mongoose;

const flightSchema = new Schema({
  user: { type: String, required: true },
  nickname: { type: String, required: false },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  price: { type: Number, required: true },
  departure: {
    date: { type: String, required: true },
    airline: { type: String, required: true },
    stops: { type: Number, required: true },
    overnight: { type: Boolean, required: true },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
  },
  return: {
    date: { type: String, required: true },
    airline: { type: String, required: true },
    stops: { type: Number, required: true },
    overnight: { type: Boolean, required: true },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
  }
});

const flightModel = mongoose.model('flight', flightSchema);

module.exports = flightModel;