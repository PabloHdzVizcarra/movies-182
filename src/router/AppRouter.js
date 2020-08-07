import React, { useState } from 'react';
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
import { PageFavorites } from '../layout/favorites/PageFavorites';
import { PrivateRoute } from './PrivateRoute';
import { actionSetActiveUser } from '../actions/auth-actions';

export const AppRouter = () => {

  const dispatch = useAuthDispatch();
  const [isLogin, setIsLogin] = useState(false);

  firebase.auth().onAuthStateChanged(async(user) => {
    if (user) {

      dispatch(actionSetActiveUser(user));

      setIsLogin(true);
    } else {
      setIsLogin(false);
      console.log("NOT LOGIN USER");
    }
  });

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
          {/* <Route path="/favorites" component={PageFavorites} /> */}

          <PrivateRoute
            isLogin={isLogin}  
            path="/favorites"
            component={PageFavorites}
          />

          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}
