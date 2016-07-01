import Ember from 'ember';
const {
  Service,
} = Ember;
export default Service.extend({
  timeFormat: 'mm:ss',
  timeFormatOptions: ['mm:ss', 'mm:ss:SSS', 'hh:mm:ss', 'hh:mm:ss:SSS']

});
