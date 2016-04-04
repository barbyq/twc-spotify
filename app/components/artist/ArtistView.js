'use strict';
import React, { Component } from 'react';
import spotifyApi from '../../spotifyApi';

class ArtistView extends Component {
  constructor() {
    super();
    this.state = {
      artist: {
        images: [
          {
            url: ''
          }
        ]
      }
    };
  }
  componentDidMount() {
    spotifyApi.getRandomArtist((err, res) => {
      if (!err) {
        this.setState({
          artist: res.body.artists.items[0]
        });
      }
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.artist.images[0].url} />
        {this.state.artist.name}
      </div>
    );
  }
}

export default ArtistView;
