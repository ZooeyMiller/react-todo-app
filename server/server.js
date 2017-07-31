const hapi = require('hapi');

const router = require('./router.js');

const server = new hapi.Server();

server.connection({ port: 5000, host: 'localhost' });

server.route(router);

server.start(err => {
  if (err) throw err;
  console.log(`Server running at: ${server.info.uri}`);
});
