import React, { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import NewTodo from './components/NewTodo.js';
import Spinner from './components/Spinner.js';
import ErrorMessage from './components/ErrorMessage.js';
import FilterButtons from './components/FilterButtons.js';
import {
  getTodo,
  toggleChecked,
  returnUpdatedTodos,
} from './utils/handleToggle';
import { Container, Header, Title } from './styled-components/App.js';

const serverUrl = 'http://localhost:5000';

class App extends Component {
  state = {
    loading: true,
    currentTodo: '',
    screenHeight: window.innerHeight,
    criteria: 'ALL',
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
    window.addEventListener('resize', () => {
      this.setState({
        screenHeight: window.innerHeight,
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

  setFilter = criteria => {
    this.setState({
      criteria,
    });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <Header>
              <Title>todo</Title>
            </Header>
            <Container screenHeight={this.state.screenHeight}>
              <TodoContainer
                {...this.state}
                handleToggle={this.handleToggle}
                removeTodo={this.removeTodo}
              />
              <FilterButtons
                setFilter={this.setFilter}
                criteria={this.state.criteria}
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
