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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get('/', (req, res) => {
    res.status(200).send('Welcome!');
});


// modules
const getWeather = require('./modules/weather.js');
const flight = require('./modules/flight.js');
const axios = require('axios');

async function getFlights(req, res) {
    const axios = require('axios');
try {
    const departureDate = req.query.departureDate;
    const returnDate = req.query.returnDate;
    //  const originCoords = (req.query.lat, req.query.lon);
    //  const destinationCoords = (req.query.lat, req.query.lon);
    const origin = await getIATA(req.query.originlat, req.query.originlon);
    const destination = await getIATA(req.query.destinationlat, req.query.destinationlon);
    const flightResponse = await axios.get(`https://api.flightapi.io/roundtrip/${process.env.FLIGHT_API_KEY}/${origin}/${destination}/${departureDate}/${returnDate}/1/0/1/Economy/USD`);
    const data = flightResponse.data;
      const flights = data.trips;
      
      const legs = data.legs;
      const fares = data.fares;
      const results = flights.map(el => {
        const newTrip = ({
          id: el.id, 
          departure: legs.find(leg => leg.id === el.legIds[0]).departureDateTime, 
          arrival: legs.find(leg => leg.id === el.legIds[1]).arrivalDateTime, 
          price: fares.find(fare => fare.tripId === el.id).price.totalAmount
        });
        // console.log("🚀 ~ file: test.js ~ line 15 ~ nonstop ~ newTrip", newTrip);
        return newTrip;
      } );
    res.status(200).send(results);

} catch (error) {
    console.log(error.message, 'from getFlights');
}
}

// async function getLocation(city) {
//     const axios = require('axios');
//     try {
//         const response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.LOCATIONIQ_KEY}&q=${city}&format=json`);
//         const data = response.data[0];
//         return data;
//     } catch (error) {
//         console.log(error.message, 'from getLocation');
//     }
// }

async function getIATA(lat, lon) {
    try {
        const response = await axios.get(`https://aerodatabox.p.rapidapi.com/airports/search/location/${lat}/${lon}/km/250/10`, { headers: { 'X-RapidAPI-Key': d7df4632d9msh2637409866551b8p15f802jsn7cfad09a091c} } );
        const data = response.data.items[0].iata;
        return data;
    } catch (error) {
        console.log(error.message, 'from getIATA');
    }
}







// Endpoints
app.get('/weather', getWeather);
app.get('/flights', getFlights);


app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});


app.use((error, req, res) => {
    res.status(500).send(error.message);
});

