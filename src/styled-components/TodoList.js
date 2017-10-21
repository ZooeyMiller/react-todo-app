import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #d9d9d9;
  overflow-y: scroll;
  width: 90%;
  flex-grow: 0;
  height: ${props => props.screenHeight / 3 * 2}px;
  margin: 1.5em 0 0 0;
  align-items: center;
`;
