import Ember from 'ember';
const {
  Controller,
  get,
  set,
  isEmpty,
  computed,
  inject
} = Ember;
export default Controller.extend({

  songs: inject.controller(),
  allSongs: computed.alias('songs.all'),

  filteredList: computed('allSongs.[]', 'selectedArtistNames.[]', 'selectedGenreNames.[]', function() {
    return get(this, 'allSongs').filter(song => {
      return (get(this, 'selectedArtistNames').contains(get(song, 'artist.name')) || isEmpty(get(this, 'selectedArtistNames'))) &&
        (get(this, 'selectedGenreNames').contains(get(song, 'genre')) || isEmpty(get(this, 'selectedGenreNames')));
    });
  }),

  // Artist filter.
  selectedArtistNames: [],
  artistNames: computed('allSongs.[]', function() {
    return get(this, 'allSongs').mapBy('artist.name').uniq();
  }),
  // Genre filter.
  selectedGenreNames: [],
  genreNames: computed('allSongs.[]', function() {
    return get(this, 'allSongs').mapBy('genre').uniq();

  }),
  actions: {
    updateFilter(propertyName, value, eventObject) {
      if (eventObject.target.checked) {
        get(this, propertyName).addObject(value);
      } else {
        get(this, propertyName).removeObject(value);
      }
    },
    setRating(song, newRating) {
      set(song, 'hearts', newRating);
      song.save();
    }
  }
});
