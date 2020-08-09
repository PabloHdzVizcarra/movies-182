import React, { useState, useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { MovieCard } from '../../components/movies/MovieCard';
import { Contain, ErrorMessage, InputContainer, MoviesContainer } from './SearchMovieStyles';


export const SearchMovie = () => {

  const { getMovieSearch, searchMovie, errorForm } = useContext(MoviesContext);
  const [search, setSearch] = useState('');
  

  const handleSearchMovie = (event) => {
    event.preventDefault();

    if (search.length < 1) return
    getMovieSearch(search);
    setSearch('');
  }
  

  return (
    <Contain>
      {errorForm.error && <ErrorMessage className="animate__animated animate__fadeInDown"><p>{errorForm.message}</p></ErrorMessage>}
      <InputContainer>
        <form
          onSubmit={(event) => handleSearchMovie(event)}
        >
          <input
            type="text"
            autoComplete="none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <button>
            Buscar
          </button>
        </form>
      </InputContainer>
      <MoviesContainer>
        {(searchMovie.lenght !== 0) && searchMovie.map(({id, title, poster_path, backdrop_path, popularity, release_date, vote_average}) => (
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
      </MoviesContainer>
    </Contain>
  )
}
