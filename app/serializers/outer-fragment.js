import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
  attrs: {
    innerFragments: 'inner-fragments',
  },
});
