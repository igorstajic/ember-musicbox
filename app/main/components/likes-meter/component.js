import Ember from 'ember';
const {
  Component,
  computed,
  get
} = Ember;
export default Component.extend({
  classNames: ['likes-panel'],

  totalHearts: computed('currentRating', 'maxRating', function() {
    let fullHearts = this.calculateRating(1, get(this, 'currentRating'), true);
    let emptyHearts = this.calculateRating(get(this, 'currentRating') + 1, get(this, 'maxRating'), false);
    return fullHearts.concat(emptyHearts);
  }),

  calculateRating(start, end, isFull) {
    let hearts = [];
    for (let i = start; i <= end; i++) {
      hearts.push({
        rating: i,
        full: isFull
      });
    }
    return hearts;
  },
  actions: {
    updateRating(item, newRating, isFull) {
      // Reuce rating if clicking on full heart.
      if (isFull) {
        this.attrs.update(item, newRating - 1);
      } else {
        this.attrs.update(item, newRating);
      }
    }
  }
});
