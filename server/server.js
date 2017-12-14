const hapi = require('hapi');

const router = require('./router.js');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 5000
});

server.register(require('inert'), err => {
  if (err) {
    throw err;
  } else {
    server.route(router);
  }
});

server.start(err => {
  if (err) throw err;
  console.log(`Server running at: ${server.info.uri}`);
});
