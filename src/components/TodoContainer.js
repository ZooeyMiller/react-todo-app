import React from 'react';
import Todo from './Todo.js';
import styled from 'styled-components';
import { filterTodos } from '../utils/handleFilter';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #d9d9d9;
  overflow-y: scroll;
  width: 90%;
  flex-grow: 0;
  height: ${props => props.screenHeight / 3 * 2}px;
  margin: 1.5em 0 0 0;
`;
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
