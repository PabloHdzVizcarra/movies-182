import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { PrincipalScreen } from '../pages/principal/PrincipalScreen';
import { NavBar } from '../components/navbar/NavBar';
import { TopRated } from '../layout/top_rated/TopRated';
import { Upcoming } from '../layout/proximamente/Upcoming';
import { SearchMovie } from '../layout/search/SearchMovie';
import { Movie } from '../layout/movie/Movie';
import { firebase } from '../libs/firebase';
import { useAuthDispatch } from '../context/authContext';
import { types } from '../types/types';
import { PageFavorites } from '../layout/favorites/PageFavorites';

export const AppRouter = () => {

  const dispatch = useAuthDispatch();

  firebase.auth().onAuthStateChanged(async(user) => {
    if (user) {

      const { email, emailVerified, displayName, uid } = user;

      dispatch({
        type: types.setActiveUser,
        payload: {
          email,
          emailVerified,
          displayName,
          uid
        }
      })
    } else {
      console.log('No hay usuario logueado');
    }

  });

  useEffect(() => {

  }, [])



  return (
    <div>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={PrincipalScreen} />
          <Route path="/popular" component={PrincipalScreen} />
          <Route path="/top" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route exact path="/search" component={SearchMovie} />
          <Route path="/search/:movieID" component={Movie} />
          <Route path="/favorites" component={PageFavorites} />

          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}
