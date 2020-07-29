import React from 'react';
import styled from 'styled-components';

const Contain = styled.div`
  background-color: #586994;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  color: #B4C4AE;
`;

export const AppMovies = () => {
  return (
    <Contain>
      Movies 182
    </Contain>
  )
}
