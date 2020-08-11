import React from 'react';
import styled from 'styled-components';
import image from '../../assets/notFound.png';
import { respondTo } from '../../styles/_respondTo';

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
  return (
    <NotData>
      <img src={image} alt="Not Found" />
      <p>Estamos teniendo problemas intenta mas tarde</p>
    </NotData>
  )
}
