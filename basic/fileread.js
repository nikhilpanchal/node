'use strict';

let fs = require("fs");

// var data = fs.readFileSync('randomtext.txt');

// console.log(data.toString());

var data = fs.readFile('randomtext.txt', function(err, data) {
	if(err) {
		console.error(`Failed to read file: ${err.stack}`);
		return;
	}

	console.log(data.toString());
});

console.log("Program Ended");