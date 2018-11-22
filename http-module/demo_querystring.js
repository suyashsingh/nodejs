/*
    You can use the url module to split the url of the client
    request into more redable.
*/
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

// Pass the url as http://localhost:8080/?year=2017&month=Jul
// So what happens is the url module parses the url for you. Now what it does is 
// it puts all the keys and values in the q object.
// as in the url the keys you are passing is year month, values related to these two 
// get stored in the q object.
// If you wish you can change the url as localhost:8080/?a=1&b=2 but in this case you will have to
// change the text variable as
// var txt = q.a + " " + q.b;
// as they will be now having a & b properties instad of year and month.
