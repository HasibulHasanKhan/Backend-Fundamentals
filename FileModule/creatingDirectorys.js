// Step 1: Import fs module
const fs = require('fs');

// Step 2: Create a directory named "Emon"
// fs.mkdir('Emon', { recursive: true }, (err) => {
//   if (err) throw err;
//   console.log('Directory created!');
// });

fs.watch('./FileModule/data.txt', (eventType, filename) => {
  console.log(`File ${filename} changed: ${eventType}`);
});
