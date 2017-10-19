import React from 'react';
import Todo from './Todo.js';
import { filterTodos } from '../utils/handleFilter.js';
import { List } from '../styled-components/TodoList.js';

export default props => {
  const todos = filterTodos(props.todos, props.criteria);
  return (
    <List screenHeight={props.screenHeight}>
      {todos.map(todo => {
        return (
          <Todo
            checked={todo.isComplete}
            name={todo.name}
            key={todo.id}
            id={todo.id}
            handleToggle={props.handleToggle}
            removeTodo={props.removeTodo}
          />
        );
      })}
    </List>
  );
};
