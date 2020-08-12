import React, { useContext } from 'react';
import styled from 'styled-components';
import psyduck from '../../assets/psyduckandhuman.jpg';
import { respondTo } from '../../styles/_respondTo';
import { MoviesContext } from '../../context/MoviesContext';

const NotData = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 20%;

  img {
    width: 100%;
  }

  p {
    color: #f55019;
    font-family: 'Sora', sans-serif;
  }

  ${respondTo.sm`
    margin-top: 10%;

    p {
      font-size: 1.2rem;
    }

    img {
      width: 100%;
    }
    
  `}

  ${respondTo.md`
    margin-top: 0;

    p {
      font-size: 1.2rem;
    }

    img {
      width: 85%;
    }

  `}

  ${respondTo.lg`
    margin-top: 0;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 65%;
    }
    
  `}
  ${respondTo.xg`
    margin-top: 0;
    
    p {
      font-size: 2rem;
    }

    img {
      width: 55%;
    }
  `}

    
`;

export const NotFound = () => {

  const {errorContextMovies} = useContext(MoviesContext);
  return (
    <NotData>
      <img src={psyduck} alt="Not Found" />
      <p>{errorContextMovies.message}</p>
    </NotData>
  )
}
