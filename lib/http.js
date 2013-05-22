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

	fs.readFile(__dirname+'/../docs/rfc2616.txt', 'utf-8', function(err, data){
		if (err) return res.write(JSON.stringify(err));
		
		res.writeHeader(200, {
			'Content-Type': 'text/plain',
		});

		/**
		 *	Pass the text file into the `res.write` method
		 */
		res.write(data);
		// end the request
		res.end();
	});
});

/**
 *	Bind the server to port `3000`
 */
server.listen(3000);
