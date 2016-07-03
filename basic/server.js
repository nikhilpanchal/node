'use strict';

let http = require('http');
let fs = require('fs');
let url = require('url');

// Create a server
http.createServer (function (request, response) {
	let path = url.parse(request.url).pathname;

	console.log(`Request from ${path} received`);

	fs.readFile(path.substr(1), function (err, data) {
		if (err) {
			console.log(`Error reading file ${err}`);
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data.toString());
		}

		// Send the response body.
		response.end();
	})
}).listen(8080);

console.log("HTTP Server running on localhost:8080...");