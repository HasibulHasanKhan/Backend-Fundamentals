const require = fs.createReadStream('largeFile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File reading complete.');
});

//-------------------------------
writeSream.write('This is a stream example. \n');

writeStream.end('Final line');

//------------------------------------------
fs.copyFile('hasib.txt', 'copy.txt', (err) => {
  if (err) throw err;
  console.log('File copied!');
});

//--------------------------------------
fs.unlink('output.txt', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('File deleted.');
});

//----------------------------------
try {
  fs.unlinkSync('output.txt');
  console.log('File deleted.');
} catch (err) {
  console.log(err);
}
