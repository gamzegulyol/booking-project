var mongoose = require('mongoose');

module.exports = new mongoose.model('Hotel', mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    district: String,
    description: String,
    imageUrl: String,
    price: Number
  }));
