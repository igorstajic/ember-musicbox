import Ember from 'ember';
const {
  Controller,
  get,
  isEmpty,
  computed
} = Ember;
export default Controller.extend({
  selectedArtistNames: [],
  selectedGenreNames: [],

  allSongs: computed.alias('model'),

  filteredList: computed('allSongs.[]', 'selectedArtistNames.[]', 'selectedGenreNames.[]', function() {
    return get(this, 'allSongs').filter(song => {
      return (get(this, 'selectedArtistNames').contains(get(song, 'artist.name')) || isEmpty(get(this, 'selectedArtistNames'))) &&
        (get(this, 'selectedGenreNames').contains(get(song, 'genre')) || isEmpty(get(this, 'selectedGenreNames')));
    });
  }),

  actions: {
    updateFilter(propertyName, artistName, eventObject) {
      if (eventObject.target.checked) {
        get(this, propertyName).addObject(artistName);
      } else {
        get(this, propertyName).removeObject(artistName);
      }
    }
  }
});
