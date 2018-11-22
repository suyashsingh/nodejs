var http = require('http');

// Create a server object
http.createServer(function (req, res) {

    // write a response to the client
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // End the response
    res.end('Hello World! ~ http module');
}).listen(8080);
// The port to which the server object is listening is 8080


/*
    So when someone tries to access the computer on port 8080 the function passed to 
    the createServer method will be executed.
*/