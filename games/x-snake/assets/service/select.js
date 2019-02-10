const http = require('http');
const port = 3001;

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "snake_game_user",
	password: "jBeezZ44kyYC4UsC",
	database: "snake_game"
});

con.connect(function(err) {
	if (err) throw err;
	con.query("SELECT * FROM user_scores ORDER BY scores DESC, time ASC", function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});

const requestHandler = (request, response) => {
	console.log(request.url);
	response.setHeader("Access-Control-Allow-Origin", "http://localhost");
	response.setHeader('Content-Type', 'application/json');
	response.end('result');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err);
	};
	console.log(`server is listening on ${port}`);
});