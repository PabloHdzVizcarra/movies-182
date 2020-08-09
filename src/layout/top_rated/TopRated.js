import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { MovieCard } from "../../components/movies/MovieCard";
import { ContainMovies } from "./TopRatedStyles";
import { types } from "../../types/types";

export const TopRated = () => {
  const { movies, getTopRatedMovies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getTopRatedMovies();
    }

    return () => {
      mounted = false;
      dispatch({
        type: types.cleanMovies
      })
    }
    
  }, [getTopRatedMovies, dispatch]);

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
