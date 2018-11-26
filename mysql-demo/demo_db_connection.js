var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "tom",
  password: "cat@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
