var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  // or you could pass demofile2.txt
  // as you pass html file it will get formatted according to the html rules
  fs.readFile('demofile2.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The content of the file is");
    res.write(data);
    res.end();
  });
}).listen(8080);