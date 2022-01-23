const URL = require('url').URL;

const myURL = new URL('/some/path?color=red', "http://localhost:3000");
let params = myURL.searchParams;
console.log(params); // URLSearchParams { 'color' => 'red' }