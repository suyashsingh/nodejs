/*
    Opens a file for reading, writing etc as decided by the flag
    that is specified by the second argument.
*/

var fs = require('fs');

//create an empty file named mynewfile2.txt if it is not present
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
