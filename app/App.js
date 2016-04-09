'use strict';
import React,  { Component } from 'react';
import mui, { AppBar, RaisedButton } from 'material-ui';
import { Link } from 'react-router'
import DiscoverArtist from './components/artist/DiscoverArtist';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Discover Artist"/>
        <nav>
          <RaisedButton
            label="Favorites"
            containerElement={<Link to="/favorites" />}
            linkButton={true}
            secondary={true} />
          <RaisedButton
            label="Discover Artist"
            containerElement={<Link to="/" />}
            linkButton={true}
            secondary={true} />
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
