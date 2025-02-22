const os = require('os');

const myOs = os.platform();
const myOs2 = os.arch();

console.log(myOs);
console.log(myOs2);
console.log(os.cpus()[1].speed);
console.log(os.freemem());
