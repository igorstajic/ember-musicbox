import Ember from 'ember';
const {
  Controller,
  computed,
  set,
  inject: {
    service
  }
} = Ember;
export default Controller.extend({
  globalSettings: service(),
  all: computed.alias('model'),
  
  actions: {
    setTimeFormat(format) {
      set(this, 'globalSettings.timeFormat', format);
    }
  }
});
