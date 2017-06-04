import React, { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import NewTodo from './components/NewTodo.js';
import {
  getTodo,
  toggleChecked,
  returnUpdatedTodos,
} from './utils/handleToggle';

const serverUrl = 'http://localhost:5000';

class App extends Component {
  state = {
    loading: true,
    currentTodo: '',
  };

  componentDidMount = () => {
    fetch(`${serverUrl}/get-todos`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          todos: [...json.rows],
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: 'something went wrong',
        });
      });
  };

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
    event.preventDefault();
    fetch(`${serverUrl}/add-todo`, {
      method: 'POST',
      body: JSON.stringify({
        todo: JSON.stringify(this.state.currentTodo),
      }),
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          todos: [...this.state.todos, json],
          currentTodo: '',
        });
      })
      .catch(console.log);
  };

  removeTodo = id => {
    const removedTodoIndex = this.state.todos.findIndex(todo => todo.id === id);
    this.setState({
      todos: [
        ...this.state.todos.slice(0, removedTodoIndex),
        ...this.state.todos.slice(removedTodoIndex + 1),
      ],
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.loading
          ? <h1>Loading...</h1>
          : <div>
              <TodoContainer
                {...this.state}
                handleToggle={this.handleToggle}
                removeTodo={this.removeTodo}
              />
              <NewTodo
                handleInputChange={this.handleInputChange}
                currentTodo={this.state.currentTodo}
                handleSubmit={this.handleSubmit}
              />
            </div>}

      </div>
    );
  }
}

export default App;
