import Ember from 'ember';
const {
  Component,
  get,
  computed
} = Ember;
export default Component.extend({
  classNames: ['table-filter'],
  title: 'Default title',
  values: []
});
