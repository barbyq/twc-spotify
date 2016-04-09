"use strict";

import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import DiscoverArtist from './components/artist/DiscoverArtist';
import Favorites from './components/favorites/Favorites';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DiscoverArtist} />
      <Route path="/favorites" component={Favorites}/>
    </Route>
  </Router>
);

export default routes;
