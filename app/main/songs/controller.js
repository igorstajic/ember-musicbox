import Ember from 'ember';
const {
  Controller,
  computed
} = Ember;
export default Controller.extend({
  all: computed.alias('model')
});
