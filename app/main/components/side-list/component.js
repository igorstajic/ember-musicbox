import Ember from 'ember';
const {
  Component,
  get,
  computed
} = Ember;
export default Component.extend({
  classNames: ['table-filter read-only'],
  values: []
});
