const fs = require('fs');
const fsPromise = require('fs/promises');

// * Asynchronoud Non-blocking :

// fs.readFile('./FileModule/data.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err.message);
//     return;
//   }
//   console.log(data);
// });

//------------------------------------

//* Synchronous blocking :

// try {
//   const data = fs.readFileSync('./FileModule/data.txt', 'utf-8');
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

//* Using Promises (Async/Await)

// async function readFile() {
//   try {
//     const data = await fsPromise.readFile('./FileModule/data.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// readFile();

// Asynchronous :
// const str = 'Hasibul Hasan Khan';

// fs.writeFile('./FileModule/output.txt', str, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File written successfully!');
// });

// * Append data to a file :

// fs.appendFile('./FileModule/output.txt', '/n Appending the text', (err) => {
//   if (err) {
//     throw new Error('There was an error');
//   }
//   console.log('Text appended.');
// });

//* Deleting a File :

// Asynchronou :

fs.unlink('./FileModule/output.txt', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('File deleted.');
});
