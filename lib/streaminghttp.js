'use strict';

var http = require('http'),
	fs = require('fs');

/**
 *	Create a new webserver
 */
var server = http.createServer();

/**
 *	Listen for the `request` event from the server
 *	@param {Stream} req
 *	@param {Stream} res
 */
server.on('request', function(req, res) {
	console.log(req.url);

	/**
	 *	`fs.createReadStream` returns an instance of `stream`
	 */
	var stream = fs.createReadStream(__dirname+'/../docs/rfc2616.txt');

	res.writeHead(200, {
		'Content-Type': 'text/plain',
	});

	/**
	 *	Pass `res` to the `stream.pipe` method
	 *	`stream.pipe` will handle the on('data') and on('end') events for you
	 */
	stream.pipe(res);
});

/**
 *	Bind the server to port `3000`
 */
server.listen(3000);


















/**
 *	pause the stream for 2 seconds
 *	@param {Stream} stream
 */
var pauseStream = function(stream) {
	setTimeout(function(){

		stream.pause();

		setTimeout(function(){
			stream.resume();	
		}, 2000);
	}, 2);
};

