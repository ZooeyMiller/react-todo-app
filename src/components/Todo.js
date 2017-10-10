import React, { Component } from 'react';
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

export default class Todo extends Component {
  render() {
    return (
      <TodoItem
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
