import React, { Component } from 'react';
import Todo from './Todo.js';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #d9d9d9;
  overflow-y: scroll;
  width: 90%;
`;

export default class TodoContainer extends Component {
  render() {
    return (
      <List>
        {this.props.todos.map(todo => {
          return (
            <Todo
              checked={todo.isComplete}
              name={todo.name}
              key={todo.id}
              id={todo.id}
              handleToggle={this.props.handleToggle}
              removeTodo={this.props.removeTodo}
            />
          );
        })}
      </List>
    );
  }
}
