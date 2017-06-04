import React, { Component } from 'react';
import styled from 'styled-components';

const TodoItem = styled.li`
  background-color: ${props => (props.checked ? 'green' : 'red')};
  font-family: monospace;
  cursor: pointer;
`;

export default class Todo extends Component {
  render() {
    return (
      <TodoItem
        className="Todo"
        checked={this.props.checked}
        onClick={() => this.props.handleToggle(this.props.id)}
      >

        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.handleToggle(this.props.id)}
        />

        {this.props.name}
        <button
          className="Todo--remove"
          onClick={event => {
            event.stopPropagation();
            this.props.removeTodo(this.props.id);
          }}
        >
          X
        </button>
      </TodoItem>
    );
  }
}
