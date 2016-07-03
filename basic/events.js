'use strict';

let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('newListener', (eName, eHandler) => {
	console.log(`Event ${eName} ${eHandler} registered`);
})

eventEmitter.on('connection', (first, second, third) => {
	console.log(`Connection successful with arguments ${first}, ${second} and ${third}`);

	// Fire another event.
	eventEmitter.emit("dataReceived");
});

eventEmitter.on('dataReceived', () => {
	console.log("Data received successfully");
});


eventEmitter.emit('connection', 1, 2, 3);


console.log("Program Ended");