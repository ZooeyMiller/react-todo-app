import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(
    ${props => (props.screenHeight > 568 ? props.screenHeight : 568)}px - 5em
  );
  justify-content: center;

  @media (min-width: 600px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  min-height: 5em;
  background-color: #861388;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  align-self: flex-start;
`;

export const Title = styled.h1`
  color: white;
  margin: 0 0 0 1em;
  font-size: 3em;
`;
