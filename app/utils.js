'use strict';

var utils = {
  loadFavorites: (item) => {
    let favorites = localStorage.getItem('twc-spotify');
    if (favorites) {
      return JSON.parse(favorites);
    }
    return [];
  },

  saveToFavorites: (favorites) => {
    localStorage.setItem('twc-spotify', JSON.stringify(favorites));
  }
}

export default utils;
