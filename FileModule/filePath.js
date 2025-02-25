const fs = require('fs');

fs.open(`${__dirname}/data.txt`, 'r', (err, fd) => {
  if (err) {
    return console.error('Error opening file:', err);
  }
  console.log('File opened successfully with descriptor:', fd);
  fs.close(fd, () => console.log('File closed.'));
});
//----------------------------------
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');
// const filePath = __dirname + '/data.txt'; //
fs.open(filePath, 'r', (err, fd) => {
  if (err) {
    return console.error('Error opening file:', err);
  }
  console.log('File opened successfully with descriptor:', fd);
  fs.close(fd, () => console.log('File closed.'));
});
