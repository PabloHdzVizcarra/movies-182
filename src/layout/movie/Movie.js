import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";
import { types } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ContainerMovie,
  ImageContainer,
  StyleContainer,
  IconHeart,
  TitleContainer,
} from "./MovieStyles";
import moment from "moment";
import "moment/locale/es";
import { useAuthState } from "../../context/authContext";
import { NotFound } from "../../pages/not-found/NotFound";
import { Spinner } from "../../components/spinner/Spinner";
moment.locale("es");

export const Movie = () => {
  const user = useAuthState();

  const {
    movie,
    getMovieID,
    addFavoriteMovie,
    dispatch,
    getMoviesFirebase,
    searchMovieFavorites,
  } = useContext(MoviesContext);
  const { movieID } = useParams();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getMovieID(movieID);
    }

    if (user.activeUser.uid) {
      getMoviesFirebase(user.activeUser.uid);
    }

    return () => {
      mounted = false;
      dispatch({
        type: types.removeMovie,
      });
    };
    //eslint-disable-next-line
  }, [user.activeUser.uid]);

  if (Object.keys(movie).length === 0) {
    return <Spinner />;
  }

  if (!movie.imdb_id) {
    return <NotFound />;
  }

  const handleAddFavorite = () => {
    addFavoriteMovie(movie);
  };

  const {
    genres,
    id,
    overview,
    production_countries,
    release_date,
    tagline,
    popularity,
    vote_average,
    vote_count,
    poster_path,
    title,
    original_title,
  } = movie;

  const newDate = moment(release_date).format("DD MMMM YYYY");

  const allGeneres = genres.map((genre) => genre.name).join("/");
  const allCountrys = production_countries
    .map((genre) => genre.name)
    .join(" | ");

  return (
    <ContainerMovie className="animate__animated animate__fadeIn">
      <TitleContainer>
        <h2>{title}</h2>
        <p>{tagline}</p>
      </TitleContainer>

      <ImageContainer>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          }
          alt="No hay Imagen Disponible"
        />
      </ImageContainer>

      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <p>{overview}</p>
          <p>
            <span>Titulo Original:</span> {original_title}
          </p>
          <p>
            <span>Genero:</span> {allGeneres}
          </p>
          <p>
            <span>Pais de produccion:</span> {allCountrys}
          </p>
          <p>
            <span>Lanzamiento:</span> {newDate}
          </p>
          <p>
            <span>Likes:</span> {popularity}
          </p>
          <p>
            <span>Calificacion:</span> {vote_average}
          </p>
          <p>
            <span>Numero de votos:</span> {vote_count}
          </p>
          {user.isActived && !searchMovieFavorites(id) && (
            <IconHeart>
              <p style={{ color: "#ff6d00", fontWeight: "bold" }}>
                {!searchMovieFavorites(id)
                  ? "Añadir a favoritos"
                  : "Pelicula guardada en favoritos"}
              </p>
              <FontAwesomeIcon icon={"heart"} onClick={handleAddFavorite} />
            </IconHeart>
          )}
        </div>
      </StyleContainer>
    </ContainerMovie>
  );
};
