const dbConnection = require('./database/db_connection.js');
const sqlString = require('sqlstring');

const getTodos = (req, reply) => {
  dbConnection.query('SELECT * from todos ORDER BY id ASC;', (err, res) => {
    if (err) {
      reply(`something went wrong:
        ${err}`);
    } else {
      console.log(res.rows);
      reply({ rows: res.rows });
    }
  });
};

const addTodo = (req, reply) => {
  const payload = JSON.parse(req.payload);
  const todo = payload.todo.replace(/'/g, `\'`);
  const query = `INSERT INTO todos (name, checked) VALUES ($1, $2) RETURNING id, name, checked;`;
  console.log('todo----', todo);
  console.log('query----', query);

  dbConnection.query(query, [todo, false], (err, res) => {
    if (err) {
      console.log(err);
      reply(`something went wrong:
        ${err}`);
    } else {
      const row = res.rows[0];
      reply({
        id: row.id,
        name: row.name,
        isComplete: row.checked
      });
    }
  });
};

const toggleChecked = (req, reply) => {
  const { todo: { isComplete, id } } = JSON.parse(req.payload);
  const complete = isComplete ? 'TRUE' : 'FALSE';
  dbConnection.query(
    `UPDATE todos SET checked = $1 WHERE id = $2;`,
    [complete, id],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        reply('okay!');
      }
    }
  );
};

const deleteTodo = (req, reply) => {
  const { id } = JSON.parse(req.payload);
  dbConnection.query(`DELETE from todos WHERE id = $1`, [id], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      reply('okay!');
    }
  });
};

module.exports = {
  getTodos,
  addTodo,
  toggleChecked,
  deleteTodo
};
