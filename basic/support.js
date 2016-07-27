'use strict';

var str = "Reverse",
	newStr = [];

for(let i=str.length-1; i>=0; i--) {
	newStr.push(str[i]);
}

console.log(newStr.join(''))