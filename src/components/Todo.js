import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li className="Todo">
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.handleToggle(this.props.id)}
        />
        {this.props.name}
      </li>
    );
  }
}
