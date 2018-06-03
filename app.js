const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/ping') {
    res.end('pong');
  } else {
    res.end('Hello Gurubaran kutty');
  }
});

module.exports = server;
