var express = require('express');
var router = express.Router();
var wifiSpot = require('../models/wifiSpot')
var mongodb = require('mongodb')

router.route('/')

.post(function (req, res) {

    var wifi = new wifiSpot();

    wifi.name = req.body.locationName;
    wifi.latitude = req.body.lat;
    wifi.longitude = req.body.lon;
    wifi.wifiName = req.body.wifiName;
    wifi.wifiPass = req.body.pass;
    wifi.likes = 0;
    wifi.unlikes = 0;

    wifi.save(function (err) {
        if (err)
            res.send(err);
        res.json({
            message: 'wifiSpot saved'
        });
    });
})

.get(function (req, res) {

    wifiSpot.find(function (err, wifies) {
        if (err)
            res.send(err);
        res.json(wifies);
    });
});

router.route('/:wifiId')

.delete(function(req, res) {
    wifiSpot.remove({
        _id: req.params.wifiId
    }, function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

router.route('/like/:wifiId')

.post(function (req, res) {

    wifiSpot.findOne({
        _id: new mongodb.ObjectID(req.params.wifiId)
    }, function (err, wifiSpot) {

        if (err)
            res.send(err);

        wifiSpot.likes++;
        wifiSpot.save(function (err) {
            if (err)
                res.send(err);
            res.json({
                message: 'wifiSpot like plus one'
            });
        });
    });
})

router.route('/unlike/:wifiId')

.post(function (req, res) {

    wifiSpot.findOne({
        _id: new mongodb.ObjectID(req.params.wifiId)
    }, function (err, wifiSpot) {

        if (err)
            res.send(err);

        wifiSpot.unlikes++;
        wifiSpot.save(function (err) {
            if (err)
                res.send(err);
            res.json({
                message: 'wifiSpot unlike plus one'
            });
        });
    });
})

router.route('/findInRange')

.get(function (req, res) {

    wifiSpot
    .find(function (err, wifies) {
        if (err)
            res.send(err);
        res.json(wifies);
    })
    .where('latitude').gt(req.body.lat - 50).lt(req.body.lat + 50)
    .where('longitude').gt(req.body.lon - 50).lt(req.body.lon + 50)
    .exec(callback);
});






module.exports = router;