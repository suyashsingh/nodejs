var fs = require('fs');

// Create a newfile if it doesnot exsist else the content in the file 
// will be replaced
fs.writeFile('mynewfile3.txt', 'Hello content!1', function (err) {
  if (err) throw err;
  console.log('Saved!');
});