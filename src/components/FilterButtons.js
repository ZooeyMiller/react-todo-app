import React from 'react';
import { Container, Button } from '../styled-components/FilterButtons.js';

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
