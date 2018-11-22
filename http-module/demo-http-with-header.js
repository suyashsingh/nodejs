var http = require('http');
http.createServer(function (req, res) {
    // Header should be included in the in the response as you want the text to be
    // displayed in html

    // 200 is the status code
    // the second arguement is the object contating the response headers
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World! ~ http server with response header');
    res.end();
}).listen(8080);