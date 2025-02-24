const { URL } = require('url');

const myUrl = new URL('https://example.com/path?name=John#section1');

console.log(myUrl.toString());
