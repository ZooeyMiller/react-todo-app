import React from 'react';
import { TodoItem } from '../styled-components/Todo.js';

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
