var stdio = require('stdio');
var S = require('string');
numLines = 0;

stdio.readByLines(function lineHandler(line) {
    if (!(S(line).isEmpty() || S(line).startsWith("//"))) {
    	numLines += 1;
    }
}, function (end) {
	console.log(numLines);
})
