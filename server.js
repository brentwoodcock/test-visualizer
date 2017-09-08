'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

var port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
	res.json({ message: 'API Initialized!' });
	console.log('api initialized');
});

app.use('/api', router);

app.listen(port, function() {
	console.log('API running on port ${port}')
});