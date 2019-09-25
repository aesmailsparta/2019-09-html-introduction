var http = require("http");

console.log("about to build a web server");

var counter = 0;

http.createServer(function(request, response){

	counter++;
	console.log(counter + " request(s) have come in");
	setInterval(pushToScreen, 1000);
	response.writeHead(200, {
		'COntent-Type':'text/plain'
	})
	response.end('Text to screen');

}).listen(8080, '127.0.0.1');

function pushToScreen(){
	
}