import { moviesReducer } from "../../reducers/moviesReducer";
import { types } from "../../types/types";

describe("Test in moviesReducer", () => {
  const initialState = {
    movies: [],
    favoriteMovies: [],
    searchMovie: [],
    movie: {},
    loadingMovies: true,
    movieSaveFavorites: false,
  };

  test("should return state default", () => {
    const action = {
      type: types.noAction,
    };
    const state = moviesReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  test('the action must work properly "loadingUpcomingMovies"', () => {
    const action = {
      type: types.loadingUpcomingMovies,
      payload: [
        {
          title: "hello",
        },
        {
          title: "world",
        },
      ],
    };
    const state = moviesReducer(initialState, action);

    expect(state.movies).toEqual(action.payload);
  });

  test('the action must work properly "searchMovies"', () => {
    const action = {
      type: types.searchMovies,
      payload: [
        {
          title: "hello",
        },
        {
          title: "world",
        },
      ],
    };
    const state = moviesReducer(initialState, action);

    expect(state.searchMovie).toEqual(action.payload);
  });

  test('the action must work properly "selectedMovie"', () => {
    const action = {
      type: types.selectedMovie,
      payload: [
        {
          title: "hello",
          id: 2015,
        },
      ],
    };
    const state = moviesReducer(initialState, action);

    expect(state.movie).toEqual({ ...action.payload });
  });

  test('the action must work properly "addFavoritesMovies"', () => {
    const action = {
      type: types.addFavoritesMovies,
      payload: {
        title: "hello",
        id: 2015,
      },
    };
    const { favoriteMovies } = moviesReducer(initialState, action);
    expect(favoriteMovies).toEqual([action.payload]);
  });

  test('the action must work properly "getFavoritesMoviesFirebase"', () => {
    const action = {
      type: types.getFavoritesMoviesFirebase,
      payload: [
        {
          title: "spiderman",
          id: 2015,
        },
        {
          title: "superman",
          id: 2016,
        },
      ],
    };
    const { favoriteMovies, loadingMovies } = moviesReducer(
      initialState,
      action
    );

    expect(favoriteMovies).toEqual(action.payload);
    expect(loadingMovies).toBeFalsy();
  });

  test('the action must work properly "removeMovieFromFavorites"', () => {
    const initialState = {
      movies: [],
      favoriteMovies: [
        {
          title: "Pokemon",
          docID: 123,
        },
        {
          title: "Digimon",
          docID: 564,
        },
      ],
      searchMovie: [],
      movie: {},
      loadingMovies: true,
      movieSaveFavorites: false,
    };

    const action = {
      type: types.removeMovieFromFavorites,
      payload: 123,
    };

    const { favoriteMovies } = moviesReducer(initialState, action);
    expect(favoriteMovies.length).toBe(1);
  });

  test('the action must work properly "cleanMovies"', () => {
    const initialState = {
      movies: [
        {
          title: "Pokemon",
          docID: 123,
        },
        {
          title: "Digimon",
          docID: 564,
        },
      ],
      favoriteMovies: [],
      searchMovie: [],
      movie: {},
      loadingMovies: true,
      movieSaveFavorites: false,
    };

    const returnState = {
      favoriteMovies: [],
      movies: [],
      searchMovie: [],
      movie: {},
      loadingMovies: true,
      movieSaveFavorites: false,
    };

    const action = {
      type: types.cleanMovies,
    };

    const state = moviesReducer(initialState, action);
    expect(state).toEqual(returnState);
  });

  test('the action must work properly "cleanMovies"', () => {
    const initialState = {
      movies: [],
      favoriteMovies: [],
      searchMovie: [],
      movie: {
        title: "Superman",
        id: 156,
      },
      loadingMovies: true,
      movieSaveFavorites: false,
    };

    const returnState = {
      favoriteMovies: [],
      movies: [],
      searchMovie: [],
      movie: {},
      loadingMovies: true,
      movieSaveFavorites: false,
    };

    const action = {
      type: types.removeMovie,
    };

    const state = moviesReducer(initialState, action);
    expect(state).toEqual(returnState);
  });
});
