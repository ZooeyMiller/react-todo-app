import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/TodoContainer';
import {
  getTodo,
  toggleChecked,
  returnUpdatedTodos,
} from './utils/handleToggle';
import defaultState from './defaultState';
class App extends Component {
  state = defaultState;

  handleToggle = id => {
    const todos = this.state.todos;
    const todo = getTodo(todos, id);
    const updatedTodo = toggleChecked(todo);
    const todoList = returnUpdatedTodos(todos, updatedTodo, todo);
    this.setState(todoList);
  };

  render() {
    return (
      <div className="App">
        <TodoContainer {...this.state} handleToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;
