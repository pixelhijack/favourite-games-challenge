import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';

const apiUrl = '../data/games.json';

// http://favourite-games-challenge-pixelhijack.c9users.io:8080/

render(
  <App url={apiUrl}></App>,
  document.getElementById('content')
);