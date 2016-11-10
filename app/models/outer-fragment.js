import MF from 'model-fragments';
import DS from 'ember-data';

export default MF.Fragment.extend({
  innerFragments: MF.fragmentArray('inner-fragment'),
  other: DS.attr(),
});
