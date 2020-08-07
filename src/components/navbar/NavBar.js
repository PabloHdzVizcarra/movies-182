import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContainNav, MainTitle, ContainButtons } from "./NavBarStyles";
import { firebase, googleAuthProvider } from "../../libs/firebase";
import { useAuthState, useAuthDispatch } from "../../context/authContext";
import { types } from "../../types/types";
import { MoviesContext } from "../../context/MoviesContext";

export const NavBar = () => {
  const { activeUser, isActived } = useAuthState();
  const dispatch = useAuthDispatch();
  const { dispatch: dispatchMovies } = useContext(MoviesContext);
  const history = useHistory();

  const handleClickLoginGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(function (result) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickLogout = () => {
    firebase.auth().signOut();
    dispatch({
      type: types.logoutUser,
    });
  };

  const cleanFavoriteMovies = () => {
    dispatchMovies({
      type: types.cleanMovies,
    });
  };

  const handlePushPage = () => {
    history.push("/");
  };

  return (
    <ContainNav>
      <MainTitle>
        <h1 onClick={handlePushPage}>Fun Movies</h1>
      </MainTitle>
      <ContainButtons>
        <NavLink
          activeStyle={{
            color: "#d9d9d9",
            pointerEvents: "none",
            cursor: "default",
          }}
          onClick={cleanFavoriteMovies}
          to="/popular"
        >
          Populares
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#d9d9d9",
            pointerEvents: "none",
            cursor: "default",
          }}
          onClick={cleanFavoriteMovies}
          to="/top"
        >
          Mejor valoradas
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#d9d9d9",
            pointerEvents: "none",
            cursor: "default",
          }}
          onClick={cleanFavoriteMovies}
          to="/upcoming"
        >
          Proximas
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#d9d9d9",
            pointerEvents: "none",
            cursor: "default",
          }}
          onClick={cleanFavoriteMovies}
          to="/search"
        >
          Buscar
        </NavLink>

        {isActived && (
          <NavLink
            to="/favorites"
            activeStyle={{
              color: "#d9d9d9",
              pointerEvents: "none",
              cursor: "default",
            }}
          >
            Favoritas
          </NavLink>
        )}

        {Object.keys(activeUser).length === 0 ? (
          <Link to="/">
            Inicia Sesion
            <FontAwesomeIcon
              icon={["fab", "google"]}
              onClick={handleClickLoginGoogle}
            />
          </Link>
        ) : (
          <button onClick={handleClickLogout}>Cerrar sesion</button>
        )}
      </ContainButtons>
    </ContainNav>
  );
};
