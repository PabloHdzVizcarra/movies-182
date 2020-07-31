import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContainNav, MainTitle, ContainButtons } from './NavBarStyles';

export const NavBar = () => {
  
  return (
    <ContainNav>
      <MainTitle>
        <Link to="/">
            Movies 182
        </Link>
        <Link to="/">
          Inicia Sesion
            <FontAwesomeIcon icon={['fab', 'google']}/>
        </Link>
      </MainTitle>
      <ContainButtons>
        <Link to="/popular">
          Populares
        </Link>
        <Link to="/top">
          Mejor valoradas
        </Link>
        <Link to="/upcoming">
          Proximas
        </Link>
        <Link to="/search">
          Buscar
        </Link>
      </ContainButtons>
    </ContainNav>
  )
}
