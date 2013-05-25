'use strict';

var http = require('http'),
	url = require('url');

/**
 *	Get a feed
 *	@param {String} feed
 *	@param {Function} callback
 */
exports.getFeed = function(feed, callback) {
	var location = url.parse(feed),
		data,
		request;

	request = http.request(location, function(response){
		response.on('data', function(d){
			data += d;
		});

		response.on('error', function(d){
			return callback(true, d);
		});

		response.on('end', function(){
			return callback(false, data);
		});
	});

	request.end();
};

exports.getFeed('http://feeds.feedburner.com/ThisDevelopersLife', function(err, feed){
	console.log(feed);
});

