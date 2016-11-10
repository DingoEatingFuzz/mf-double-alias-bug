import Ember from 'ember';

export default Ember.Component.extend({
  model: null,

  firstAlias: Ember.computed.alias('model.someProp'),
  secondAlias: Ember.computed.alias('firstAlias.innerFragments'),

  someProps: function() {
    return this.get('secondAlias').mapBy('prop1');
  }.property('secondAlias.@each.prop1'),
});
