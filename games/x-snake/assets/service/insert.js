const http = require('http');
const port = 3000;

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "snake_game_user",
	password: "jBeezZ44kyYC4UsC",
	database: "snake_game"
});

con.connect(function(err) {
	if (err) throw err;
	var records = [
		[400, 220]
	];
	con.query("INSERT INTO user_scores (scores,time) VALUES ?", [records], function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		console.log("Number of rows affected : " + result.affectedRows);
		console.log("Number of records affected with warning : " + result.warningCount);
		console.log("Message from MySQL Server : " + result.message);
	});
});

const requestHandler = (request, response) => {
	console.log(request.url);
	response.setHeader("Access-Control-Allow-Origin", "http://localhost");
	response.setHeader('Content-Type', 'application/json');
	response.end('{"text":"Insert Data Into Database"}');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err);
	};
	console.log(`server is listening on ${port}`);
});