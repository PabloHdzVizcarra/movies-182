import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './libs/fontawesome';
import { AppMovies } from './AppMovies';

ReactDOM.render(
  <React.StrictMode>
    <AppMovies />
  </React.StrictMode>,
  document.getElementById('root')
);
