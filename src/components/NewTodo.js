import React, { Component } from 'react';
import styled from 'styled-components';

const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const TodoInput = styled.input`
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
`;

export default class NewTodo extends Component {
  render() {
    return (
      <TodoForm onSubmit={this.props.handleSubmit}>
        <TodoInput
          type="text"
          value={this.props.currentTodo}
          onChange={this.props.handleInputChange}
        />
        <TodoButton>Add todo</TodoButton>
      </TodoForm>
    );
  }
}
