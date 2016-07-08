import Ember from 'ember';
const {
  Component,
  get,
  computed
} = Ember;
export default Component.extend({
  classNames: ['table-filter'],
  classNameBindings: ['isReadOnly:read-only'],
  isReadOnly: false,
  title: 'Default title',
  values: [],
  selectedValues: [],
  valueList: computed('values.[]','selectedValues.[]', function() {
    return get(this,'values').map(value => {
      return {
        'name': value,
        'selected': get(this,'selectedValues').contains(value)
      };
    });
  })
});
