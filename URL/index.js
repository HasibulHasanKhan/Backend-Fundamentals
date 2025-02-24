const url = require('url');
// import { URL } from 'url';

const myUrl = new URL('https://example.com?name=John&age=30');

let a = myUrl.searchParams.get('name');
let b = myUrl.searchParams.has('age');
let c = myUrl.searchParams.getAll('name');

//  adding and removing query parameters :
myUrl.searchParams.append('city', 'New york');
myUrl.searchParams.set('age', '22');
myUrl.searchParams.delete('name');

console.log(myUrl.searchParams.toString());
