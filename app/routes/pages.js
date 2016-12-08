import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return ['Page #1', 'Page #2', 'Page #3'];
  }
});
