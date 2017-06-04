const http = require('http');
const router = require('./router.js');

const port = 5000;

const server = http.createServer(router);

server.listen(port);

console.log(`server listening on ${port}`);
