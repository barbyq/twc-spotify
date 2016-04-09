'use strict';
import React, { Component, PropTypes } from 'react';
import mui, { Card, CardMedia, CardTitle, RaisedButton } from 'material-ui';
import ProfilePicture from './ProfilePicture';
import ProfileTracks from './ProfileTracks';
import ProfileAlbums from './ProfileAlbums';
import Genres from './Genres';

const propTypes =  {
  artist: PropTypes.object.isRequired,
  albums: PropTypes.array.isRequired,
  tracks: PropTypes.array.isRequired
}

class ArtistProfile extends Component {
  constructor(props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  hasFollowers() {
    if(this.props.artist.followers) {
      return (
        <li><strong>Followers:</strong> {this.props.artist.followers.total}</li>
      );
    }
  }

  hasGenres() {
    if(this.props.artist.genres) {
      return (
        <li><Genres genres={this.props.artist.genres}/></li>
      );
    }
  }

  onSaveClick() {
    this.props.onSaveClick({
      name: this.props.artist.name,
      id: this.props.artist.id,
      image: this.props.artist.images[0].url || ''
    });
  }

  render() {
    return (
      <div className="artist-profile">
        <section>
          <Card>
            <CardMedia
              overlay={<CardTitle title={this.props.artist.name} />}>
                <ProfilePicture
                  src={this.props.artist.images}
                  width="300px" />
            </CardMedia>
          </Card>
          <div className="other-info">
            <h3>{this.props.artist.name}</h3>
            <ul>
              <li><strong>Popularity:</strong> {this.props.artist.popularity}</li>
              { this.hasFollowers() }
              { this.hasGenres() }
            </ul>
            <div className="actions">
              <RaisedButton
                label="Save Artist"
                secondary={true}
                onClick={this.onSaveClick} />
              <RaisedButton
                label="Find another artist"
                primary={true}
                onClick={this.props.onRandomArtistClick} />
            </div>
          </div>
          <ProfileTracks
            tracks={this.props.tracks} />
        </section>
        <ProfileAlbums
          albums={this.props.albums} />
      </div>
    );
  }
}

ArtistProfile.propTypes = propTypes;
export default ArtistProfile;
