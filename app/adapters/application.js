import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://dublin-drupal.lc',
  namespace: 'api'
});
