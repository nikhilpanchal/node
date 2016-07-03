'use strict';

let fs = require('fs');
var data = '';

let readStream = fs.createReadStream('randomtext.txt');
readStream.setEncoding('UTF8');
let writeStream = fs.createWriteStream('output.txt');

// Handle stream events.
readStream.on('data', (chunk) => {
	console.log(`Read in chunk ${chunk}`);
	data += chunk;
}).on('end', () => {
	console.log(`Data read in ${data}`);

	// Now lets write to another file.
	writeStream.write(data, 'UTF8');
	writeStream.end();
}).on('error', (error) => {
	console.error(`${error.stack}`);
});


// Handle the stream events.
writeStream.on('finish', () => {
	console.log("Write completed");
}).on('error', () => {
	console.error("Failed to write to file");
});


// Do the same as above but more succinctly
let writeStream2 = fs.createWriteStream('output2.txt');
readStream.pipe(writeStream2);

console.log("Program ended");
