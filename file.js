const fs = require('fs');

// fs.writeFileSync('myfile.txt', 'Hasib');
// fs.appendFileSync('myfile.txt', ' Hasan');

// const data = fs.readFileSync('myfile.txt');
// console.log(data.toString());

fs.readFile('myfile.txt', (err, data) => {
  console.log(data.toString());
});
