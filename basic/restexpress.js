'use strict';

let express = require('express');
let app = express();

let fs = require('fs');
let filePath = __dirname + "/public/data/users.json";

let promise = new Promise((resolve, reject) => {
	fs.readFile(filePath, function (err, data) {
		data = JSON.parse(data);

		resolve(data);
	});
});

app.get('/listUsers', function (request, response) {
	response.sendFile(filePath);
}).get('/addUser', function (request, response) {
	fs.readFile(filePath, function (err, data) {
		data = JSON.parse(data);

		data["user4"] = {
			"user4": {
				"name": "Tom",
				"password": "passw0rd",
				"profession": "Teacher",
				"id": 4
			}
		};

		response.send(data);
		response.end();
	})
}).get('/getUserDetail/:id', function (request, response) {
	promise.then((data) => {
		let user = data["user"+request.params.id];
		response.send(user);
		response.end();
	});
}).get('/deleteUser/:id', function (request, response) {
	promise.then((data) => {
		delete data["user" + request.params.id];

		response.send(data);
	});
});

let server = app.listen(8080, function() {
	let host = server.address().address;
	let port = server.address().port;

	console.log(`Listening on ${host}:${port}`);
});