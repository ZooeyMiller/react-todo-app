const {
  getTodos,
  addTodo,
  toggleChecked,
  deleteTodo
} = require('./handlers.js');

const sendTodos = {
  method: 'GET',
  path: '/get-todos',
  handler: getTodos
};

const postTodo = {
  method: 'POST',
  path: '/add-todo',
  handler: addTodo
};

const toggleTodo = {
  method: 'POST',
  path: '/toggle-todo',
  handler: toggleChecked
};

const removeTodo = {
  method: 'POST',
  path: '/delete-todo',
  handler: deleteTodo
};

const servePublic = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: `${__dirname}/../build`
    }
  }
};

module.exports = [sendTodos, postTodo, toggleTodo, removeTodo, servePublic];
