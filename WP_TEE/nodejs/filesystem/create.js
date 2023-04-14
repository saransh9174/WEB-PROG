var fs = require('fs');

fs.appendFile('cfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
//fs.WriteFile for creating a new file while replacing existing content,same syntax