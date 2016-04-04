var mongoose = require('mongoose');

var wifiSpotSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    long: Number,
    wifiName: String,
    wifiPass: String,
    likes: Number,
    unlikes: Number
});

module.exports = mongoose.model('WifiSpot', wifiSpotSchema);