'use strict';

let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', function (request, response) {
	response.send("Hello, World !");
});

let post = app.post('/', function (request, response) {
	response.send("Hello, Post !");
}).get('/list_users', function (request, response) {
	response.send("Listing users");
}).get('/print_*', function (request, response) {
	response.send("Page Pattern match");
}).get('/process_get', function (request, response) {
	let responseObj = {
		first_name: request.query.first_name,
		last_name: request.query.last_name
	};

	response.send(responseObj);
}).get('/index.htm*', function (request, response) {
	response.sendFile(__dirname + request.path);
}).post('/process_post', function (request, response) {
	let responseObj = {
		first_name: request.body.first_name,
		last_name: request.body.last_name
	};

	response.send(responseObj);
});

let server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log(`Listening on ${host}:${port}`);
});