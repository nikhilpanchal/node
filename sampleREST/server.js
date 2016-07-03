'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear = require('./models/bear');

// Mount the body parser functionality at the root of the app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the database server
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

// Set our listener port
var port = process.env.PORT || 8080;

// Routes for our API. 
// We will use a Router instance to seggregate major parts.
var router = express.Router();

// Middleware to log the request. Every request that comes to this router.
router.use(function (request, response, next) {
	// Log it baby !
	console.log("Incoming request...");
	next();
});

router.route("/bears")
	// Route to Create a bear.
	.post(function (request, response) {
		let bear = new Bear();
		bear.name = request.body.name;

		// Save the bear and check for errors.
		// bear.save(function (err) {
		// 	if (err) {
		// 		console.log("Something went awry " + err.stack);
		// 	} else {
		// 		response.send(`Bear ${bear.name} Created`);
		// 	}
		// })
		response.send(`Bear ${bear.name} created`);
	})
	.get(function (request, response) {
		Bear.find(function (err, bears) {
			if (err) {
				response.send(err);
			} else {
				response.json(bears);
			}
		});

		response.json({
			"name": "Nikhil"
		})
	});

router.route("/bears/:bear_id")
	.get(function (request, response) {
		let bearId = request.params.bear_id;

		// Bear.findById(bearId, function (err, bear) {
		// 	if (err) {
		// 		response.send(err);
		// 	} else {
		// 		response.json(bear);
		// 	}
		// });

		response.json({
			"id": bearId,
			"name": "Nikhil"
		});
	})
	.put(function (request, response) {
		let bearName = request.body.name;

		console.log({
			"id": bearName,
			"name": bearName
		});

		response.send(`Bear ${bearName} updated...`);
	})
	.delete(function (request, response) {
		let bearId = request.params.bear_id;

		response.send(`Bear ${bearId} deleted...`);
	})

// We will add specific routes to the router here.
router.get('/', function (request, response, next) {
	response.json({
		message: "Hurrah !! Welcome to Express !!"
	});
});


// Mount the router to /api
app.use('/api', router);

// Listen to the port.
var server = app.listen(port, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log(`Listening on ${host}${port}`);
});