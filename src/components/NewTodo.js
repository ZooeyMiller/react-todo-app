import React, { Component } from 'react';

export default class newTodo extends Component {
  render() {
    return (
      <form className="new-todo-form">
        <input type="text" className="new-todo-form--input" />
      </form>
    );
  }
}
