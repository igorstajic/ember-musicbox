import Ember from 'ember';
const {
  Component,
  get
} = Ember;
export default Component.extend({
  classNames: ['table-filter'],
  classNameBindings: ['isReadOnly:read-only'],
  isReadOnly: false,
  title: 'Default title',
  values: []
});

export function filterArrayFormatter(originalDataArray, selectionArray, key) {
  return originalDataArray.map(item => get(item, key)).uniq().map(value => {
    return {
      'name': value,
      'selected': selectionArray.contains(value)
    };
  });
}
