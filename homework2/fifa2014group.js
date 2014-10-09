var request = require ('request');
var sprintf = require ("sprintf-js").sprintf;


if (process.argv.length !== 3 || !/^[A-H]$/.test(process.argv[2])) {
	console.error('Need just one command line argument, A...H');
	process.exit(1);
}

var api = 'http://worldcup.kimonolabs.com/api/teams?group=' + process.argv[2] + '&sort=groupRank&apikey=MvtW5flSePbaulwoJCbeExYvIpvnQexL' ;

request(api, function (error, response, body) {
	if (!error && response.statusCode == 200) 
	console.log(sprintf("%-19s%3s%3s%3s", 'Name', 'W', 'D', 'L'));
	JSON.parse(body).forEach(function (team) {
		console.log(sprintf("%-19s%3d%3d%3d", team.name, team.wins, team.draws, team.losses));
	} )
})

//https://www.npmjs.org/package/request
