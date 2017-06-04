const { getTodos, addTodo, toggleChecked } = require('./handlers.js');

const sendTodos = {
  method: 'GET',
  path: '/get-todos',
  handler: getTodos,
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
};

const postTodo = {
  method: 'POST',
  path: '/add-todo',
  handler: addTodo,
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
};

const toggleTodo = {
  method: 'POST',
  path: '/toggle-todo',
  handler: toggleChecked,
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
};

module.exports = [sendTodos, postTodo, toggleTodo];
