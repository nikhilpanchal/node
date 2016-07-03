'use strict';

const child_process = require("child_process");

for (let i=0; i<3; i++) {
	var workprocess = child_process.exec(`/usr/local/bin/node support.js ${i} `, function (error, stdout, stderr) {
		if (error) {
			console.log(error.stack);
		}

		console.log("Stdout: " + stdout);
		console.log("Stderr: " + stderr);
	});

	workprocess.on('exit', (code) => {
		console.log("Child process exited with code " + code);
	});
}

for (let i=0; i<3; i++) {
	workprocess = child_process.fork("support.js", [i]);

	workprocess.on("close", (code) => {
		console.log("Forked child process exited with code " + code);
	});
}