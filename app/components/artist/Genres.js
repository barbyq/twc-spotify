'use strict';
import React, { Component, GridList } from 'react';

class Genres extends Component  {
  constructor(props) {
    super(props);
  }

  renderGenre(genre, index) {
    return (
      <li key={index} className="genre">{genre}</li>
    );
  }

  render() {
    return (
      <div>
        <strong>Genres:</strong>
        <ul className="genres">
          {this.props.genres.map(this.renderGenre, this)}
        </ul>
      </div>
    );
  }
}

export default Genres;
