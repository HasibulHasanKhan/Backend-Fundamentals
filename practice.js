const fs = require('fs');
// const fsPromise = require('fs/promises');

fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(data);
});
