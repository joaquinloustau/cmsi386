var change =  function (amount) {
	if (amount < 0) {
		throw "amount cannot be negative";
	}
	quarters = Math.floor(amount / 25);
	left_over = amount % 25;
	dimes = Math.floor(left_over / 10);
	left_over %= 10;
	nickels = Math.floor(left_over / 5);
	pennies = left_over % 5;
	return [quarters, dimes, nickels, pennies];
};

var stripQuotes = function (s) {
	return s.replace(/["']/g,"");
};


//http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

var scramble = function (s) {
    var a = s.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};

var powersOfTwo = function (limit, callback) {
	for (var x = 1; x <= limit; x = x*2) {
		callback(x);
	}
};

var prefixes = function (s, callback) {
	for (var i = 0; i <= s.length; i++) {
        var result = s.substring(0,i);
		callback(result);
	}
};

var interleave = function (x, y) {
    var max = Math.max(x.length, y.length), result = [];
    for (var i = 0; i < max; i ++) {
        if (i < x.length) result.push(x[i]);
        if (i < y.length) result.push(y[i]);
    }
    return result;
};

var stutter = function(x) {
	return interleave(x,x);
};