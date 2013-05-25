'use strict';

var http = require('http'),
	fs = require('fs');

/**
 *	Read a fifo and return the value when its done
 *	@param {Function} cb
 */
var readFifo = function(cb) {
	var fifo = fs.createReadStream(__dirname+'/../fifo');
	return cb(fifo);
};

/**
 *	Create our web server
 */
var server = http.createServer();

server.on('request', function(req, res){

	readFifo(function(fifo){
		res.writeHead(200);
		fifo.pipe(res);
	});

});

server.listen(3000);
