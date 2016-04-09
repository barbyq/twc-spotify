'use strict';
import React, { Component, GridList } from 'react';

class ProfileAlbums extends Component  {
  constructor(props) {
    super(props);
  }

  renderAlbums(album) {
    return (
      <li key={album.id} className="album">
        <img src={album.images[0].url} />
        <span>{album.name}</span>
      </li>
    );
  }

  render() {
    return (
      <div className="top-albums">
        <h3>Top Albums</h3>
        <ul>
          {this.props.albums.map(this.renderAlbums, this)}
        </ul>
      </div>
    );
  }
}

export default ProfileAlbums;
