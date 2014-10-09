var stdio = require('stdio');

stdio.read(function(text){
	text = text.toLowerCase().split(/[^a-z']+/);
	var result = {};
	text.forEach(function (w) {result[w] = result.hasOwnProperty(w) ? result[w] + 1 : 1});
	delete result[""];
	var ordKeys = Object.keys(result).sort();
	var key;
	for (var i = 0, len = ordKeys.length; i < len; i +=1) {
	    key = ordKeys[i]
	    console.log(key + ' ' + result[key]);
	}
});