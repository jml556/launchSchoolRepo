const HTTP = require('http');
const PORT = 3000;
const URL = require('url').URL

function dieRoll(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  const myURL = new URL(path, 'https://localhost:3000')
  let params = myURL.searchParams
  const rolls = params.get('rolls')
  const sides = params.get('sides')


  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
   dieRoll(1, sides)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    for(let i = 0; i <= rolls; i++) {
      res.write(`${dieRoll(1, sides)}\n`);
    };
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});