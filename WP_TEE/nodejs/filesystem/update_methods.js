var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
})//update file 
//append file appends new content at end of existing one
//fs.WriteFile replaces the exisiting content