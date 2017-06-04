const { getTodos, addTodo } = require('./handlers.js');

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

module.exports = [sendTodos, postTodo];
