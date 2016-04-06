var express = require('express');
var router = express.Router();
var wifiSpot = require('../models/wifiSpot')

router.route('/')

.post(function(req, res) {
    
    var wifi = new wifiSpot();
    
    wifi.name = req.body.name;
    wifi.lat = req.body.lat;
    wifi.long = req.body.long;
    wifi.wifiName = req.body.wifiName;
    wifi.wifiPass = req.body.wifiPass;
    wifi.likes = req.body.likes;
    wifi.unlikes = req.body.unlikes;
    
    wifi.save(function(err) {
        if(err)
            res.send(err);
        res.json({ message: 'wifiSpot saved'});
    });
})

.get(function(req, res) {
    
    wifiSpot.find(function(err, wifies){
        if(err)
            res.send(err);
        res.json(wifies);
    });    
});

module.exports = router;