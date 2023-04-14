var fs = require('fs');
//deletes the file
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('yeet!');
});

//use 
//"fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {"
//to rename the same file