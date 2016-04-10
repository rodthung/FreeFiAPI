var mongoose = require('mongoose');

var wifiSpotSchema = new mongoose.Schema({
    name: String,
    coords: {
    	latitude: Number,
    	longitude: Number
    },
    wifiName: String,
    wifiPass: String,
    likes: Number,
    unlikes: Number
});

module.exports = mongoose.model('WifiSpot', wifiSpotSchema);