import Ember from 'ember';
const {
  Component
} = Ember;
export default Component.extend({
  detailsClosed: true,
  actions: {
    toggleDetails() {
      this.toggleProperty('detailsClosed');
    }
  }
});
