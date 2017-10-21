// @flow
export const completedOnly = (todos: Array<{ isComplete: boolean }>) =>
  todos.filter(todo => todo.isComplete);

export const pendingOnly = (todos: Array<{ isComplete: boolean }>) =>
  todos.filter(todo => !todo.isComplete);

export const filterTodos = (
  todos: Array<{ isComplete: boolean }>,
  filterCriteria: string
) => {
  switch (filterCriteria) {
    case 'ALL':
      return todos;
    case 'COMPLETED':
      return completedOnly(todos);
    case 'PENDING':
      return pendingOnly(todos);
    default:
      return todos;
  }
};
