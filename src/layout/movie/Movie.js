import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../../context/MoviesContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ContainerMovie = styled.div`
  display: grid;
  width: 100%;

  /* img {
    width: 100%;
  } */

  h3 {
    margin: 2px;
  }

  p {
    margin: 1px;
  }
`;

const IconHeart = styled.div`

  svg {
    font-size: 2rem;
    color: #f34747;
    cursor: pointer;

    &:hover {
      color: #f12727;
    }
  }

`;

export const Movie = () => {

  const { movie, getMovieID, addFavoriteMovie } = useContext(MoviesContext);
  const { movieID } = useParams();
  
  useEffect(() => {
    getMovieID(movieID);
    //eslint-disable-next-line
  }, [])

  if (Object.keys(movie).length === 0) {
    return <p>Loading...</p>
  }

  const handleAddFavorite = () => {
    addFavoriteMovie(movie);
  }

  const { genres, original_language, overview, production_countries, release_date, tagline, popularity, vote_average, vote_count, poster_path, title, original_title } = movie;
  return (
    <ContainerMovie>
      <h3>{original_title}</h3>
      <h3>{title}</h3>
      <IconHeart>
        <FontAwesomeIcon
          icon="heart" 
          onClick={handleAddFavorite}  
        />
      </IconHeart>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="No hay Imagen Disponible" />
      {genres.map((genre) => (
        <p
          key={genre.id}
        >Genero: {genre.name}</p>
      ))}
      <p>Idioma Original: {original_language}</p>
      <p>{overview}</p>
      {production_countries.map((country) => (
        <p
          key={country.name}
        >Pais: {country.name}</p>
      ))}
      <p>Lanzamiento: {release_date}</p>
      <p>{tagline}</p>
      <p>Popularidad: {popularity}</p>
      <p>Calificacion: {vote_average}</p>
      <p>Numero de votos: {vote_count}</p>

    </ContainerMovie>
  )
}
