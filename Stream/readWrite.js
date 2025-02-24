const fs = require('fs');

const readable = fs.createReadStream('./Stream/hasib.txt');
const writable = fs.createWriteStream('./Stream/output.txt');

readable.on('data', (chunk) => {
  writable.write(chunk);
});

readable.on('end', () => {
  writable.end();
  console.log('File copied succesfully!');
});

readable.on('error', (err) => {
  console.log('Read Error:', err);
});

readable.on('error', (err) => console.error('Read Error:', err));
writable.on('error', (err) => console.error('Write Error:', err));
