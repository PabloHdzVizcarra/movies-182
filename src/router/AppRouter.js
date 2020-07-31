import React from 'react';
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

export const AppRouter = () => {
  return (
    <div>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={PrincipalScreen} />
          <Route path="/popular" component={PrincipalScreen} />
          <Route path="/top" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/search" component={SearchMovie} />

          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}
