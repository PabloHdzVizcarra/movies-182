import React, { useContext, useEffect } from "react";
import { useAuthState } from "../../context/authContext";
import { MoviesContext } from "../../context/MoviesContext";
import { MovieCard } from "../../components/movies/MovieCard";
import { MoviesContainer, TextInfo } from "./PageFavoritesStyles";
import { Spinner } from "../../components/spinner/Spinner";

export const PageFavorites = () => {
  const data = useAuthState();
  const { getMoviesFirebase, favoriteMovies, loadingMovies } = useContext(
    MoviesContext
  );

  useEffect(() => {
    if (data.activeUser.uid) {
      getMoviesFirebase(data.activeUser.uid);
    }
    //eslint-disable-next-line
  }, [data.activeUser.uid]);

  if (loadingMovies) {
    return <Spinner />;
  }

  return (
    <MoviesContainer>
      {favoriteMovies.length === 0 ? (
        <TextInfo>
          No tienes peliculas favoritas, comienza agregando algunas peliculas
        </TextInfo>
      ) : (
        favoriteMovies.map((movie) => (
          <MovieCard isActived={data.isActived} key={movie.id} {...movie} />
        ))
      )}
    </MoviesContainer>
  );
};
