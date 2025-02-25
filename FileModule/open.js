//Syntax :

//fs.open(path, flags[, mode], callback)
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');
//const filePaht = __dirname + '/data.txt'
fs.open(filePath, 'r', (err, fd) => {
  if (err) {
    return console.error('Error opening file:', err);
  }

  console.log('File opened succesfully with descriptor:', fd);

  fs.close(fd, () => console.log('File closed.'));
});
