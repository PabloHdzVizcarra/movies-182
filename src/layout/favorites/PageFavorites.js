import React, { useContext, useEffect } from "react";
import { useAuthState } from "../../context/authContext";
import { MoviesContext } from "../../context/MoviesContext";
import { MovieCard } from "../../components/movies/MovieCard";
import { MoviesContainer } from "./PageFavoritesStyles";

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
    return <p>Loading Page</p>;
  }
  return (
    <MoviesContainer>
      {favoriteMovies.length === 0 ? (
        <p>No tienes peliculas favoritas</p>
      ) : (
        favoriteMovies.map((movie) => (
          <MovieCard isActived={data.isActived} key={movie.id} {...movie} />
        ))
      )}
    </MoviesContainer>
  );
};
