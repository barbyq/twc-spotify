'use strict';
import React, { Component } from 'react';
import mui from 'material-ui';
import ArtistProfile from './ArtistProfile';
import utils from '../../utils';
import spotifyApi from '../../spotifyApi';
import styles from './styles.scss';

class DiscoverArtist extends Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      tracks: [],
      albums: [],
      favorites: []
    };
    this.getRandomArtist = this.getRandomArtist.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  componentDidMount() {
    this.getRandomArtist();
    this.getFavorites();
  }

  getFavorites() {
    let favorites = utils.loadFavorites();
    this.setState({
      favorites
    })
  }

  onSaveClick(item) {
    let favorites = this.state.favorites;
    favorites.push(item);
    utils.saveToFavorites(favorites);
    this.setState({
      favorites
    });
  }

  getRandomArtist() {
    spotifyApi.getRandomArtist((err, res) => {
      if (!err) {
        let artist = res.body.artists.items[0];
        this.setState({
          artist
        });
        spotifyApi.getArtistAlbums(artist.id, (err, res) => {
          if (!err) {
            this.setState({
              albums: res.body.items
            });
          }
        });
        spotifyApi.getArtistTopTracks(artist.id, (err, res) => {
          if (!err) {
            this.setState({
              tracks: res.body.tracks
            });
          }
        });
      }
    });
  }

  renderArtistProfile() {
    if (this.state.artist) {
      return (
        <ArtistProfile
          artist={this.state.artist}
          albums={this.state.albums}
          tracks={this.state.tracks}
          onSaveClick={this.onSaveClick}
          onRandomArtistClick={this.getRandomArtist} />
      );
    }
  }

  render() {
    return (
      <div className="discover-artist">
          { this.renderArtistProfile() }
      </div>
    );
  }
}

export default DiscoverArtist;
