'use strict';
import request from 'superagent';
const baseDir = 'https://api.spotify.com/v1';

var spotifyApi = {
  getRandomArtist: (callback) => {
    let offset = Math.floor(Math.random() * (60000 - 1 + 1)) + 1;
    request
      .get(`${baseDir}/search`)
      .query({
        q: 'year:2001',
        type:'artist',
        market: 'MX',
        limit: 1,
        offset
       })
      .end(callback);
  },
  getArtistAlbums: (id, callback) => {
    request
      .get(`${baseDir}/artists/${id}/albums`)
      .end(callback);
  },
  getArtistTopTracks: (id, callback) => {
    request
      .get(`${baseDir}/artists/${id}/top-tracks`)
      .query({
        country: 'MX'
      })
      .end(callback);
  },
}

export default spotifyApi;
