import styled from 'styled-components';

export const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const TodoInput = styled.input`
  margin-top: 0.25em;
  margin-bottom: 0.5em;
  font-size: 1.5em;
  font-family: ubuntu, helvetica, sans-serif;
`;

export const TodoButton = styled.button`
  font-size: 1.5em;
  font-family: ubuntu, helvetica, sans-serif;
  background-color: #861388;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 0.25em;
  padding: 0.25em 0 0.5em 0;
`;

export const InputLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
