/**
 * Module dependencies.
 */

var express = require('express'); 
var routes = require('./routes');

var app = module.exports = express.createServer();
var io  = require('socket.io').listen(app);

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Server listening on port %d in %s mode", app.address().port, app.settings.env);
});


// Configuration

var config = require('./config.js')(app, express);


// Chat - SocketImpl

var socket = require('./socket-impl.js')(io);

// Routes

//app.get('/', routes.index);

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});
