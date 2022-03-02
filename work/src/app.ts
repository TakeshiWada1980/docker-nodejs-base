import http from 'http';

const port = 3000;
const server = http.createServer((req, res) => {
  res.end('Hello World2...')
}).listen(port);

console.log(`Server running on port ${port}`);
console.log(` >> http://localhost:${port} <<`);