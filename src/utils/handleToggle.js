export const getTodo = (todos, id) => todos.find(todo => todo.id === id);

export const toggleChecked = todo => {
  return {
    ...todo,
    isComplete: !todo.isComplete,
  };
};

export const returnUpdatedTodos = (todos, updatedTodo, oldTodo) => {
  const todoIndex = todos.indexOf(oldTodo);

  return {
    todos: [
      ...todos.slice(0, todoIndex),
      updatedTodo,
      ...todos.slice(todoIndex + 1),
    ],
  };
};
