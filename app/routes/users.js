import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return ['User #1', 'User #2', 'User #3'];
  }
});
