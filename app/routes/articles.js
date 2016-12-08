import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return ['Article #1', 'Article #2', 'Article #3'];
  }
});
