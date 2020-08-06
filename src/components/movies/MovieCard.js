import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useAuthState } from "../../context/authContext";
import { MoviesContext } from "../../context/MoviesContext";



const ContainCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgb(0, 0, 0, .1);
  border-radius: 6px;
  height: fit-content;

  h4 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: 'Comfortaa', cursive;
    font-size: 20px;
  }

  img {
    width: 100%;
    -webkit-box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
    box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
  }

`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  
  p {
    margin: 2px;
    font-weight: bold;
    font-family: monospace;
  }

  div {
    display: flex;
    margin-left: 10px;
    font-size: 13px;
  }
`;

const TitleAndIcon = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  svg {
    &:hover {
      color: #ff1a1a;
      cursor: pointer;
    }
  }
`;

export const MovieCard = ({ docID, tagline,  isActived, id, title, poster_path, imgMovie, popularity, release_date, vote_average }) => {

  const { activeUser } = useAuthState();
  const { deleteMovieFromFavorites } = useContext(MoviesContext);

  function handleDeleteFavoriteMovie() {
    deleteMovieFromFavorites(activeUser.uid, docID);

  }

  return (
    <ContainCard
      className="animate__animated animate__fadeIn"
    >
      <TitleAndIcon>
        <h4>{title}</h4>
        {isActived
          && <FontAwesomeIcon
          icon="heart-broken" 
          onClick={handleDeleteFavoriteMovie}
          />
        }
      </TitleAndIcon>
      <Link to={`/search/${id}`} >
        {
          imgMovie
            ? <img src={imgMovie} alt={title}/>
            : <img src={(poster_path) ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
            } alt="No hay Imagen Disponible" />
        }
      </Link>
      <IconAndText>
        <p>Popularidad</p>
        <div>
          <FontAwesomeIcon icon="fire" color="#ff9900"/>
          <p>{popularity}</p>
        </div>
      </IconAndText>
      <IconAndText>
        <p>Likes</p>
        <div>
          <FontAwesomeIcon icon="thumbs-up" color="#b98946" />
          <p>{vote_average}</p>

        </div>
      </IconAndText>
      <IconAndText>
        <p>Fecha de lanzamiento</p>
        <div>
          <FontAwesomeIcon icon="calendar-day" color="#1a75ff"/>
          <p>{release_date}</p>

        </div>
      </IconAndText>
    </ContainCard>
  )
};
