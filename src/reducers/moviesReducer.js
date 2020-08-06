import { types } from "../types/types";

export const moviesReducer = (state, action) => {
  //console.log(action);

  switch (action.type) {
    case types.loadingPopularMovies:
      return {
        ...state,
        movies: [...action.payload]
      }
    case types.loadingUpcomingMovies:
      return {
        ...state,
        movies: [...action.payload]
      }
    
    case types.loadingTopRatedMovies:
      return {
        ...state,
        movies: [...action.payload]
      }
    
    case types.searchMovies:
      return {
        ...state,
        searchMovie: [...action.payload]
      }
    
    case types.selectedMovie:
      return {
        ...state,
        movie: {...action.payload}
      }
    
    case types.addFavoritesMovies:
      return {
        ...state,
        favoriteMovies: [action.payload, ...state.favoriteMovies ]
      }
    
    case types.getFavoritesMoviesFirebase:
      return {
        ...state,
        favoriteMovies: action.payload,
        loadingMovies: false
      }
    
    case types.removeMovieFromFavorites:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter((movie) =>
          movie.docID !== action.payload
        )
      }
    
    case types.cleanMovies:
      return {
        ...state,
        movies: []
      }
    
    case types.removeMovie:
      return {
        ...state,
        movie: []
      }
    
    default:
      return state
  }
}