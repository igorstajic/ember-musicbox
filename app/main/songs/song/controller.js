import Ember from 'ember';
const {
  Controller,
  get,
  set,
  computed
} = Ember;
export default Controller.extend({
  songs: Ember.inject.controller(),

  allSongs: computed.alias('songs.all'),
  song: computed.alias('model'),

  albumDetailsClosed: true,

  otherSongNames: computed('allSongs.[]', 'song', function() {
    return get(this, 'allSongs').filterBy('artist.name', get(this, 'song.artist.name')).map(song => get(song, 'name')).removeObject(get(this, 'song.name'));
  }),
  actions: {
    setRating(song, newRating) {
      set(song, 'hearts', newRating);
      song.save();
    }
  }
});
