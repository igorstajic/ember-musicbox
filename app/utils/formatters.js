import Ember from 'ember';
const {get} = Ember;

export default function filterArrayFormatter(array, selectedArray, key) {
  return array.map(item => get(item, key)).uniq().map(value => {
    return {
      'name': value,
      'selected': selectedArray.contains(value)
    };
  });
}
