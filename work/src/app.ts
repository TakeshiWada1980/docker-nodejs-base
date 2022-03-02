import express from 'express';
import ws from 'ws';
import fs from 'fs';

const port_http = 3000;
const port_ws = 3001;

const app = express();

const wss = new ws.Server({ port: port_ws });
wss.on('connection', ws => {
  ws.on('message', msg => {
    console.log(`received: ${msg}`);
    ws.send('something');
  });
  ws.send('something');
});

app.get('/', (req, res) => {
  fs.readFile("dist/index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.listen(port_http, () => {
  console.log(`Server running on port ${port_http}`);
  console.log(` >> http://localhost:${port_http} <<`);
});
