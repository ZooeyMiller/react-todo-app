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
  height: 100%;
`;

const Header = styled.div`
  min-height: 5em;
  background-color: #861388;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  align-self: flex-start;
`;

const Title = styled.h1`
  color: white;
  margin: 0 0 0 1em;
  font-size: 3em;
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
    if (this.state.currentTodo !== '') {
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
            error: '',
          });
        })
        .catch(() => this.handleError('problem submitting todo'));
    } else {
      this.handleError('no empty todos!');
    }
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
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <Container>
              <Header>
                <Title>todo</Title>
              </Header>
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
            </Container>
          </div>
        )}
        {this.state.error && <ErrorMessage message={this.state.error} />}
      </div>
    );
  }
}

export default App;
