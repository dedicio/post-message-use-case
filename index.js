const http = require('http');
const fs = require('fs');

const PORT = 8080;

http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
}).listen(PORT);