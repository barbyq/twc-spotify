'use strict';
import React, { Component } from 'react';

class ProfileTracks extends Component  {
  constructor(props) {
    super(props);
  }

  renderTrack(track) {
    return (<li key={track.id}>{track.name}</li>);
  }

  render() {
    return (
      <div className="top-tracks">
        <h3>Top Tracks</h3>
        <ul>
          {this.props.tracks.map(this.renderTrack, this)}
        </ul>
      </div>
    );
  }
}

export default ProfileTracks;
