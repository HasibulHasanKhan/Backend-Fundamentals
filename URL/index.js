// const url = require('url');
const { URL } = require('url');

const myUrl = new URL(
  'https://user:pass@www.example.com:8080/path?name=John#section1'
);
// const myUrl2 = url.parse(
//   'https://user:pass@www.example.com:8080/path?name=John#section1'
// );

let a = myUrl.searchParams.get('name');
let b = myUrl.searchParams.has('age');
let c = myUrl.searchParams.getAll('name');

console.log(`${a} and ${b} and ${c}`);
//  adding and removing query parameters :
let x = myUrl.searchParams.append('city', 'New york');
let y = myUrl.searchParams.set('age', '22');
// let z = myUrl.searchParams.delete('name');
console.log(`${x} and ${y} `);

console.log(myUrl.searchParams.toString());

//----------------------------------------------
// console.log(myUrl.protocol); // https:
// console.log(myUrl.username); // user
// console.log(myUrl.password); // pass
// console.log(myUrl.hostname); // www.example.com
// console.log(myUrl.port); // 8080
// console.log(myUrl.pathname); // /path
// console.log(myUrl.search); // ?name=John
// console.log(myUrl.searchParams); // URLSearchParams { 'name' => 'John' }
// console.log(myUrl.hash); // #section1

// for (let [key, value] of myUrl.searchParams) {
//   console.log(`${key}: ${value}`);
// }

for (let [key, value] of myUrl.searchParams) {
  console.log(`${key} : ${value}`);
}
