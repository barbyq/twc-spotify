import React, { Component } from 'react';
import utils from '../../utils';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites() {
    let favorites = utils.loadFavorites();
    this.setState({
      favorites
    })
  }

  renderFavorites(favorite) {
    return (
    <li key={favorite.id}>
      <img src={favorite.image} />
      <span>{favorite.name}</span>
    </li>);
  }

  render() {
    return (
    <div className="favorites">
      <section>
        <h1>Favorites</h1>
        <ul>
          {this.state.favorites.map(this.renderFavorites)}
        </ul>
      </section>
    </div>);
  }
}

export default Favorites;
