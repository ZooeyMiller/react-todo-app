import React from 'react';
import styled from 'styled-components';

const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const TodoInput = styled.input`
  margin-top: 0.25em;
  margin-bottom: 0.5em;
  font-size: 1.5em;
  font-family: ubuntu, helvetica, sans-serif;
`;

const TodoButton = styled.button`
  font-size: 1.5em;
  font-family: ubuntu, helvetica, sans-serif;
  background-color: #861388;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 0.25em;
  padding: 0.25em 0 0.5em 0;
`;

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
