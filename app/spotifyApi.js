'use strict';
import request from 'superagent';

var spotifyApi = {
  getRandomArtist: (callback) => {
    var offset = Math.floor(Math.random() * (60000 - 1 + 1)) + 1;
    request
      .get(`https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=${offset}`)
      .end(callback)
  }
}

export default spotifyApi;
