import DS from 'ember-data';
import MF from 'model-fragments';

export default DS.Model.extend({
  someProp: MF.fragment('outer-fragment'),
});
