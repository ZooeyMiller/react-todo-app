import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  font-family: ubuntu, helvetica, sans-serif;
  background-color: ${({ disabled }) => (disabled ? 'grey' : '#861388')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.25em 1em 0.5em 1em;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-top: 0.5em;
`;

export default ({ setFilter, criteria }) => {
  return (
    <Container>
      <Button onClick={() => setFilter('ALL')} disabled={criteria === 'ALL'}>
        All
      </Button>
      <Button
        onClick={() => setFilter('COMPLETED')}
        disabled={criteria === 'COMPLETED'}
      >
        Completed
      </Button>
      <Button
        onClick={() => setFilter('PENDING')}
        disabled={criteria === 'PENDING'}
      >
        Pending
      </Button>
    </Container>
  );
};
