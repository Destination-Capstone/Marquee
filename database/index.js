const mongoose = require('mongoose');
// for linux mongod service
const mongoURI = 'mongodb://localhost/marquee_4';
// for local dockerized mongod when service IS NOT dockerized
//const mongoURI = 'mongodb://0.0.0.0:3027/marquee';
// for use with docker-copmpose
//const mongoURI = 'mongodb://database/marquee';

const db = mongoose.connect(mongoURI);

module.exports = db;