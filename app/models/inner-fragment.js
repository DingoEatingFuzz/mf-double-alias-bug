import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  prop1: DS.attr(),
  prop2: DS.attr(),
});
