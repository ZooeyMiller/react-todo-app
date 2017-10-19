import styled from 'styled-components';

export const TodoItem = styled.li`
  background-color: ${props => (props.checked ? 'green' : 'red')};
  cursor: pointer;
  transition: all 1s ease-in-out;
  margin: 0.5em;
  padding: 0.5em;
  list-style: none;
  width: 85%;
`;
