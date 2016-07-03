'use strict';

let http = require('http');

let options = {
	host: 'localhost',
	port: '8080',
	path: '/index.html'
};

let request = http.request(options, function (response) {
	var body = '';
	response.on('data', function(data) {
		body += data;
	});

	response.on('end', function() {
		// All data received.
		console.log(`Data received\n ${body}`);
	});
});

request.end();