import React from 'react';
import styled from 'styled-components';

const TodoItem = styled.li`
  background-color: ${props => (props.checked ? 'green' : 'red')};
  cursor: pointer;
  transition: all 1s ease-in-out;
  margin: 0.5em;
  padding: 0.5em;
  list-style: none;
  width: 85%;
`;

export default props => {
  return (
    <TodoItem
      checked={props.checked}
      onClick={() => props.handleToggle(props.id)}
    >
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.handleToggle(props.id)}
      />

      {props.name}
      <button
        onClick={event => {
          event.stopPropagation();
          props.removeTodo(props.id);
        }}
      >
        X
      </button>
    </TodoItem>
  );
};
