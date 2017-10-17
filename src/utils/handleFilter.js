export const completedOnly = todos => todos.filter(todo => todo.isComplete);

export const pendingOnly = todos => todos.filter(todo => !todo.isComplete);

export const filterTodos = (todos, filterCriteria) => {
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
