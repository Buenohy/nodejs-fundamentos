import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('Helo World');
});

server.listen(3333);
