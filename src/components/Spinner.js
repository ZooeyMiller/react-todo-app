import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default () => {
  return (
    <Center>
      <div className="uil-spin-css" style={{ WebkitTransform: 'scale(0.6)' }}>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
      </div>
      <h1>Loading...</h1>
    </Center>
  );
};
