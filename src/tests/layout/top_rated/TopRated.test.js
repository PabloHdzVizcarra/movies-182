import React from 'react'
import '@testing-library/jest-dom';
import { AuthProvider, AuthStateContext } from '../../../context/authContext';
import { MoviesContext } from '../../../context/MoviesContext';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { TopRated } from '../../../layout/top_rated/TopRated';

describe('Test in <TopRated />', () => {

  const Wrapper = ({ children }) => {
    return (
      <AuthProvider>
        <AuthStateContext.Provider
          value={{

          }}
        >
          <MoviesContext.Provider
            value={{
              movies: [
                {
                  id: '123',
                  title: "Pokemon",
                  popularity: 9.2,
                  release_date: '2020-09-12',
                  vote_average: 1029
                },
                {
                  id: '56',
                  title: "Naruto",
                  popularity: 8.1,
                  release_date: '2019-11-20',
                  vote_average: 1029
                }
              ],
              getUpcomingMovies: jest.fn(),
              dispatch: jest.fn(),
              getTopRatedMovies: jest.fn()
            }}
          >
          <MemoryRouter>{children}</MemoryRouter>
        </MoviesContext.Provider>
        </AuthStateContext.Provider>
      </AuthProvider>
    );
  };

  const customRender = (ui, options) => {
    render(ui, { wrapper: Wrapper, ...options });
  };

  test('the component should render correctly', () => {

    customRender(<TopRated />);
    expect(screen.getByText(/Pokemon/i)).toBeInTheDocument();
    expect(screen.getByText(/Naruto/i)).toBeInTheDocument();
  })
  
})
