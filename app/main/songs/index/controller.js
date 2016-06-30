import Ember from 'ember';
import {
  filterArrayFormatter
} from 'ember-musicbox/main/components/table-filter/component';
const {
  Controller,
  get,
  set,
  isEmpty,
  computed
} = Ember;
export default Controller.extend({
  songs: Ember.inject.controller(),
  allSongs: computed.alias('songs.all'),

  filteredList: computed('allSongs.[]', 'selectedArtistNames.[]', 'selectedGenreNames.[]', function() {
    return get(this, 'allSongs').filter(song => {
      return (get(this, 'selectedArtistNames').contains(get(song, 'artist.name')) || isEmpty(get(this, 'selectedArtistNames'))) &&
        (get(this, 'selectedGenreNames').contains(get(song, 'genre')) || isEmpty(get(this, 'selectedGenreNames')));
    });
  }),

  // Artist filter.
  selectedArtistNames: [],
  artistNames: computed('allSongs.[]', 'selectedArtistNames.[]', function() {
    return filterArrayFormatter(get(this, 'allSongs'), get(this, 'selectedArtistNames'), 'artist.name');
  }),
  // Genre filter.
  selectedGenreNames: [],
  genreNames: computed('allSongs.[]', 'selectedGenreNames.[]', function() {
    return filterArrayFormatter(get(this, 'allSongs'), get(this, 'selectedGenreNames'), 'genre');

  }),
  actions: {
    updateFilter(propertyName, artistName, eventObject) {
      if (eventObject.target.checked) {
        get(this, propertyName).addObject(artistName);
      } else {
        get(this, propertyName).removeObject(artistName);
      }
    },
    setRating(song, newRating) {
      set(song, 'hearts', newRating);
      song.save();
    }
  }
});
