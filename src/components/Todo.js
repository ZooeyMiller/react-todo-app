import React from 'react';
import {
  TodoItem,
  Button,
  TodoText,
  Input,
  Checkbox,
} from '../styled-components/Todo.js';

export default props => {
  return (
    <TodoItem
      checked={props.checked}
      onClick={() => props.handleToggle(props.id)}
    >
      <Checkbox onClick={() => props.handleToggle(props.id)}>
        {props.checked ? '✔' : ''}
      </Checkbox>

      <TodoText>{props.name}</TodoText>
      <Button
        onClick={event => {
          event.stopPropagation();
          props.removeTodo(props.id);
        }}
      >
        delete
      </Button>
    </TodoItem>
  );
};
