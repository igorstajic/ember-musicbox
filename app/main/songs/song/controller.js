import Ember from 'ember';
const {
  Controller,
  get,
  computed
} = Ember;
export default Controller.extend({
  songs: Ember.inject.controller(),

  song: computed.alias('model'),
  allSongs: computed.alias('songs.all'),

  otherSongNames: computed('allSongs.[]', 'song', function() {
    return get(this, 'allSongs').filterBy('artist.name', get(this, 'song.artist.name')).map(song => get(song, 'name')).removeObject(get(this, 'song.name'));
  }),
});
