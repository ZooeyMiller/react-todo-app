import React, { Component } from 'react';
import styled from 'styled-components';

const Error = styled.div`
  background-color: palevioletred;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
`;

export default class ErrorMessage extends Component {
  render() {
    return (
      <Error>
        {this.props.message}
      </Error>
    );
  }
}
