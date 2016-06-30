import Ember from 'ember';
const {
  Component,
  get,
  computed
} = Ember;
export default Component.extend({
  classNames: ['table-filter'],
  title: 'Default title',
  values: [],
  itemList: computed('values.[]', function() {
    return get(this, 'values').map(item => get(item, get(this, 'filterKey'))).uniq();
  }),
});
