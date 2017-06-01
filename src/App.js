import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/TodoContainer';
import NewTodo from './components/NewTodo.js';
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

  handleInputChange = event => {
    this.setState({
      currentTodo: event.target.value,
    });
  };

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    const id = this.state.todos.length + 1;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id,
          name: this.state.currentTodo,
          isComplete: false,
        },
      ],
      currentTodo: '',
    });
  };

  render() {
    return (
      <div className="App">
        <TodoContainer {...this.state} handleToggle={this.handleToggle} />
        <NewTodo
          handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
