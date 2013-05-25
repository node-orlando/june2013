'use strict';

var fs = require('fs'),
	fifo;

/**
 *	Create a read stream on the socket fifo
 *	The fifo will emit an on('data') event when data is written to it
 *	Node knows that the fifo is a fifo and will block until it is written to
 */
var readFifo = function() {
	fifo = fs.createReadStream(__dirname+'/../fifo');

	fifo.on('data', function(d){
		// print the data
		console.log(d.toString());
		readFifo();
	});
};

readFifo();

setInterval(function(){
	console.log('foo bar');
}, 1000);
