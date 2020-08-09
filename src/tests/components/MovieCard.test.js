import React from 'react'
import "@testing-library/jest-dom";
import { mount } from 'enzyme';
import { MovieCard } from '../../components/movies/MovieCard';
import { AuthProvider } from '../../context/authContext';
import { MoviesContext } from '../../context/MoviesContext';
import { MemoryRouter } from 'react-router-dom';

describe('Test in <MovieCard />', () => {

  test('should show correctly component', () => {

    const contextValue = {
      deleteMovieFromFavorites: jest.fn()
    }
    
    const wrapper = mount(
      <AuthProvider>
        <MoviesContext.Provider value={contextValue}>
          <MemoryRouter>
            <MovieCard />
          </MemoryRouter>
        </MoviesContext.Provider>
      </AuthProvider>
    )

    expect(wrapper).toMatchSnapshot();
  })
  
  
})
