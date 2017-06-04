const dbConnection = require('../database/db_connection.js');

const getTodos = (req, reply) => {
  dbConnection.query('SELECT * from todos;', (err, res) => {
    if (err) {
      reply(`something went wrong:
        ${err}`);
    } else {
      reply({ rows: res.rows });
    }
  });
};

const addTodo = (req, reply) => {
  const payload = JSON.parse(req.payload);
  const todo = JSON.parse(payload.todo);
  dbConnection.query(
    `INSERT INTO todos (name, checked) VALUES ('${todo}', FALSE) RETURNING id, name, checked;`,
    (err, res) => {
      if (err) {
        console.log(err);
        reply(`something went wrong:
        ${err}`);
      } else {
        const row = res.rows[0];
        reply({
          id: row.id,
          name: row.name,
          isComplete: row.checked,
        });
      }
    }
  );
};

module.exports = {
  getTodos,
  addTodo,
};
