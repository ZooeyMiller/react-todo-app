const { getTodos } = require('./handlers.js');

module.exports = (request, response) => {
  const endpoint = request.url;
  response.setHeader('Access-Control-Allow-Origin', '*');
  if (endpoint === '/get-todos') {
    // use pg to get the todos
    getTodos(request, response);
  } else {
    response.writeHead(500);
    response.end("path doesn't exist");
  }
};
