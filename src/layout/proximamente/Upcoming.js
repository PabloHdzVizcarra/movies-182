import React, { useEffect, useContext } from 'react'
import styled from 'styled-components';
import { respondTo } from '../../styles/_respondTo';
import { MoviesContext } from '../../context/MoviesContext';
import { MovieCard } from '../../components/movies/MovieCard';

const ContainMovies = styled.div`
  padding: 1rem;
  display: grid;
  gap: 10px;
  background-color: #F1F2EE;
  

  ${respondTo.xs`
    grid-template-columns: 1fr;
  `}

  ${respondTo.sm`
    grid-template-columns: 1fr 1fr;
  `}

  ${respondTo.md`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  ${respondTo.lg`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  `}
  
`;

export const Upcoming = () => {

  const { movies, getUpcomingMovies } = useContext(MoviesContext);

  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);

  return (
    <ContainMovies
      className="animate__animated animate__fadeIn"
    >
      {(movies.lenght !== 0) && movies.map(({id, title, poster_path, backdrop_path, popularity, release_date, vote_average}) => (
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
      ))}
    </ContainMovies>
  )
}
