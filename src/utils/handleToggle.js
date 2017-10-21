// @flow

export const getTodo = (todos: Array<{ id: number }>, id: number) =>
  todos.find(todo => todo.id === id);

export const toggleChecked = (todo: { isComplete: boolean }) => {
  return {
    ...todo,
    isComplete: !todo.isComplete,
  };
};

export const returnUpdatedTodos = (
  todos: Array<{}>,
  updatedTodo: {},
  oldTodo: {}
) => {
  const todoIndex = todos.indexOf(oldTodo);

  return {
    todos: [
      ...todos.slice(0, todoIndex),
      updatedTodo,
      ...todos.slice(todoIndex + 1),
    ],
  };
};
