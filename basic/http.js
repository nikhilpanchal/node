
// Require the http module to bring it in
var http = require ("http");

http.createServer(function(request, response) {
	// Send the http header
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// Send the response body
	response.end("Hello World!");

}).listen(8080);

console.log("Server listening on port 8080");

