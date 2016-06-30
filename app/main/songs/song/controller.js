import Ember from 'ember';
const {
  Controller,
  get,
  isEmpty,
  computed
} = Ember;
export default Controller.extend({
  song: computed.alias('model')
});
