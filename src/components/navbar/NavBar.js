import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContainNav, MainTitle, ContainButtons } from './NavBarStyles';
import { firebase, googleAuthProvider } from '../../libs/firebase';
import { useAuthState, useAuthDispatch } from '../../context/authContext';
import { types } from '../../types/types';


export const NavBar = () => {

  const { activeUser, isActived } = useAuthState();
  const dispatch = useAuthDispatch();

  const handleClickLoginGoogle = () => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(token);
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  const handleClickLogout = () => {
    console.log('Cerrando sesion');
    firebase.auth().signOut();
    dispatch({
      type: types.logoutUser
    })
  }
  
  return (
    <ContainNav>
      <MainTitle>
        <Link to="/">
          Movies 182
        </Link>
        {
          (Object.keys(activeUser).length === 0)
            ?  <Link to="/">
                Inicia Sesion
                  <FontAwesomeIcon
                  icon={['fab', 'google']} 
                  onClick={handleClickLoginGoogle}
                  />
              </Link>
            : <button
              onClick={handleClickLogout}
            >Cerrar sesion</button>
        }
        
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
        
        {isActived && <Link to="/favorites">Favoritas</Link>}

      </ContainButtons>
    </ContainNav>
  )
}
