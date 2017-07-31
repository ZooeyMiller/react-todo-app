import React, { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import NewTodo from './components/NewTodo.js';
import Spinner from './components/Spinner.js';
import ErrorMessage from './components/ErrorMessage.js';
import {
  getTodo,
  toggleChecked,
  returnUpdatedTodos,
} from './utils/handleToggle';

import styled from 'styled-components';

const serverUrl = 'http://localhost:5000';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  state = {
    loading: true,
    currentTodo: '',
  };

  componentDidMount = () => {
    fetch(`${serverUrl}/get-todos`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          todos: json.rows.map(todo => ({
            name: todo.name,
            id: todo.id,
            isComplete: todo.checked,
          })),
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
  handleError = errorMessage => {
    this.setState({
      error: errorMessage,
    });
    setTimeout(() => {
      this.setState({
        error: '',
      });
    }, 3000);
  };

  handleToggle = id => {
    const todos = this.state.todos;
    const todo = getTodo(todos, id);
    if (todo) {
      const updatedTodo = toggleChecked(todo);
      const todoList = returnUpdatedTodos(todos, updatedTodo, todo);
      fetch(`${serverUrl}/toggle-todo`, {
        method: 'POST',
        body: JSON.stringify({
          todo: updatedTodo,
        }),
      }).then(() => this.setState(todoList));
    } else {
      this.handleError('problem toggling todo');
    }
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
        todo: this.state.currentTodo,
      }),
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          todos: [...this.state.todos, json],
          currentTodo: '',
        });
      })
      .catch(() => this.handleError('problem submitting todo'));
  };

  removeTodo = id => {
    const removedTodoIndex = this.state.todos.findIndex(todo => todo.id === id);
    fetch(`${serverUrl}/delete-todo`, {
      method: 'POST',
      body: JSON.stringify({
        id,
      }),
    });
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
          ? <Spinner />
          : <Container>
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
            </Container>}
        {this.state.error && <ErrorMessage message={this.state.error} />}
      </div>
    );
  }
}

export default App;
