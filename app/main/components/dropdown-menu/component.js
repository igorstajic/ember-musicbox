import Ember from 'ember';
const {
  Component
} = Ember;
export default Component.extend({
  classNames: ['dropdown'],

  didRender() {
    this.$('.dropdown-menu').on('click', function(e) {
      e.stopPropagation();
    });
  }
});
