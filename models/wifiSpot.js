var mongoose = require('mongoose');

var wifiSpotSchema = new mongoose.Schema({
	id: String,
    name: String,
    latitude: Number,
    longitude: Number,
    wifiName: String,
    wifiPass: String,
    likes: Number,
    unlikes: Number
});

module.exports = mongoose.model('WifiSpot', wifiSpotSchema);