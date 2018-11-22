// Parsing the url that is passed along with the client
// request.

var http = require('http');
// The req argument represents the request from the client.
// The req arguement is of the type http.IncomingMessage object.
// The req has a property url that will have the part of the url after
// the domain name. ie req.url

// Try running the code and opening localhost:8080/test
// you will see /test as the output shown to you in the browser
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);