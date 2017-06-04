import React, { Component } from 'react';
import Todo from './Todo.js';
import styled from 'styled-components';

const List = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0;
`;

export default class TodoContainer extends Component {
  render() {
    return (
      <List className="Todo-list">
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
