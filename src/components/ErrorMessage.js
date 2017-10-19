import React from 'react';
import { Error } from '../styled-components/Error.js';

export default props => {
  return <Error>{props.message}</Error>;
};
