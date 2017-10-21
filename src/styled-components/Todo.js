import styled from 'styled-components';

export const TodoItem = styled.li`
  background-color: #ffffff;
  cursor: pointer;
  transition: all 1s ease-in-out;
  margin: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  list-style: none;
  width: 90%;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  min-height: 3em;
  :first-of-type {
    margin: 1em 0.5em 0.5em 0.5em;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  font-family: ubuntu, helvetica, sans-serif;
  background-color: #861388;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
`;

export const Checkbox = styled.button`
  height: ${props => (!props.checked ? '37px' : 'auto')};
  width: ${props => (!props.checked ? '32px' : 'auto')};
  font-size: 1.5em;
  font-family: ubuntu, helvetica, sans-serif;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0.25em;
  border-style: solid;
  border-width: 1px;
`;

export const TodoText = styled.p`
  font-family: ubuntu, helvetica, sans-serif;
  font-size: 1em;
  width: 70%;
  margin: 1em;
`;

export const Input = styled.input``;
