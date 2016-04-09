var mongoose = require('mongoose');

var wifiSpotSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lon: Number,
    wifiName: String,
    wifiPass: String,
    likes: Number,
    unlikes: Number
});

module.exports = mongoose.model('WifiSpot', wifiSpotSchema);