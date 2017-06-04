const dbConnection = require('../database/db_connection.js');

const getTodos = (request, response) => {
  dbConnection.query('SELECT * from todos;', (err, res) => {
    if (err) {
      response.writeHead(500);
      response.end(`something went wrong:
        ${err}`);
    } else {
      response.writeHead(200, 'Content-Type: application/json');
      response.end(JSON.stringify({ rows: res.rows }));
    }
  });
};

module.exports = {
  getTodos,
};
