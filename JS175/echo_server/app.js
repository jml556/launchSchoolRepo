const HTTP = require('http')
const PORT = 5000

const SERVER = HTTP.createServer((req, res) => {
  const {method, url} = req;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain')
  res.write(`${method}, ${url}\n`);
  res.end()
})

SERVER.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
