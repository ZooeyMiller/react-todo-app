import React, { Component } from 'react';

export default class NewTodo extends Component {
  render() {
    return (
      <form className="new-todo-form" onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          className="new-todo-form--input"
          value={this.props.currentTodo}
          onChange={this.props.handleInputChange}
        />
      </form>
    );
  }
}
