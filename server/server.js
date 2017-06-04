// const http = require('http');
// const router = require('./router.js');
//
// const port = 5000;
//
// const server = http.createServer(router);
//
// server.listen(port);
//
// console.log(`server listening on ${port}`);

const hapi = require('hapi');

const router = require('./router.js');

const server = new hapi.Server();

server.connection({ port: 5000, host: 'localhost' });

server.route(router);

server.start(err => {
  if (err) throw err;
  console.log(`Server running at: ${server.info.uri}`);
});
