import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { MovieCard } from "../../components/movies/MovieCard";
import { ContainMovies } from "./UpcomingStyles";
import { types } from "../../types/types";
import { NotFound } from "../../pages/not-found/NotFound";

export const Upcoming = () => {
  const { movies, getUpcomingMovies, dispatch, errorContextMovies } = useContext(MoviesContext);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getUpcomingMovies();
    }

    return () => {
      mounted = false;
      dispatch({
        type: types.cleanMovies,
      });
    };
  }, [getUpcomingMovies, dispatch]);

  if (errorContextMovies.error) {
    return <NotFound />
  }

  return (
    <ContainMovies className="animate__animated animate__fadeIn">
      {movies.lenght !== 0 &&
        movies.map(
          ({
            id,
            title,
            poster_path,
            backdrop_path,
            popularity,
            release_date,
            vote_average,
          }) => (
            <MovieCard
              key={id}
              title={title}
              poster_path={poster_path}
              backdrop_path={backdrop_path}
              popularity={popularity}
              release_date={release_date}
              vote_average={vote_average}
              id={id}
            />
          )
        )}
    </ContainMovies>
  );
};
