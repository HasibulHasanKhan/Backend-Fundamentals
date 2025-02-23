const fs = require('fs');

// Reading a File as a stream : stream for large file.

// const readStream = fs.createReadStream('./FileModule/largedata.txt', 'utf8');

// readStream.on('data', (chunk) => {
//   console.log('Received chunk :', chunk);
// });

// readStream.on('end', () => {
//   console.log('File reading complete');

// writing a File as a Stream :

// const writeStream = fs.createWriteStream('./FileModule/datum.txt,', 'utf8');

// writeStream.write('This is a stream .\n');
// writeStream.end('Final line');

//------------------------------------

// fs.copyFile('./FileModule/example.txt', './FileModule/copy.txt', (err) => {
//   if (err) throw err;

//   console.log('File copied.');
// });

//-----------------------------
// fs.rename('oldName.txt', 'newName.txt', (err) => {
//   if (err) throw err;
//   console.log('File renamed!');
// });
