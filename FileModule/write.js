const fs = require('fs');

fs.open(`${__dirname}/data.txt`, 'w', (err, fd) => {
  if (err) {
    return console.error('Error opening file:', err);
  }

  const data = 'Hello, Node.js!';

  fs.write(fd, data, (err, written, buffer) => {
    if (err) {
      return console.error('Error writing to file:', err);
    }

    console.log(`Successfully wrote ${written} bytes.`);
    fs.close(fd, () => console.log('File closed.'));
  });
});
