'use strict';








	/**
	 *	JavaScript design patterns
	 */













	/**
	 *	`jQuery style`
	 */

	$('div').on('click', function(){
		// handle click
	});









	/**
	 *	Function declaration
	 */
	function sum(a, b) {
		return a+b;
	};

	/**
	 *	Function expression
	 */
	var sum = function(a, b) {
		return a+b;
	};















	/**
	 *	Anonymous functions
	 *	JavaScript is block scoped
	 */
	
	// IIFE (Immediately-invoked function expression)
	(function(){
		// private scope
	})();


	// Callback
	asynFunc('foo', 'bar', function(err, data){
		// work with `err` and `data`
	});


	// IIFE with args
	(function(w, d, undefined){
		// private scope
	})(window, document);











	/**
	 *	Why can't we do the following then?
	 */
	function() { /* body */ } (); // SyntaxError: Unexpected token )

	/**
	 *	The parser treated this as a
	 *		function declaration
	 */

	function() { /* body */ } ('foo'); // Valid but function is not executed

	/**
	 *	What the parser does
	 */
	function() { /* body */ } // function is not assigned
	('foo'); // String literal `foo` is expressed
	











	/**
	 *	We need to tell the parser we want
	 *		a function expression
	 */
	( /* expression */ ) 

	(function() { /* body */ } ()); // Valid
	(function() { /* body */ } )(); // Valid














	/**
	 *	Functions can be thrown around
	 *		all willy-nilly
	 */
	myAsyncFunc('foo', 'bar', function(err, data){
		// work with `err` and `data`
	});


	// equivalent
	var myCallback = function(err, data) {
		// work with `err` and `data`
	};

	myAsyncFunc('foo', 'bar', myCallback);

















	/**
	 *	How `myAsyncFunc` works
	 */
	var myAsyncFunc = function(val1, val2, callback) {

		db.find(va1, val2, function(err, data){
			if (err) return callback(true, 'There was an error!');

			data = transformData(data);
			return callback(false, data);
		});
	};

	







	/**
	 *	A little cleaner
	 *	CommonJS ftw
	 */
	var myAsyncFunc = function(val1, val2, callback) {

		if (!validate(val1)) {
			return callback(true, 'Invalid data');
		};

		db.find(va1, val2, callback);
	};










	/**
	 *	Days of old
	 *	`errorback` and `callback`
	 */
	var myAsyncFunc = function(val1, val2, errorback, callback) {

		if (!validate(val1)) {
			return callback(true, 'Invalid data');
		};

		db.find(val1, val2, function(err, data){
			if (err) return errorback(data.errorMessage);
			return callback(data);
		});
	}; 
