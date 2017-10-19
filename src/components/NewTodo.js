import React from 'react';
import {
  TodoForm,
  TodoInput,
  TodoButton,
} from '../styled-components/NewTodo.js';

export default props => {
  return (
    <TodoForm onSubmit={props.handleSubmit}>
      <TodoInput
        type="text"
        value={props.currentTodo}
        onChange={props.handleInputChange}
      />
      <TodoButton>Add todo</TodoButton>
    </TodoForm>
  );
};
