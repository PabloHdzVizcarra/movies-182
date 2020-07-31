import { types } from "../types/types";

export const moviesReducer = (state, action) => {

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
    
    default:
      return state
  }
}