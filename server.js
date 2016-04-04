var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var config = require('./config');
var wifiSpot = require('./routes/wifiSpot');

var app = express();
var server = http.createServer(app);

var port = process.env.PORT || 4444;

// configuration
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan('dev'));
app.use(methodOverride());

// database connection
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('Connected to a database')
});

//Routes
app.all('/');
//app.use('/api/wifiSpot', wifiSpot);

server.listen(port);
console.log("ICBYG magic is happening on port " + port);
