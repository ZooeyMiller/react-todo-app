import React from 'react';
import {
  TodoForm,
  TodoInput,
  TodoButton,
  InputLabel,
} from '../styled-components/NewTodo.js';

export default props => {
  return (
    <TodoForm onSubmit={props.handleSubmit}>
      <InputLabel htmlFor="todo-input">Todo input</InputLabel>
      <TodoInput
        type="text"
        value={props.currentTodo}
        onChange={props.handleInputChange}
        id="todo-input"
      />
      <TodoButton>Add todo</TodoButton>
    </TodoForm>
  );
};
