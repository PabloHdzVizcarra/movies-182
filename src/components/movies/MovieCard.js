import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuthState } from "../../context/authContext";
import { MoviesContext } from "../../context/MoviesContext";
import { ContainCard, TitleAndIcon, IconAndText, InfoData } from "./movie-card-styles";

export const MovieCard = ({
  docID,
  isActived,
  id,
  title,
  poster_path,
  imgMovie,
  popularity,
  release_date,
  vote_average,
}) => {
  const { activeUser } = useAuthState();
  const { deleteMovieFromFavorites } = useContext(MoviesContext);

  function handleDeleteFavoriteMovie() {
    deleteMovieFromFavorites(activeUser.uid, docID);
  }

  return (
    <ContainCard className="animate__animated animate__fadeIn">
      <TitleAndIcon>
        <h4>{title}</h4>
        {isActived && (
          <FontAwesomeIcon
            icon="heart-broken"
            onClick={handleDeleteFavoriteMovie}
          />
        )}
      </TitleAndIcon>
      <Link to={`/search/${id}`}>
        {imgMovie ? (
          <img src={imgMovie} alt={title} />
        ) : (
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            }
            alt="No hay Imagen Disponible"
          />
        )}
      </Link>
      <InfoData>
        <IconAndText>
          <p>Popularidad</p>
          <div>
            <FontAwesomeIcon icon="fire" color="#ff9900" />
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
            <FontAwesomeIcon icon="calendar-day" color="#1a75ff" />
            <p>{release_date}</p>
          </div>
        </IconAndText>
      </InfoData>
    </ContainCard>
  );
};
