var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "tom",
  password: "cat@123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
